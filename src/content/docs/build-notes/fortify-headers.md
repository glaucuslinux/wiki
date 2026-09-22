---
title: fortify-headers
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Other
- Kernel headers are backwards compatible but sabotage's `kernel-headers` are still very old (`4.19.88` with experimental `6.12.77`)
- Remember to patch `clang` or update `CFLAGS` to include `usr/include/fortify`

## References
- https://github.com/jvoisin/fortify-headers
- https://github.com/sabotage-linux/kernel-headers
