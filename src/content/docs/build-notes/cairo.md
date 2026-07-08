---
title: cairo
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Build against `freetype-harfbuzz` and not `freetype` alone
- Does it depend on `expat` and `python`?
- Disable `dwrite` (Microsoft's DirectWrite)
- `xlib-xcb` is disabled by default
- A circular dependency between `cairo` and `harfbuzz` on LFS (`cairo` -> `harfbuzz` -> `cairo` -> `pango`)
- `buildroot` uses a patch
- Does `/usr/bin/cairo-trace` have `755` permissions?
- Test suite is broken on LFS
