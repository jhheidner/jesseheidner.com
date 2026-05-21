"""Gradio chatbot — Hugging Face Space entry point."""

import gradio as gr

from agent import Me

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

if __name__ == "__main__":
    demo.launch()
