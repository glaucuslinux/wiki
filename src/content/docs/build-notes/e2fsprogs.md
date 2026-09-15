---
title: e2fsprogs
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Prepare
- `autoreconf` breaks build
- Upstream recommends building in a separate directory
- Upstream recommends `uuid` and `blkid` from `util-linux`
- glaucus uses `chattr` and `lsattr` from `toybox`
- Depends on `texi2dvi`

## Configure
- `e2initrd_helper` and `fsck` are enabled by default
- Patch and configure could be failing due to `../`?
- To get rid of current warnings:
  - Try `-j1` for both build and install
  - Try `MKDIR_P=mkdir -p`, because `install-sh` is buggy and only creates one directory according to Chimera
- Prevent the installation of `udev`, `cron.d`, and `systemd` directories using `--without-udev-rules-dir`/`--without-crond-dir`/`--without-systemd-unit-dir`
- It is safe to pass `--disable-tls` as `tls` is only used in the bundled `libuuid` which we disable as we prefer `util-linux`'s version

## Package
- `install-libs` is identical to `install-libs-recursive` and both install static libraries
- `install-strip-libs-recursive` also installs static libraries and headers
- `install-shlibs-libs-recursive` is identical to `install-shlibs-strip-libs-recursive` but the latter is stripped and smaller
- `install-progs-recursive` is identical to `install-strip-progs-recursive` but the latter is stripped and smaller
- `install-strip` strips binaries, shared libraries and does not install static libraries; so it is like `install-strip-progs-recursive` and `install-shlibs-strip-libs-recursive` combined
- Configure `/etc/mke2fs.conf`

## References
- https://e2fsprogs.sourceforge.net/e2fsprogs-release.html#1.46.6
- https://forum.openwrt.org/t/unable-to-build-openwrt-image/133225/12
