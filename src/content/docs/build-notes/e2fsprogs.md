---
title: e2fsprogs
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- glaucus uses `chattr` and `lsattr` from `toybox`
- Depends on `texi2dvi`
- Remove static libraries manually
- `configure` creates a file outside of `DESTDIR` when `/etc/cron.d` does not exist, and to avoid this use `--without-crond-dir`
- Try `-j1` for both build and install
