---
title: mtools
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Does it depend on `acl` and `texinfo`?
- `--without-x` disables `floppyd` as `floppyd` depends on X stuff
- `xdf` is for floppy disks
- Prefer `/etc/mtools.conf` over `/etc/mtools` (and `--sysconfdir=/etc/mtools`) according to upstream
