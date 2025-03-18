---
title: mimalloc
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Do not forget to enable `-DMI_OPT_SIMD=ON` when v3 becomes stable
- `MI_OPT_ARCH` is enabled by default in v3
- Alpine adds `-D__USE_ISOC11` to `CFLAGS` to detect `aligned_alloc`
- `MI_SECURE` is `OFF` by default
- Export `LD_PRELOAD=/usr/lib/libmimalloc.so` in `/etc/profile` (or `/etc/environment`?)

## Resources
- https://github.com/bell-sw/alpaquita-aports/blob/stream/core/mimalloc
- https://github.com/microsoft/mimalloc/issues/597
