"""Gradio chatbot — Hugging Face Space entry point."""

import os

import gradio as gr
from openai import OpenAI

from context import build_system_prompt

SYSTEM_PROMPT = build_system_prompt()
MODEL = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


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


def chat(message: str, history: list) -> str:
    if not os.getenv("OPENAI_API_KEY"):
        return (
            "This assistant is not configured yet. The site owner needs to add "
            "OPENAI_API_KEY in Hugging Face Space secrets."
        )

    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    messages.extend(_history_to_messages(history))
    messages.append({"role": "user", "content": message})

    response = client.chat.completions.create(model=MODEL, messages=messages)
    return response.choices[0].message.content or ""


demo = gr.ChatInterface(
    fn=chat,
    title="Chat with Jesse Heidner",
    description=(
        "Ask about QA experience, test automation, projects, or how Jesse can help "
        "with your quality and development needs."
    ),
    examples=[
        "What QA services do you offer?",
        "Tell me about your Playwright and test automation experience.",
        "What projects have you worked on recently?",
    ],
)

if __name__ == "__main__":
    demo.launch()
