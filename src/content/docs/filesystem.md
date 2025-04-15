---
title: Filesystem
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Deprecations
- No `/boot/efi`; deprecated
- No `/etc/mtab`; succeeded by `/proc/mounts`
- No `/lib32` and `/lib64`; pure 64-bit system
- No `/run/shm`; succeeded by `/dev/shm`
- No `/run/tmp`; only useful for embedded systems on Debian
- No `/var/db`; a BSD relic that was succeeded by `/var/lib`

## Compatibility Symlinks
- `/bin` as a symlink to `/usr/bin`
- `/lib` as a symlink to `/usr/lib`
- `/sbin` as a symlink to `/usr/bin`
- `/usr/libexec` as a symlink to `/usr/bin` or `/usr/lib` or not at all?
- `/usr/sbin` as a symlink to `/usr/bin`
- `/var/lock` as a symlink to `/run/lock`
- `/var/run` as a symlink to `/run`
- `/var/spool/mail` as a symlink to `/var/mail`
- Sticky bit (`1777`) is set on `/dev/shm`, `/tmp` and `/var/tmp` (and `/var/mail`?)

## References
- FHS 3.0
- https://musl.libc.org/doc/1.1.24/manual.html
- https://wiki.debian.org/ReleaseGoals/RunDirectory
