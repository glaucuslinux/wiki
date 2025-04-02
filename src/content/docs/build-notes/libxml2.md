---
title: libxml2
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `--with-history` depends on `libedit` and `netbsd-curses`
- Do not depend on `icu`
- Some distributions enable `legacy` for ABI compatibility
- In `legacy` mode support for `http`, `lzma` and `zlib` is enabled by default
- The “legacy” configuration option won’t enable support for HTTP and
LZMA anymore. These features will be removed in the next release.
- SAX1 is deprecated
- Test suite is optional and requires additional download `xmlts` on LFS?
- Support for FTP and xpointer() XPath extensions has been deprecated
- Should we leave `xinclude` enabled? or is it deprecated as well?
- Check OpenBSD for `bsdtar` patches to `xstc`

## References
- https://gitlab.gnome.org/GNOME/libxml2/-/releases
