---
title: libevent
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `autoconf` is deprecated since 2.2
- Depends on `doxygen` to generate documentation
- Use `--disable-libevent-regress` to skip `regress_ssl.c` and `regress_http.c` that are known to fail due to incompatibilities
- Some tests that are related to `regress_dns.c` are also known to fail intermittently due to insufficient test timeouts on LFS
- `cmake` is available as an alternative build system with more options

## Resources
- https://gitlab.archlinux.org/archlinux/packaging/packages/libevent/-/blob/main/PKGBUILD
