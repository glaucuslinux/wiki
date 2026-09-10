---
title: cairo
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Prepare
- `cairo` indirectly depends on `expat` because of `fontconfig`
- If `cairo` was built before `harfbuzz`, a rebuild of `cairo` is required after `harfbuzz` in order to build `pango` (LFS)
- Build `cairo` against `freetype-harfbuzz` and not `freetype` alone

## Configure
- Disable `dwrite` which stands for "Microsoft's DirectWrite"
- `xlib-xcb` is disabled by default
- `tee` is set to `auto` and not `enabled` in `meson.options` which is weird as the `NEWS` file mentions that it has been enabled by default as of `1.18.0` to build `firefox` (and `librewolf`?)

## Package
- glaucus removes `cairo-trace` and associated libraries under `/usr/lib/cairo`

## Check
- Test suite is broken on LFS
