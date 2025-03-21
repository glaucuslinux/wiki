---
title: seatd
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Do not depend on `logind` for `libseat`
- Does it depend on `basu`?
- Check if we need a service file?
- Do we need `chmod u+s` (suid) on `bin/seatd-launch`?
- Group name `video` vs `seat` (prefer the former as it already exists)

## Resources
- https://cgit.freebsd.org/ports/tree/sysutils/seatd/files/pkg-message.in
- https://cgit.freebsd.org/ports/tree/sysutils/seatd/Makefile
- https://github.com/openbsd/ports/tree/master/sysutils/seatd/patches
