---
title: xxhash
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Build
- `xxhsum` was benchmarked using `xxhsum --benchmark-all -i10`
- `-DLIBXXH_DISPATCH=1` increases size, decreases performance by 2x and requires an explicit include of `xxh_x86dispatch.h`
- `-DXXH_FORCE_MEMORY_ACCESS=1` forces a `gcc`ism that does nothing on modern compilers (`openbsd` uses it by default)
- `-DXXH_INLINE_ALL=1` breaks the build
- Default `CFLAGS` use `-O3` which result in the best performance/size ratio with `clang` (`gcc`'s `-O3` is bloated, use `-O2` instead)
- `-Os` regresses by at least 2-3x with `clang` even when `-DXXH_NO_INLINE_HINTS=0 -DXXH_SIZE_OPT=0` (`gcc`'s `-Os` is closer to `-O2`)
- No safe way to pass `LDFLAGS`
- Pass `PREFIX` and `DISPATCH=1` (for SSE/AVX on `x86-64`) to check and install targets as they are not detected in the Makefile

## Package
- `xxh3.h` is no longer useful and will be removed in `0.9.0`

## References
- https://github.com/Cyan4973/xxHash/issues/728
- https://github.com/openbsd/ports/blob/master/sysutils/xxhash/patches/patch-xxhash_h
