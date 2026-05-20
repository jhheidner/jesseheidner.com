# Jesse Heidner — Gradio Chatbot

AI chat assistant for [jesseheidner.com](https://jesseheidner.com) that answers in character using `me/summary.txt` and your LinkedIn/resume PDF.

## Setup

1. **Python 3.10+** installed.

2. **API key** in the project root `.env` (copy from `.env.example`):

   ```
   OPENAI_API_KEY=sk-...
   ```

3. **Context files** in `me/`:
   - Edit `me/summary.txt`
   - Add `me/Jesse_Heidner_QA Manager.pdf` (or any `Jesse_Heidner*.pdf`)

4. **Install and run:**

   ```bash
   cd chatbot
   python -m venv .venv
   .venv\Scripts\activate          # Windows
   pip install -r requirements.txt
   python app.py
   ```

5. Open **http://127.0.0.1:7860** or the site embed at **chat.html**.

## Website embed

`chat.html` embeds the chatbot via iframe. Production URL is set in **`js/chat-config.js`**.

| URL | Use |
|-----|-----|
| `chat.html` | Production (Hugging Face Space URL from config) |
| `chat.html?embed=local` | Local Gradio at `http://127.0.0.1:7860` |
| `chat.html?embed=https://...` | Override embed URL |

## Deploy to Hugging Face Spaces (production)

**Full guide:** [HUGGINGFACE_SPACE.md](./HUGGINGFACE_SPACE.md)

Ready-to-upload files are in **`huggingface-space/`** (`app.py`, `context.py`, `requirements.txt`, `README.md`) plus the project **`me/`** folder.

After the Space is live, update `js/chat-config.js`:

```javascript
window.CHATBOT_EMBED_URL = "https://<username>-<space-name>.hf.space";
```

## Other deploy options

| Host | Notes |
|------|--------|
| **Hugging Face Spaces** | Recommended — see `HUGGINGFACE_SPACE.md` |
| **Local** | `python app.py` + `chat.html?embed=local` |
| **Railway / Render** | `python app.py` with `GRADIO_SERVER_NAME=0.0.0.0` |

GitHub Pages only serves static files; the Gradio server must run elsewhere for production.

## Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `OPENAI_API_KEY` | — | Required |
| `OPENAI_MODEL` | `gpt-4o-mini` | Chat model |
| `GRADIO_SERVER_PORT` | `7860` | Local port |
| `GRADIO_SERVER_NAME` | `127.0.0.1` | Use `0.0.0.0` when deploying |
| `GRADIO_SHARE` | `false` | Temporary public Gradio link |
