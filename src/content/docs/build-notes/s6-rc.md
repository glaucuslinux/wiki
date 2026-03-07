---
title: s6-rc
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `s6-rc-compile` works in chroot
- For native builds, database is compiled instead of being copied from git repo
- `s6-rc-compile` must be run natively on the host as it embeds build-time paths into the compiled service database (the database itself is architecture‑independent); a workaround exists if both installation paths on the host and target match then we can compile the db on the host and copy it to the target (future versions of `s6-rc` will add runtime options to override these paths, making things relatively easier)
- There is no test suite

## References
- https://skarnet.org/software/s6-rc/why.html
