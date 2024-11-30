---
title: Filesystem
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- No `/boot/efi` (deprecated)
- No `/etc/mtab` (deprecated)
- No `/lib64` (Pure 64-bit system)
- No `/libexec`
- No `/run/tmp` (Debian says it is only useful for embedded systems)
- No `/sbin`
- Sticky bit (`1777`) is set on `/tmp` and `/var/tmp` (and `/var/mail`?)
- `/usr` merge
- No `/var/db` (deprecated; a BSD relic that has been replaced with `/var/lib`)
- `/var/lock` is a symlink to `../run/lock` (`/run/lock`)
- `/var/run` is a symlink to `../run` (`/run`)
- `/var/spool/mail` is a symlink to `../mail` (`/var/mail`)

## Resources
- https://wiki.debian.org/ReleaseGoals/RunDirectory
- FHS 3.0
