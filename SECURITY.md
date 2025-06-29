# 🔐 Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please **do not create a public issue**.

Instead, report it **privately** to the maintainers by contacting:

- 📧 Email: security@shadowlane.cymru
- 🔐 Matrix (preferred): `@shadowlane:matrix.org`

We aim to respond to all reports within **48 hours**.

---

## Supported Versions

Only the latest version of `main` is actively maintained for security updates.

| Version | Supported |
|---------|-----------|
| main    | ✅         |
| others  | ❌         |

---

## Disclosure Policy

1. You report the vulnerability privately.
2. We verify and confirm the issue.
3. We work on a patch within a reasonable timeframe.
4. We notify you once resolved and credit you if desired.
5. Public disclosure may follow after the patch is available.

---

## Project Security Measures

- 🔐 Obfuscation of all production JS
- 🚫 `.env` and secrets never committed
- 🔑 FTP/SFTP secrets managed via GitHub Actions or Docker secrets
- 🧪 Linting and syntax checks in CI/CD

---

**Maintained by ShadowLane SC UK**  
https://shadowlane.cymru
