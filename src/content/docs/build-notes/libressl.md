---
title: libressl
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `--enable-libtls-only` only installs `libtls` for systems that use `openssl`
- Check `--enable-extratests`
- Provides `/etc/ssl/cert.pem` by default; no need for `ca-certificates`
- Provides `nc`; short for `netcat`
- No need to patch `cnf` or prefix with `libressl-` as it is the default implementation on glaucus

## Resources
- https://www.youtube.com/watch?v=n1uaoJyBwHk
