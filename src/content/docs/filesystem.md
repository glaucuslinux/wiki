---
title: Filesystem
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `/boot/efi` has been deprecated
- `/etc/mtab` has been deprecated; `mount` and `umount` traditionally maintained `/etc/mtab` for mounted filesystems, which is now completely disabled at compile time by default, although some systems still symlink `/etc/mtab` to `/proc/mounts` for compatibility
- No `/lib32` and `/lib64`; pure 64-bit system
- No `/libexec`
- No `/run/tmp`; only useful for embedded systems on Debian
- Sticky bit (`1777`) is set on `/tmp` and `/var/tmp` (and `/var/mail`?)
- `/usr` merge
- `/var/db` has been deprecated; a BSD relic that has been replaced with `/var/lib`
- `/var/lock` is symlink to `../run/lock` for compatibility (`/run/lock`)
- `/var/run` is symlink to `../run` for compatibility (`/run`)
- `/var/spool/mail` is symlink to `../mail` for compatibility (`/var/mail`)

## References
- FHS 3.0
- https://musl.libc.org/doc/1.1.24/manual.html
- https://wiki.debian.org/ReleaseGoals/RunDirectory
