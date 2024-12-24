---
title: binutils
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Depends on `zstd`
- `--disable-separate-code` bloats every executable and shared library by at least 2 MB
- Do not symlink `toolchain/usr/$TGT` to `gcc-ar`/`gcc-nm`/`gcc-ranlib` as it will loop infinitely and thrash your system
