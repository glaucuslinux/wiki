---
title: cmake
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Use bundled version of `libuv` (for now)
- Use bundled version of `rhash` (nothing depends on it)
- Are the following lines reuiqred?
```sh
CFLAGS="$(echo $CFLAGS | sed 's/-flto=auto -flto-compression-level=19 -fuse-linker-plugin //')" \
CXXFLAGS="$(echo $CFLAGS | sed 's/-flto=auto -flto-compression-level=19 -fuse-linker-plugin //')" \
MAKE= \
```
- Test suite might require `LC_ALL=en_US.UTF-8` (LFS)
