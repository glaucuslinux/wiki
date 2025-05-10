---
title: linux-headers
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- `INSTALL_HDR_PATH="$CRSD"/usr` only works with `headers_install` target (not `headers`)
- `find usr/include -name '.*' -delete` does not remove `Makefile` and `headers_check.pl`
- Remove `usr/include/drm` to use headers from `libdrm`
