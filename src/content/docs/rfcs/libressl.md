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
- https://blog.hboeck.de/archives/851-LibreSSL-on-Gentoo.html
- https://blogs.gentoo.org/mgorny/2020/12/29/openssl-libressl-libretls-and-all-the-terminological-irony/
- https://curl.se/docs/caextract.html
- https://curl.se/docs/sslcerts.html
- https://gitweb.gentoo.org/repo/proj/libressl.git/log/
- https://youtube.com/watch?v=n1uaoJyBwHk
