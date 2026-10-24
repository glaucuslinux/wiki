---
title: fortify-headers
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Other
- Update `CFLAGS` to include `usr/include/fortify` and pass `-D_FORTIFY_SOURCE=3`

## Other
- Kernel headers are backwards compatible but sabotage's `kernel-headers` are still very old (`4.19.88` with experimental `6.12.77`)

## References
- https://git.2f30.org/fortify-headers/
- https://github.com/jvoisin/fortify-headers
- https://github.com/sabotage-linux/kernel-headers
