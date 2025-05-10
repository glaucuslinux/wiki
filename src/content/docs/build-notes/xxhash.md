---
title: xxhash
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- Pass `PREFIX` and `DISPATCH=1` (for SSE/AVX on `x86-64`) to check and install targets as they are not detected in the Makefile
- Alpine and OpenBSD adds `-DXXH_FORCE_MEMORY_ACCESS=1` to `CFLAGS` (which prefers gcc to portable memcpy)

## References
- https://github.com/Cyan4973/xxHash/issues/728
- https://github.com/openbsd/ports/blob/master/sysutils/xxhash/patches/patch-xxhash_h
