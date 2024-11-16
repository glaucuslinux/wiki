---
title: wget2
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- We don't provide `libidn` and `libidn2`
- Disable `libpcre` and use `libpcre2` instead
- Check if we need `libpsl`
- Does not build with LibreSSL and reflex (`css_tokenizer.lex` issue)
- `/etc/wgetrc` should contain `ca_certificate=/etc/ssl/certs/ca-certificates.crt`
