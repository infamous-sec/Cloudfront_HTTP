# ShadowLane Cloudfront_HTTP

A dynamic web deployment pipeline using Docker and FTP/SFTP to cPanel shared hosting.

## 🧱 Stack Overview

- `builder`: Runs build and obfuscation
- `deployer`: Pushes final output to cPanel via FTP/SFTP
- `scripts/`: Local-only custom build tooling
- `app/`: Your website source code (Node/React/etc.)

## 📦 Deployment

```bash
cp deploy.env.example deploy.env
docker-compose up --build
