---
title: cairo
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Disable `dwrite` (Microsoft's DirectWrite)
- There is a circular dependency between cairo and harfbuzz to build pango (cairo -> harfbuzz -> cairo -> pango) (LFS)
- Does it require the `buildroot` patch?
- Does it require `expat` and `python`?
- Test suite is broken (according to LFS)
