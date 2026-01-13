---
title: u-config
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `pkg-config-linux-amd64` is a more optimized target compared to the more portable `pkg-config` target or manually building `main_posix.c`
- According to "personal" "micro"benchmarks, `u-config` is around 1.5x faster than `pkgconf` with a slightly smaller footprint
- Does not build with LTO enabled as upstream explicitly disables LTO
- We can use `OPT="$CFLAGS"` instead of `LINUX_CFLAGS="$CFLAGS"` but then we'd lose access to PIE..
- Does not support `PKG_CONFIG_SYSROOT_DIR` but seems to set `pc_sysrootdir` to `/` in `src/u-config.c` by default
- `rad` still needs to set `PKG_CONFIG_SYSROOT_DIR` in `cross` as we can't guarantee what `pkg-config` implementation the host is using
- Requires `pkg.m4` from `pkgconf`; otherwise several packages (`eiwd`, `libarchive` and `make`) will not build
