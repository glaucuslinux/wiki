---
title: mawk
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `autoreconf -vfis` does not work
- Does not support `localedir`
- To cross-compile mawk we can pass `--with-build-cc` and others, but it is better to let the build system decide
```sh
BUILD_CC
BUILD_CPP
BUILD_CFLAGS
BUILD_CPPFLAGS
BUILD_LDFLAGS
```
