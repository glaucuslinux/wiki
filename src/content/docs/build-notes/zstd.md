---
title: zstd
description: An opinionated Linux® distribution based on musl libc and toybox
---

- clear's fopen patch has an m mode (rbm) that is only for glibc
- The `notrace` patch is only for gcc 10, and is not needed with gcc 11+ as LTO works with zstd
- The `test` target is expensive, use `shortest` (aka `check`) instead
- Prefer `zstd -T0` to `zstdmt` and `pzstd` as it is more modern
- Level `3` is good enough; after level `19` it will regress
- `make` is the officially maintained build system (all other build systems are "compatible" and 3rd-party maintained)
- `HAVE_ZLIB`, `HAVE_LZMA` and `HAVE_LZ4` are automatically enabled when detected at build time; disable them explicitly
- No need to specify `lib-mt` build target as the dynamic library is multithreaded by default; and even though the static library is single-threaded it is being removed so that won't matter
- `-pthread` is included in `libzstd.pc` and is automatically passed when linking against it

## References
- https://github.com/facebook/zstd/blob/dev/examples/README.md
- https://github.com/facebook/zstd/blob/dev/lib/README.md
- https://github.com/facebook/zstd/blob/dev/programs/README.md
- https://github.com/facebook/zstd/blob/dev/tests/README.md
