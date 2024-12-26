---
title: wget2
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Does `musl` support `libidn2`?
- Disable `libpcre` and use `libpcre2` instead
- Check if we need `libpsl`
- Does not support LibreSSL; `css_tokenizer.lex` issue
- `/etc/wgetrc` should contain `ca_certificate=/etc/ssl/certs/ca-certificates.crt`