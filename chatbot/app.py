"""Gradio chatbot for jesseheidner.com — answers as Jesse using resume context."""

import os
from pathlib import Path

import gradio as gr
from dotenv import load_dotenv

from agent import Me

load_dotenv(Path(__file__).resolve().parent.parent / ".env", override=True)


def main() -> None:
    port = int(os.getenv("GRADIO_SERVER_PORT", "7860"))
    share = os.getenv("GRADIO_SHARE", "").lower() in ("1", "true", "yes")
    me = Me()

    demo = gr.ChatInterface(
        me.chat,
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
