# Deploy chatbot to Hugging Face Spaces

Use this guide to host the Gradio app so recruiters can use it on [jesseheidner.com/chat.html](https://jesseheidner.com/chat.html).

## 1. Create the Space

1. Go to [huggingface.co/new-space](https://huggingface.co/new-space).
2. **Space name:** `jesse-heidner-chat` (or your choice — update `js/chat-config.js` with the final URL).
3. **SDK:** Gradio.
4. **Visibility:** Public.
5. Create the Space.

Your live URL will be:

```text
https://<your-hf-username>-<space-name>.hf.space
```

Example: `https://jhheidner-jesse-heidner-chat.hf.space`

## 2. Upload files to the Space repo

The Space repository root should look like this:

```text
app.py              ← from chatbot/huggingface-space/app.py
context.py          ← from chatbot/huggingface-space/context.py
requirements.txt    ← from chatbot/huggingface-space/requirements.txt
README.md           ← from chatbot/huggingface-space/README.md (Space card)
me/
  summary.txt
  Jesse_Heidner_QA Manager.pdf
```

**Option A — Git push (recommended)**

```bash
git clone https://huggingface.co/spaces/<username>/<space-name>
cd <space-name>

# Copy Space files from this project
cp ../jhwebsite/chatbot/huggingface-space/app.py .
cp ../jhwebsite/chatbot/huggingface-space/context.py .
cp ../jhwebsite/chatbot/huggingface-space/requirements.txt .
cp ../jhwebsite/chatbot/huggingface-space/README.md .
cp -r ../jhwebsite/me .

git add .
git commit -m "Add Jesse Heidner career chatbot"
git push
```

**Option B — Web UI**

Upload the same files via the Space **Files** tab on Hugging Face.

## 3. Add the OpenAI API key (required)

1. Open your Space → **Settings** → **Repository secrets**.
2. Add secret: `OPENAI_API_KEY` = your OpenAI key.
3. Optional: `OPENAI_MODEL` = `gpt-4o-mini` (default if unset).

Never commit `.env` or API keys to the Space repo.

## 4. Wait for the build

Open the Space **Logs** tab. When the build succeeds, open the Space URL and send a test message.

## 5. Connect your website

1. Copy your Space URL from the browser.
2. Edit `js/chat-config.js` in this website repo:

   ```javascript
   window.CHATBOT_EMBED_URL = "https://<your-hf-username>-<space-name>.hf.space";
   ```

3. Commit and push to GitHub Pages (or your host).
4. Visit `https://jesseheidner.com/chat.html` and confirm the chat loads.

**Local testing** while the Space is live:

```text
chat.html?embed=local
```

## 6. Keep context up to date

When you update your resume or summary:

1. Replace files in the Space `me/` folder.
2. Push to the Space repo (or upload via the UI).
3. The Space will rebuild automatically.

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Space build fails | Check **Logs**; verify `requirements.txt` and Python version |
| “Chatbot is not configured” | Add `OPENAI_API_KEY` in Space secrets |
| Blank iframe on website | Confirm `CHATBOT_EMBED_URL` in `js/chat-config.js` matches the Space URL exactly |
| Slow first message | Free Spaces sleep when idle; first request wakes the app (~30–60s) |
| PDF not in context | Ensure `me/Jesse_Heidner*.pdf` exists in the Space repo |

## Optional upgrades

- **Private Space** + paid HF plan if you want to limit public discovery of the Space URL.
- **OpenAI usage limits** in your OpenAI dashboard to cap monthly spend.
- **Custom domain** for the Space (HF Pro) — not required; iframe embed works with the default `.hf.space` URL.
