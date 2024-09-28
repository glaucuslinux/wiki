---
title: Filesystem
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Check if we should give /var/mail permissions of 1777 (Arch?)

- `/boot/efi` is deprecated
- `/etc/mtab` is deprecated
- `/var/db` is deprecated (a BSD relic that has been replaced with `/var/lib`)
- `/var/lock` is a symlink to `../run/lock` (`/run/lock`)
- `/var/run` is a symlink to `../run` (`/run`)
- `/var/spool/mail` is a symlink to `../mail` (`/var/mail`)
- `/usr` merge

- No `lib64` (Pure 64-bit system)

- Sticky bit is set on `/tmp` and `/var/tmp`
- No one is using `/run/tmp` (with `/tmp` being a symlink to it, even Debian says it is only useful for embedded systems)

```c
The programs mount and umount(8) traditionally maintained a list of currently mounted filesystems in the file /etc/mtab. The support for regular classic /etc/mtab is completely disabled at compile time by default, because on current Linux systems it is better to make /etc/mtab a symlink to /proc/mounts instead. The regular mtab file maintained in userspace cannot reliably work with namespaces, containers and other advanced Linux features. If the regular mtab support is enabled, then it’s possible to use the file as well as the symlink.
```

## Resources
- https://wiki.debian.org/ReleaseGoals/RunDirectory
- FHS 3.0
