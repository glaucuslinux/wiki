---
title: libdrm
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Prepare
- Depends on `libpciaccess` for `intel` support
- Depends on `libudev-zero` for `udev` support

## Configure
- `udev` support is set to `false` by default and this allows it to create device nodes which can race with `mdevd` so pass `-Dudev=true`
