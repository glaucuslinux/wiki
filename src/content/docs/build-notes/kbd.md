---
title: kbd
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Prepare
- Depends on `bison`; does not support `byacc`
- Depends on `flex`; does not support `reflex` (check derive patches)

## Configure
- `vlock` requires `pam` and disabling it removes `/usr/etc`
- `openvt` runs interactive shells on virtual terminals

## Other
- `bkeymaps` is the older `kbd`
- Remove `resizecons`?

## References
- https://kisslinux.org/wiki/console/bkeymaps
- https://kisslinux.org/wiki/pkg/bkeymaps
- https://codeberg.org/derivelinux/ports/src/branch/main/core/kbd
