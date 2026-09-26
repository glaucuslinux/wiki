---
title: libdrm
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Prepare
- Depends on `libpciaccess` for `intel` support

## Configure
- `-Dudev=false` is set by default and it allows `libdrm` to create device nodes using `mknod` which may race with `mdevd` so pass `-Dudev=true` to disable the internal `mknod` (this does not link or depend on `libudev-zero`)
