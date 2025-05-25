---
title: libressl
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Replaces `openssl`
- `--enable-libtls-only` only installs `libtls` for systems that use `openssl`
- Check `--enable-extratests`
- Provides `/etc/ssl/cert.pem` by default; no need for `ca-certificates`
- Provides `nc`; short for `netcat`
- No need to patch `cnf` or prefix with `libressl-` if used as the default TLS library

## References
- https://www.youtube.com/watch?v=n1uaoJyBwHk
