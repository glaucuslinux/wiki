---
title: zlib-ng
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `--without-unaligned` improves safety; has been removed as of `2.2.3`
- `configure` depends on `bash`, but can be patched easily
- `libdeflate` is faster than `zlib-ng` but is not a drop-in replacement for `zlib`

## References
- https://github.com/gentoo/gentoo/pull/17167
- https://quixdb.github.io/squash-benchmark/?visible-plugins=zlib,zlib-ng
