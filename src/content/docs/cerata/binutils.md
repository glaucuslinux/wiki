---
title: binutils
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- depends on `zstd`
- do not symlink toolchain's usr/$TGT to gcc-ar/gcc-nm/gcc-ranlib as it will loop infinitely and thrash your system
