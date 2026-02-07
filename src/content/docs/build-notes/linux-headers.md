---
title: linux-headers
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `INSTALL_HDR_PATH="$CRSD"/usr` only works with `headers_install` target (not `headers`)
- `find usr/include -name '.*' -delete` does not remove `Makefile` and `headers_check.pl`
- Remove `usr/include/drm` to use headers from `libdrm`
- The `headers_check` target runs a few trivial sanity checks on the headers before install
  - checks if a header includes something nonexistent
  - checks if the declarations inside the headers are sane
  - checks if kernel internals are leaked into user space
  - not that useful for release tarballs but could come in handy when working with kernel git trees
