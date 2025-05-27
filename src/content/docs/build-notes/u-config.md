---
title: u-config
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Does not support `PKG_CONFIG_SYSROOT_DIR` but seems to set `pc_sysrootdir` to `/` in `src/u-config.c` by default
