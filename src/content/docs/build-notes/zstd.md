---
title: zstd
description: An opinionated Linux® distribution based on musl libc and toybox
---

- clear's fopen patch has an m mode (rbm) that is only for glibc
- The `notrace` patch is only for gcc 10, and is not needed with gcc 11+ as LTO works with zstd
- The `test` target is expensive, use `shortest` (aka `check`) instead
- Prefer `zstd -T0` to `zstdmt` and `pzstd` as it is more modern
- Level `3` is good enough; after level `19` it will regress
