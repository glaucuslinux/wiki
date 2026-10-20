---
title: u-config
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Build
- `pkg-config-linux-amd64` target is more optimized than the more portable `pkg-config` target or manually building `main_posix.c`
- Does not build with `lto` and upstream explicitly disables `lto` as it directly uses raw `linux` syscalls
- Override `LINUX_CFLAGS` and `LINUX_LIBS` instead of `OPT` as it allows us to dynamically link instead of the default static link

## Package
- `make install` target is `windows` only
- Provide `pkg.m4` from `pkgconf` as some packages require it (e.g. `eiwd`, `libarchive` and `make`)

## Other
- `u-config` is around 1.5x faster than `pkgconf` with a slightly smaller footprint
- `u-config` does not support `PKG_CONFIG_SYSROOT_DIR` but seems to set `pc_sysrootdir` to `/` in `src/u-config.c` by default
- `glaucus` still sets `PKG_CONFIG_SYSROOT_DIR` in `cross` as we can't guarantee what `pkg-config` implementation the host is using
