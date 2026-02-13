---
title: xz
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `xz` can also decompress `lzip` files (`.lz`), as they share the same format (LZMA), starting from `5.4.0`
- OpenBSD uses `--enable-external-sha256`
- Both `pxz` and `pixz` depend on `xz` and do not provide `liblzma` and hence are not drop-in replacements for `xz`
- `xz` switched their `Public Domain` files to `0BSD`
- Chimera patches out the `gettext` dependency
