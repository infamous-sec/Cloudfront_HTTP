# Twake Chat Service

## Secure, End-to-End Encrypted Collaboration Suite

- E2E chat and encrypted file storage (when enabled in Twake)
- PostgreSQL and Redis for reliability
- Minio S3 storage for file uploads
- Cloudflare Tunnel for secure public access

## Deployment

1. Copy `.env.example` to `.env` and fill secrets.
2. Run `docker-compose up -d`.
3. Access Twake via your Cloudflare-connected domain/subdomain.

## Security & Hardening

- Obfuscation supported for frontend JS (see scripts/obfuscate.sh).
- Docker containers use AppArmor (see `hardening/twake-apparmor.profile`).
- Healthchecks, resource limits, and minimal privileges.