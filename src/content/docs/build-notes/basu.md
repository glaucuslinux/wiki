---
title: basu
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Depends on `gperf` and `python`
- Chimera no longer uses `basu`
- Provides a minimal bus from systemd; used to silence software that require `systemd`
- Check if `libseat_logind=systemd` is needed?
- Requires nobody user to be `65534`?
- Do we need builtin server for `libseat`/`seatd`?
