---
title: seatd
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Prepare
- `seatd` alongside `basu` for `ipc` to completely avoid `systemd`
- Do not depend on `logind` (or `elogind`) for `libseat`

## Configure
- `-Dlibseat-builtin=enabled` embeds `seatd` in the library/compositor requiring `root` or `setuid` privileges

## Package
- Prefer group name `video` vs `seat` as it already exists
- Provide a `seatd` service file with the `video` group owning the socket:
```
#!/bin/sh
exec seatd -g video 2>&1
```
