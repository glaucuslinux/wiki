---
title: cmake
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Use bundled version of `libuv` (for now)
- Use bundled version of `rhash` (nothing depends on it)
- Unset `$MAKE` as `cmake` expects `cmake_make_processor` to be equal to `$MAKE` which is `make` on glaucus, and that does not work when bootstrapping `cmake`
- Build `cmake` by itself to enable LTO (`BUILD_LTO=ON`)
- Test suite might require `LC_ALL=en_US.UTF-8` on LFS