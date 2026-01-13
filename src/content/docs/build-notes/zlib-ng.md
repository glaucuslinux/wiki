---
title: zlib-ng
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `--without-unaligned` improves safety; has been removed as of `2.2.3`
- `configure` depends on `bash`, but can be patched easily
- `libdeflate` is faster than `zlib-ng` but is not a drop-in replacement for `zlib`
- Use `--without-vpclmulqdq` for `x86-64-v3` as `VPCLMULQDQ` is part of `x86-64-v4` (`AVX-512`)

## References
- https://github.com/gentoo/gentoo/pull/17167
- https://news.ycombinator.com/item?id=37270631
- https://quixdb.github.io/squash-benchmark/?visible-plugins=zlib,zlib-ng
