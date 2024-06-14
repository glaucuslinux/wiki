---
title: pango
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Notes
- basic configuration detects available stuff, we may want to enable the fontconfig and freetype stuff in the future
- also pango depends on glib
- `gobject-introspection` depends on `glib` and pango depends on it, so add glib either way
- is harfbuzz a dependecy?
