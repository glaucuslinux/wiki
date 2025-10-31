---
title: e2fsprogs
description: An opinionated Linux® distribution based on musl libc and toybox
---

- glaucus uses `chattr` and `lsattr` from `toybox`
- Depends on `texi2dvi`
- `e2initrd_helper` is enabled by default
- Patch and configure could be failing due to `../`?
- Remove static libraries manually
- `configure` creates a file outside of `DESTDIR` when `/etc/cron.d` does not exist, and to avoid this use `--without-crond-dir`?
- Replace `awk` for `bin/compile_et` and `bin/mk_cmds`?
- Consider adding `e2fsprogs_cv_struct_st_flags=no` to configure?
- Compare test results with Alpine's
- To get rid of current warnings:
  - Try `-j1` for both build and install
  - Try `MKDIR_P=mkdir -p`, because `install-sh` is buggy and only creates one directory according to Chimera
- Explicitly disable udev rules `--with-udev-rules-dir=no`/`--without-udev-rules-dir`?
