---
title: basu
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Provides a minimal bus from `systemd` to silence software that require it

## Prepare
- Depends on `gperf` and `python`
- Do we need builtin server for `libseat`/`seatd`?
- Requires nobody user to be `65534`?

## Configure
- Check if `libseat_logind=systemd` is needed?

## Other
- Chimera uses `tangle` instead of `basu`

## References
- https://github.com/chimera-linux/tangle
