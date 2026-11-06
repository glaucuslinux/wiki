---
title: libuev
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Configure
- `examples` are disabled by default
- `--disable-doxygen-doc` sets `DX_FLAG_doc=0` which disables `dot`, `man`, `rtf`, `xml`, `chm`, `chi`, `html`, `ps` and `pdf`
- `--disable-doxygen-html` is redundant once `DX_FLAG_doc=0` is set (also redundant once `DX_FLAG_chm=0`)

## Other
- glaucus provides `libuev` to satisfy `finit` the only package that depends on it
