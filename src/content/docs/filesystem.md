---
title: Filesystem
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `/boot/efi` has been deprecated
- `/etc/mtab` has been deprecated
- Pure 64-bit system without `/lib32` and `/lib64`
- No `/libexec`
- No `/run/tmp`; only useful for embedded systems on Debian
- Sticky bit (`1777`) is set on `/tmp` and `/var/tmp` (and `/var/mail`?)
- `/usr` merge
- `/var/db` has been deprecated; a BSD relic that has been replaced with `/var/lib`
- `/var/lock` is symlink to `../run/lock` for compatibility (`/run/lock`)
- `/var/run` is symlink to `../run` for compatibility (`/run`)
- `/var/spool/mail` is symlink to `../mail` for compatibility (`/var/mail`)

## Resources
- https://wiki.debian.org/ReleaseGoals/RunDirectory
- FHS 3.0
