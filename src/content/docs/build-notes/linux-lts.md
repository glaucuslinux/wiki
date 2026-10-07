---
title: linux-lts
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Replaces `linux`
- `depmod` is not needed if all `modules.*` files under `lib/modules/$ver/` are being provided
- `kernel-suffix` and `pkgbase` are packaging artifacts from `alpine` and `arch` respectively
