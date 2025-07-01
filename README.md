# Cloudfront_HTTP

[![Deploy Status](https://img.shields.io/github/actions/workflow/status/shadowlane-sc/Cloudfront_HTTP/deploy.yml?branch=main&label=Deploy%20Status)](https://github.com/shadowlane-sc/Cloudfront_HTTP/actions)
[![Last Commit](https://img.shields.io/github/last-commit/shadowlane-sc/Cloudfront_HTTP?color=informational)](https://github.com/shadowlane-sc/Cloudfront_HTTP/commits/main)
[![Repo Size](https://img.shields.io/github/repo-size/shadowlane-sc/Cloudfront_HTTP?color=blue)](https://github.com/shadowlane-sc/Cloudfront_HTTP)
[![License](https://img.shields.io/github/license/shadowlane-sc/Cloudfront_HTTP?color=brightgreen)](LICENSE.md)
[![Languages](https://img.shields.io/github/languages/count/shadowlane-sc/Cloudfront_HTTP?color=blueviolet&label=Languages)](https://github.com/shadowlane-sc/Cloudfront_HTTP)
[![Top Language](https://img.shields.io/github/languages/top/shadowlane-sc/Cloudfront_HTTP?color=orange&label=Top%20Language)](https://github.com/shadowlane-sc/Cloudfront_HTTP)
[![Lines of Code](https://img.shields.io/tokei/lines/github/shadowlane-sc/Cloudfront_HTTP?color=purple&label=Lines%20of%20Code)](https://github.com/shadowlane-sc/Cloudfront_HTTP)

![Node.js](https://img.shields.io/badge/Node.js-%23339933?style=flat&logo=nodedotjs&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-%23777BB4?style=flat&logo=php&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=flat&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-%233776AB?style=flat&logo=python&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-%230db7ed?style=flat&logo=docker&logoColor=white)

[![Slack Notify](https://img.shields.io/badge/Slack-Integrated-blue?logo=slack)](https://slack.com/)
[![Discord Alerts](https://img.shields.io/badge/Discord-Alerts-blueviolet?logo=discord)](https://discord.com/)
[![Matrix](https://img.shields.io/badge/Matrix-Supported-2dba4e?logo=matrix)](https://matrix.to/#/#shadowlane:matrix.org)
[![Ko-fi](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-Ko--fi-%2346b798?logo=kofi&logoColor=white)](https://ko-fi.com/shadowlanesc)

---

A dynamic, obfuscated web deployment pipeline built by **ShadowLane SC UK** for automated delivery to cPanel shared hosting using Docker and FTP/SFTP.

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



