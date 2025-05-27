---
title: u-config
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Does not support `PKG_CONFIG_SYSROOT_DIR` but seems to set `pc_sysrootdir` to `/` in `src/u-config.c` by default
- `rad` still needs to set `PKG_CONFIG_SYSROOT_DIR` in `cross` as we can't guarantee what `pkg-config` implementation the host is using
- According to "personal" "micro"benchmarks, `u-config` is around 1.5x faster than `pkgconf` with a slightly smaller footprint
