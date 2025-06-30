# Medusa Store Backend

This folder contains the Medusa.js backend (API, admin, plugins).

## 🚀 Quick Start

1. Copy `.env.example` to `.env` and set secrets
2. Run:
   ```bash
   docker-compose up -d

API exposed at :9000

Admin panel at :7000 (if enabled)

Database (Postgres) and Redis included

Cloudflare Tunnel for private access


🛡️ Security

Use strong secrets

Never expose directly to the public internet

All admin/API traffic should go through Cloudflare Tunnel and Zero Trust rules


📝 License

See root LICENSE.md.