---
title: hwdata
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Package
- `hwdata.pc` is installed under `/usr/share/pkgconfig` which is a symlink to `/usr/lib/pkgconfig`
- `make install` expects `/bin/install` to support `-T` which `toybox install` does not support?

## Other
- `hwids` is deprecated
- `pnp.ids` is now provided by default
- `sdio.ids` is no longer needed
