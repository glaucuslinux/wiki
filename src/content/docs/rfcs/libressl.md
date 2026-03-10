---
title: libressl
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Replaces `openssl`
  - simple; no hard dependency on `perl`
  - clean
  - somewhat slower; some assembly removed
  - Not FIPS
- `--enable-libtls-only` only installs `libtls` for systems that use `openssl`
- Check `--enable-extratests`
- Provides `/etc/ssl/cert.pem` by default; no need for `ca-certificates`
- Provides `nc`; short for `netcat`
- No need to patch `cnf` or prefix with `libressl-` if used as the default TLS library
- libressl: assembly acceleration of various algorithms for ELF (Linux, BSD, Solaris) and OS X systems are enabled for x86_64 CPU's. More optimizations may be enabled in later releases. These optimizations are disabled with the --disable-asm configure flag.
- Libressl needs static and fat lto
- libressl builds without errors when not using --disable-static
- remove -g and -O2 from libressl configure
- iproute2: don't use --with-openssl with wget2 as it won't work with libressl, only --with-ssl=libressl works

## References
- https://blog.hboeck.de/archives/851-LibreSSL-on-Gentoo.html
- https://blogs.gentoo.org/mgorny/2020/12/29/openssl-libressl-libretls-and-all-the-terminological-irony/
- https://curl.se/docs/caextract.html
- https://curl.se/docs/sslcerts.html
- https://daniel.haxx.se/media/curl-user-survey-2024-analysis.pdf
- https://gitweb.gentoo.org/repo/proj/libressl.git/tree/
- https://istlsfastyet.com/
- https://youtube.com/watch?v=n1uaoJyBwHk
