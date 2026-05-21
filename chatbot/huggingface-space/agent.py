"""Chat agent with OpenAI tool calling and optional Pushover notifications."""

import json
import os

import requests
from openai import OpenAI

from context import load_linkedin_pdf, load_summary

record_user_details_json = {
    "name": "record_user_details",
    "description": (
        "Use this tool to record that a user is interested in being in touch "
        "and provided an email address"
    ),
    "parameters": {
        "type": "object",
        "properties": {
            "email": {
                "type": "string",
                "description": "The email address of this user",
            },
            "name": {
                "type": "string",
                "description": "The user's name, if they provided it",
            },
            "notes": {
                "type": "string",
                "description": (
                    "Any additional information about the conversation that's "
                    "worth recording to give context"
                ),
            },
        },
        "required": ["email"],
        "additionalProperties": False,
    },
}

record_unknown_question_json = {
    "name": "record_unknown_question",
    "description": (
        "Always use this tool to record any question that couldn't be answered "
        "as you didn't know the answer"
    ),
    "parameters": {
        "type": "object",
        "properties": {
            "question": {
                "type": "string",
                "description": "The question that couldn't be answered",
            },
        },
        "required": ["question"],
        "additionalProperties": False,
    },
}

tools = [
    {"type": "function", "function": record_user_details_json},
    {"type": "function", "function": record_unknown_question_json},
]


def push(text: str) -> None:
    token = os.getenv("PUSHOVER_TOKEN")
    user = os.getenv("PUSHOVER_USER")
    if not token or not user:
        print(f"Pushover not configured, skipping: {text}", flush=True)
        return

    requests.post(
        "https://api.pushover.net/1/messages.json",
        data={"token": token, "user": user, "message": text},
        timeout=10,
    )


def record_user_details(email: str, name: str = "Name not provided", notes: str = "not provided"):
    push(f"Recording {name} with email {email} and notes {notes}")
    return {"recorded": "ok"}


def record_unknown_question(question: str):
    push(f"Recording unanswered question: {question}")
    return {"recorded": "ok"}


def _history_to_messages(history: list) -> list[dict]:
    messages = []
    for item in history:
        if isinstance(item, dict):
            role = item.get("role")
            content = item.get("content", "")
            if role in ("user", "assistant") and content:
                messages.append({"role": role, "content": content})
        elif isinstance(item, (list, tuple)) and len(item) >= 2:
            user_msg, assistant_msg = item[0], item[1]
            if user_msg:
                messages.append({"role": "user", "content": user_msg})
            if assistant_msg:
                messages.append({"role": "assistant", "content": assistant_msg})
    return messages


class Me:
    def __init__(self, name: str = "Jesse Heidner"):
        self.openai = OpenAI()
        self.name = name
        self.summary = load_summary()
        self.linkedin = load_linkedin_pdf()
        self.model = os.getenv("OPENAI_MODEL", "gpt-4o-mini")

    def handle_tool_call(self, tool_calls):
        results = []
        for tool_call in tool_calls:
            tool_name = tool_call.function.name
            arguments = json.loads(tool_call.function.arguments)
            print(f"Tool called: {tool_name}", flush=True)
            tool = globals().get(tool_name)
            result = tool(**arguments) if tool else {}
            results.append(
                {
                    "role": "tool",
                    "content": json.dumps(result),
                    "tool_call_id": tool_call.id,
                }
            )
        return results

    def system_prompt(self) -> str:
        prompt = (
            f"You are acting as {self.name}. You are answering questions on {self.name}'s website, "
            f"particularly questions related to {self.name}'s career, background, skills and experience. "
            f"Your responsibility is to represent {self.name} for interactions on the website as faithfully as possible. "
            f"You are given a summary of {self.name}'s background and LinkedIn profile which you can use to answer questions. "
            f"Be professional and engaging, as if talking to a potential client or future employer who came across the website. "
            f"If you don't know the answer to any question, use your record_unknown_question tool to record the question "
            f"that you couldn't answer, even if it's about something trivial or unrelated to career. "
            f"If the user is engaging in discussion, try to steer them towards getting in touch via email; "
            f"ask for their email and record it using your record_user_details tool."
        )
        prompt += f"\n\n## Summary:\n{self.summary}\n\n## LinkedIn Profile:\n{self.linkedin}\n\n"
        prompt += (
            f"With this context, please chat with the user, always staying in character as {self.name}."
        )
        return prompt

    def chat(self, message: str, history: list) -> str:
        if not os.getenv("OPENAI_API_KEY"):
            return (
                "This assistant is not configured yet. The site owner needs to add "
                "OPENAI_API_KEY in Hugging Face Space secrets."
            )

        messages = [{"role": "system", "content": self.system_prompt()}]
        messages.extend(_history_to_messages(history))
        messages.append({"role": "user", "content": message})
        done = False
        while not done:
            response = self.openai.chat.completions.create(
                model=self.model, messages=messages, tools=tools
            )
            if response.choices[0].finish_reason == "tool_calls":
                message_obj = response.choices[0].message
                tool_calls = message_obj.tool_calls
                results = self.handle_tool_call(tool_calls)
                messages.append(message_obj)
                messages.extend(results)
            else:
                done = True
        return response.choices[0].message.content or ""
