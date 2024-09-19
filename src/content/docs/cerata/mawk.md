---
title: mawk
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- To cross-compile mawk we can pass `--with-build-cc` and others, and it is generally better to let the build system figure them out

```c
BUILD_CC
BUILD_CPP
BUILD_CFLAGS
BUILD_CPPFLAGS
BUILD_LDFLAGS
```

- `autoreconf -vfis` breaks the build system
