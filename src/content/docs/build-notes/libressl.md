---
title: libressl
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Replaces `openssl`
  - simple; no hard dependency on `perl`
  - clean
  - somewhat slower; some assembly removed
  - Not FIPS

## Prepare
- The release tarballs are already portable
- No need to patch `cnf` or prefix with `libressl-` if used as the default TLS library

## Configure
- `asm` acceleration are enabled by default for `x86-64`
- `--enable-libtls-only` only installs `libtls` for systems that use `openssl`

## Package
- Provides `/etc/ssl/cert.pem` by default; no need for `ca-certificates`
- Provides `nc`; short for `netcat` (prefer `openbsd netcat` to `gnu netcat`)

## Old
- `wget2` does not work with `iproute2` if `--with-openssl` is used, only `--with-ssl=libressl` works

## References
- https://blog.hboeck.de/archives/851-LibreSSL-on-Gentoo.html
- https://blogs.gentoo.org/mgorny/2020/12/29/openssl-libressl-libretls-and-all-the-terminological-irony/
- https://curl.se/docs/caextract.html
- https://curl.se/docs/sslcerts.html
- https://daniel.haxx.se/media/curl-user-survey-2024-analysis.pdf
- https://gitweb.gentoo.org/repo/proj/libressl.git/tree/
- https://istlsfastyet.com/
- https://youtube.com/watch?v=n1uaoJyBwHk
