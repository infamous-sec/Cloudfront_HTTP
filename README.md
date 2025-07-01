# Cloudfront_HTTP

[![Deploy Status](https://img.shields.io/github/actions/workflow/status/shadowlane-sc/Cloudfront_HTTP/deploy.yml?branch=main&label=Deploy%20Status)](https://github.com/shadowlane-sc/Cloudfront_HTTP/actions)
[![Twake Deploy](https://img.shields.io/github/actions/workflow/status/shadowlane-sc/Cloudfront_HTTP/twake.yml?branch=main&label=Twake%20Deploy)](https://github.com/shadowlane-sc/Cloudfront_HTTP/actions)
[![Last Commit](https://img.shields.io/github/last-commit/shadowlane-sc/Cloudfront_HTTP?color=informational)](https://github.com/shadowlane-sc/Cloudfront_HTTP/commits/main)
[![Repo Size](https://img.shields.io/github/repo-size/shadowlane-sc/Cloudfront_HTTP?color=blue)](https://github.com/shadowlane-sc/Cloudfront_HTTP)
[![License](https://img.shields.io/github/license/shadowlane-sc/Cloudfront_HTTP?color=brightgreen)](LICENSE.md)

<!-- Programming Languages & Stats -->
[![Languages](https://img.shields.io/github/languages/count/shadowlane-sc/Cloudfront_HTTP?color=blueviolet&label=Languages)](https://github.com/shadowlane-sc/Cloudfront_HTTP)
[![Top Language](https://img.shields.io/github/languages/top/shadowlane-sc/Cloudfront_HTTP?color=orange&label=Top%20Language)](https://github.com/shadowlane-sc/Cloudfront_HTTP)
[![Lines of Code](https://img.codetabs.com/github/shadowlane-sc/Cloudfront_HTTP.svg)](https://github.com/shadowlane-sc/Cloudfront_HTTP)

<!-- Specific Language Badges -->
![Node.js](https://img.shields.io/badge/Node.js-%23339933?style=flat&logo=nodedotjs&logoColor=white)
![PHP](https://img.shields.io/badge/PHP-%23777BB4?style=flat&logo=php&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=flat&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-%233776AB?style=flat&logo=python&logoColor=white)
![Shell](https://img.shields.io/badge/Shell-%23121011?style=flat&logo=gnu-bash&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-%230db7ed?style=flat&logo=docker&logoColor=white)

<!-- Integrations -->
[![Slack Notify](https://img.shields.io/badge/Slack-Integrated-blue?logo=slack)](https://slack.com/)
[![Discord Alerts](https://img.shields.io/badge/Discord-Alerts-blueviolet?logo=discord)](https://discord.com/)
[![Matrix](https://img.shields.io/badge/Matrix-Supported-2dba4e?logo=matrix)](https://matrix.to/#/#shadowlane:matrix.org)

<!-- Security and Funding -->
[![Security Policy](https://img.shields.io/badge/Security-Policy-blue)](SECURITY.md)
[![Code of Conduct](https://img.shields.io/badge/Code%20of%20Conduct-active-brightgreen)](CODE_OF_CONDUCT.md)
[![Ko-fi](https://img.shields.io/badge/Buy%20me%20a%20coffee-Ko--fi-FF5E5B?logo=kofi&logoColor=white)](https://ko-fi.com/shadowlanesc)
[![Sponsor via GitHub](https://img.shields.io/badge/Sponsor-GitHub-brightgreen?logo=github)](https://github.com/sponsors/shadowlane-sc)
---

## Overview

**Cloudfront_HTTP** is a modular, security-focused framework for building, deploying, and observing business websites and secure services.
- Hardened for CI/CD and rapid iteration.
- Cloudflare reverse-proxy and Zero Trust ready.
- All secrets and sensitive code are handled with security best practices.
- All user-facing apps support E2E encryption when possible.

### Repo Structure

- `site/` – Main website (HTML5, PHP, static content)
- `medusa-store/` – Secure e-commerce backend (Medusa, Node.js, Dockerized)
- `twake/` – Twake collaboration/chat suite, with PostgreSQL/Redis/Minio, Cloudflare ready, frontend obfuscation and strong E2E support
- `observer-node/` – Sandboxed traffic analysis node
- `.github/` – Workflows, templates, and CI/CD configuration
- `docs/` – (optional) Documentation, architecture, and onboarding guides

### Key Features

- 🔒 **End-to-End Encryption:** All services are E2E-ready (Twake, Medusa, Matrix/Observer).
- 🔁 **CI/CD Ready:** Auto-build and deploy on any change (including `twake/`).
- 🛡️ **Security Hardening:**  
  - AppArmor profiles, Docker healthchecks, resource limits  
  - Optional frontend JS/CSS obfuscation for user-facing services  
  - Cloudflare Tunnel, minimal open ports
- ☁️ **Cloudflare Integration:** Deploy via subdomains and Zero Trust tunnels.
- 💬 **Integrations:** Slack/Discord/Matrix, with alerting and notifications as needed.

### Getting Started

1. **Clone the repo**  
2. See each subfolder's README for service-specific setup.
3. For `twake/`, copy `.env.example` to `.env` and provide secrets.
4. Use Docker Compose and the provided CI/CD workflows for automated deployment.

### Contributing

- PRs, issues, and feature requests are welcome!
- See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### License

[MIT](LICENSE.md)

---

*For more info on each service, see the relevant subdirectory or the project [Wiki](https://github.com/shadowlane-sc/Cloudfront_HTTP/wiki) (if available).*