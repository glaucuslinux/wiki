---
title: seatd
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Do not depend on `logind` (or `elogind`) for `libseat`
- `basu` may not be needed if we use the builtin backend
- Do we need `basu` alongside `seatd` for ipc to completely avoid `logind`/`systemd`?
- Group name `video` vs `seat` (prefer the former as it already exists)
- Provide a `seatd` service file with the `video` group owning the socket:
```
#!/bin/sh
exec seatd -g video 2>&1
```

## References
- https://cgit.freebsd.org/ports/tree/sysutils/seatd/files/pkg-message.in
- https://cgit.freebsd.org/ports/tree/sysutils/seatd/Makefile
- https://github.com/openbsd/ports/tree/master/sysutils/seatd/patches
