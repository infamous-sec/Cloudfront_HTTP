
# ☁️ Cloudfront_HTTP

A dynamic, obfuscated web deployment pipeline built by **ShadowLane SC UK** for automated delivery to cPanel shared hosting using Docker and FTP/SFTP.

![Deploy](https://img.shields.io/github/actions/workflow/status/shadowlane-sc/Cloudfront_HTTP/deploy.yml)
![License](https://img.shields.io/github/license/shadowlane-sc/Cloudfront_HTTP)
![Repo Size](https://img.shields.io/github/repo-size/shadowlane-sc/Cloudfront_HTTP)
![Maintained](https://img.shields.io/badge/maintained-yes-blue)

---

## 🚀 Features

- 🔧 Docker-based build pipeline  
- 🔐 JavaScript code obfuscation  
- 📤 Auto-deployment to cPanel via FTP/SFTP  
- ⚡ Lightweight, no external CI required (optional GitHub Actions support)  

---

## 🗂️ Structure

. ├── app/                  # Your web app (React/Node/etc) ├── scripts/              # Local-only scripts (obfuscate, inject-env, etc) ├── docker-compose.yml    # Build + deploy logic ├── deploy.env.example    # Deployment template ├── .dockerignore ├── .env └── README.md

---

## 📦 Deployment (Manual)

```bash
cp deploy.env.example deploy.env
docker-compose up --build

> ⚠️ Do not commit real deploy.env. Use Portainer secrets or environment variables.




---

🛠️ Local Dev

cd app
npm install
npm run dev


---

🧩 Optional GitHub Actions

You can automate deployment using GitHub Actions – see .github/workflows/deploy.yml.


---

📜 License

MIT — feel free to adapt.


---

Made with ☠️ by ShadowLane SC UK

---

### 📄 `LICENSE` (MIT)

```text
MIT License

Copyright (c) 2025 ShadowLane

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



