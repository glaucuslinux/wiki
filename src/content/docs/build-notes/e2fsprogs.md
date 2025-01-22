---
title: e2fsprogs
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- glaucus uses `chattr` and `lsattr` from `toybox`
- Depends on `texi2dvi`
- Patch and configure could be failing due to `../`?
- Remove static libraries manually
- `configure` creates a file outside of `DESTDIR` when `/etc/cron.d` does not exist, and to avoid this use `--without-crond-dir`
- Replace `awk` for `bin/compile_et` and `bin/mk_cmds`?
- Compare test results with Alpine's
- Try `-j1` for both build and install
