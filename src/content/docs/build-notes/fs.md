---
title: fs
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Do not quote `PRETTY_NAME` in `lsb-release` and `os-release` otherwise `\S` in `/etc/issue` will show them with `agetty`
- Prefer `/usr/bin/nologin` to `/usr/bin/false` for `nologin` users shell
- Prefer `/nonexistent` to `/var/empty` and `/dev/null` for `nologin` users home location, as the latter is not a directory and shouldn't be used as one
- What should the version of `LSB_VERSION` be? `1.4`? `2.0`? `5.0`? (What even is the latest version? isn't it obsolete?)
- `/etc/os-release` takes precedence over `/usr/lib/os-release`
- `/etc/os-release` should be a relative symlink to `/usr/lib/os-release` (not an absolute symlink to avoid breaking chroot or initramfs)
- Check `DISTRIB_ID=glaucus` for os-release?

## References
- https://github.com/LinuxStandardBase/lsb-samples
- https://refspecs.linuxfoundation.org/LSB_5.0.0/LSB-Core-generic/LSB-Core-generic/lsbrelease.html
- https://0pointer.de/blog/projects/os-release.html
- https://www.2uo.de/myths-about-urandom/
