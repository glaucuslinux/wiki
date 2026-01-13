---
title: pango
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Depends on `harfbuzz`, and `freetype` with `harfbuzz`
- Depends on `fribidi`; kiss patches `pango` to remove this dependency
- `wrap_mode`: `nofallback` vs `nodownload`
- Do we need `sysprof`?
- Version `1.90` is now known as `pango2` which is experimental
- When will the switch to `pango2` happen?

## References
- https://blogs.gnome.org/mclasen/2022/06/22/pango-1-90/
- https://download.gnome.org/sources/pango/1.90/pango-1.90.0.news
- https://gitlab.gnome.org/GNOME/pango/-/blob/pango2/docs/migrating.md
- https://gitlab.gnome.org/GNOME/pango/-/tree/pango2
