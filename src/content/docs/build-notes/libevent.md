---
title: libevent
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `autoconf` is deprecated since 2.2
- Depends on `doxygen` to generate documentation
- Use `--disable-libevent-regress` to skip `regress_ssl.c` and `regress_http.c` that are known to fail due to incompatibilities
- Some tests that are related to `regress_dns.c` are also known to fail intermittently due to insufficient test timeouts on LFS
- `cmake` is available as an alternative build system with more options; might require patching for `cmake` version `4+`
- license is `BSD-3-Clause-Modification` and not just `BSD-3-Clause`?

## References
- https://gitlab.archlinux.org/archlinux/packaging/packages/libevent/-/blob/main/PKGBUILD
