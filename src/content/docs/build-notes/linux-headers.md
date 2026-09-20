---
title: linux-headers
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Provide before `musl-headers` in stage 1 (toolchain) to prevent overwriting libc headers

## Prepare
- `mrproper` requires `ARCH`

## Package
- `headers_install` requires `rsync` and removes kernel headers cmd files by default
- `INSTALL_HDR_PATH="$cross"/usr` only works with `headers_install` target (not `headers`)
- `find usr/include ! -name '*.h' -type f -delete` removes all `.cmd` files, `.gitignore`, `headers_check.pl` and `Makefile`
- Remove `usr/include/drm` to use headers from `libdrm`

## Other
- The `headers_check` target runs a few trivial sanity checks on the headers before install
  - checks if a header includes something nonexistent
  - checks if the declarations inside the headers are sane
  - checks if kernel internals are leaked into user space
  - not that useful for release tarballs but could come in handy when working with kernel git trees
