---
title: libite
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Configure
- Compat symlink `/usr/include/lite -> libite` is enabled by default
- `--disable-doxygen-doc` sets `DX_FLAG_doc=0` which disables `dot`, `man`, `rtf`, `xml`, `chm`, `chi`, `html`, `ps` and `pdf`
- `--disable-doxygen-html` is redundant once `DX_FLAG_doc=0` is set (also redundant once `DX_FLAG_chm=0`) (see `config.log`)
- Do not use `--without-symlink` as `finit` still requires `/usr/include/lite -> libite` as it includes `lite/lite.h`

## Other
- glaucus provides `libite` to satisfy `finit` the only package that depends on it
