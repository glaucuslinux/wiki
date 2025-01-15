---
title: wget2
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `--with-openssl` breaks build with `libressl`
- Does `musl` support `libidn2`?
- Disable `libpcre` and use `libpcre2` instead
- Check if we need `libpsl`
- Does not support `reflex`; `css_tokenizer.lex` issue (depends on `flex`)
- `/etc/wgetrc` should contain `ca_certificate=/etc/ssl/certs/ca-certificates.crt`
