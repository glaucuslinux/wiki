---
title: cairo
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Prepare
- Check if the `musl-stacksize` patch is needed from `alpine`

## Prepare
- `cairo` indirectly depends on `expat` because of `fontconfig`
- If `cairo` was built before `harfbuzz`, a rebuild of `cairo` is required after `harfbuzz` in order to build `pango` (LFS)
- Build `cairo` against `freetype-harfbuzz` and not `freetype` alone

## Configure
- Disable `dwrite` which stands for "Microsoft's DirectWrite"
- `glib` support is not required for simple `wayland` compositors
- `tee` is set to `auto` and not `enabled` in `meson.options` which contradicts `NEWS` as of `1.18.0`
- `tee` surface is mostly for debugging but is still required to build `firefox` and `librewolf`
- `xlib-xcb` is disabled by default

## Package
- glaucus removes `cairo-trace` and associated debugging libraries under `/usr/lib/cairo`
