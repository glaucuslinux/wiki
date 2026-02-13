---
title: kbd
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Depends on `bison`; does not support `byacc`
- Depends on `flex`; does not support `reflex` (check derive patches)
- `/usr/etc` does not get created when `vlock` is disabled
- `openvt` runs interactive shells on virtual terminals
- `bkeymaps` is the older `kbd`

## References
- https://kisslinux.org/wiki/console/bkeymaps
- https://kisslinux.org/wiki/pkg/bkeymaps
- https://codeberg.org/derivelinux/ports/src/branch/main/core/kbd
