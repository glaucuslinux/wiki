---
title: e2fsprogs
description: An opinionated Linux® distribution based on musl libc and toybox
---

- upstream recommends building in a separate directory
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
- Requires `uuid` and `blkid` from `util-linux`
- Explicitly disable `--without-udev-rules-dir`/`--without-systemd-unit-dir` to prevent the installation of `udev` and `systemd` directories
- `install-libs` is identical to `install-libs-recursive` and both install static libraries
- `install-strip-libs-recursive` also installs static libraries and headers
- `install-shlibs-libs-recursive` is identical to `install-shlibs-strip-libs-recursive` but the latter is stripped and smaller
- `install-progs-recursive` is identical to `install-strip-progs-recursive` but the latter is stripped and smaller
- `install-strip` strips binaries, shared libraries and does not install static libraries; so it is like `install-strip-progs-recursive` and `install-shlibs-strip-libs-recursive` combined
