---
title: fs
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Do not quote `PRETTY_NAME` in `lsb-release` and `os-release` otherwise `\S` in `/etc/issue` will show them with `agetty`
- Prefer `/usr/bin/nologin` to `/usr/bin/false` for shell of `nologin` users
- Prefer `/var/empty` to `/dev/null` for home location of `nologin` users, as the latter is not a directory and shouldn't be used as one
