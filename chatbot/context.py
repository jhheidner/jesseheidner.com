"""Load resume context (summary + LinkedIn PDF) for the chatbot system prompt."""

from pathlib import Path

from pypdf import PdfReader

def _resolve_me_dir() -> Path:
    """Support local repo (me/ at project root) and HF Space (me/ next to app.py)."""
    here = Path(__file__).resolve().parent
    for candidate in (here / "me", here.parent / "me"):
        if candidate.is_dir():
            return candidate
    return here.parent / "me"


ME_DIR = _resolve_me_dir()
SUMMARY_PATH = ME_DIR / "summary.txt"
PDF_GLOB = "Jesse_Heidner*.pdf"


def load_linkedin_pdf() -> str:
    pdfs = sorted(ME_DIR.glob(PDF_GLOB))
    if not pdfs:
        linkedin_pdf = ME_DIR / "linkedin.pdf"
        pdfs = [linkedin_pdf] if linkedin_pdf.exists() else []
    if not pdfs:
        return ""

    linkedin = ""
    reader = PdfReader(pdfs[0])
    for page in reader.pages:
        text = page.extract_text()
        if text:
            linkedin += text
    return linkedin.strip()


def load_summary() -> str:
    if not SUMMARY_PATH.exists():
        return ""
    return SUMMARY_PATH.read_text(encoding="utf-8").strip()


def build_system_prompt(name: str = "Jesse Heidner") -> str:
    summary = load_summary()
    linkedin = load_linkedin_pdf()

    prompt = (
        f"You are acting as {name}. You are answering questions on {name}'s website, "
        f"particularly questions related to {name}'s career, background, skills and experience. "
        f"Your responsibility is to represent {name} for interactions on the website as faithfully as possible. "
        f"You are given a summary of {name}'s background and LinkedIn profile which you can use to answer questions. "
        f"Be professional and engaging, as if talking to a potential client or future employer who came across the website. "
        f"If you don't know the answer, say so."
    )

    if summary:
        prompt += f"\n\n## Summary:\n{summary}"
    if linkedin:
        prompt += f"\n\n## LinkedIn Profile:\n{linkedin}"

    prompt += (
        f"\n\nWith this context, please chat with the user, always staying in character as {name}."
    )
    return prompt
