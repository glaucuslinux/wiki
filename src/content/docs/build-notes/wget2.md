---
title: wget2
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `--with-openssl` breaks build with `libressl`
- Disable `libidn` and `libidn2`; not needed and no `musl` support
- `wget2_noinstall`, `--enable-fuzzing` and `--enable-manylibs` are for developers
- Disable `libpcre` and use `libpcre2` instead
- Check if we need `libpsl`
- `css_tokenizer.lex` fails with `reflex`; depends on `flex`?
- `/etc/wgetrc` should contain `ca_certificate=/etc/ssl/certs/ca-certificates.crt`

## References
- https://gitlab.com/gnuwget/wget2/-/issues/603
