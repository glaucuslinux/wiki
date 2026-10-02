---
title: libpciaccess
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Does not depend on `util-macros` from xorg
- `meson` is the default build system

## Configure
- Disable `zlib` support as `hwdata` provides uncompressed `.ids`
- DO NOT fall back to `/dev/mem`
