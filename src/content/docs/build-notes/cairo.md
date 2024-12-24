---
title: cairo
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Does it depend on `expat` and `python`?
- Disable `dwrite` (Microsoft's DirectWrite)
- A circular dependency between `cairo` and `harfbuzz` on LFS (`cairo` -> `harfbuzz` -> `cairo` -> `pango`)
- `buildroot` uses a patch
- Test suite is broken on LFS
