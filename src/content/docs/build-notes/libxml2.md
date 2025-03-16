---
title: libxml2
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `--with-history` depends on `libedit` and `netbsd-curses`
- Do not depend on `icu`
- Some distributions enable `legacy` for ABI compatibility
- In `legacy` mode support for `http`, `lzma` and `zlib` is enabled by default
- SAX1 is deprecated
- Test suite is optional and requires additional download `xmlts`
- Support for FTP and xpointer() XPath extensions has been deprecated
- Should we leave `xinclude` enabled? or is it deprecated as well?
- Check OpenBSD for `bsdtar` patches to `xstc`

## Resources
- https://gitlab.gnome.org/GNOME/libxml2/-/releases
