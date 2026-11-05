---
title: s6-rc
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Other
- For chroot and native builds, `s6-rc-compile` can be used to compile the database rather than copying it prebuilt from a git repo
- `s6-rc-compile` can only be run natively on the host as it embeds build-time paths into the compiled service database while the database itself is architecture‑independent

## References
- https://skarnet.org/software/s6-rc/why.html
