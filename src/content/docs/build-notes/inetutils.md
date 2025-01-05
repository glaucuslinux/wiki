---
title: inetutils
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Disable `r*` due to security concerns and are not supported on `musl`
- `--enable-encryption` and `--enable-authentication` depend on `kerberos`
- `--disable-ipv4` disables IPv4 tests

## Resources
- https://www.gnu.org/software/inetutils/manual/inetutils.html
