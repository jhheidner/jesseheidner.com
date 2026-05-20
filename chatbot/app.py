"""Gradio chatbot for jesseheidner.com — answers as Jesse using resume context."""

import os
from pathlib import Path

import gradio as gr
from dotenv import load_dotenv
from openai import OpenAI

from context import build_system_prompt

load_dotenv(Path(__file__).resolve().parent.parent / ".env")

SYSTEM_PROMPT = build_system_prompt()
MODEL = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))


def _history_to_messages(history: list) -> list[dict]:
    """Support Gradio history as message dicts or (user, assistant) tuples."""
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
            "The chatbot is not configured yet. Set OPENAI_API_KEY in the project "
            ".env file and restart the server."
        )

    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    messages.extend(_history_to_messages(history))
    messages.append({"role": "user", "content": message})

    response = client.chat.completions.create(model=MODEL, messages=messages)
    return response.choices[0].message.content or ""


def main() -> None:
    port = int(os.getenv("GRADIO_SERVER_PORT", "7860"))
    share = os.getenv("GRADIO_SHARE", "").lower() in ("1", "true", "yes")

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

    demo.launch(
        server_name=os.getenv("GRADIO_SERVER_NAME", "127.0.0.1"),
        server_port=port,
        share=share,
        show_error=True,
    )


if __name__ == "__main__":
    main()
