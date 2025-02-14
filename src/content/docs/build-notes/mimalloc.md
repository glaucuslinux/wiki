---
title: mimalloc
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Alpine adds `-D__USE_ISOC11` to `CFLAGS` to detect `aligned_alloc`
- `MI_OPT_ARCH` is enabled by default
- `MI_SECURE` is `OFF` by default
- Export `LD_PRELOAD=/usr/lib/libmimalloc.so` in `/etc/profile` (or `/etc/environment`?)

## Resources
- https://github.com/microsoft/mimalloc/issues/597
