---
title: libxml2
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `--with-history` depends on `libedit` and `netbsd-curses`
- Do not depend on `icu`; disabled by default
- Multithreading support is on by default `--with-threads`
- Some distributions enable `legacy` for ABI compatibility
- In `legacy` mode support for `http`, `lzma` and `zlib` is enabled by default
- The `legacy` configuration option won’t enable support for HTTP and
LZMA anymore as these features were removed as of `2.15.0`
- SAX1 is deprecated
- Test suite is optional and requires additional download `xmlts` on LFS?
- Support for FTP and xpointer() XPath extensions has been deprecated
- Should we leave `xinclude` enabled? or is it deprecated as well?
- Check OpenBSD for `bsdtar` patches to `xstc`
- Explicitly specifying `--with-legacy` or removing `without-sax1` prevents `libxkbcommon` from breaking as of `1.8.0` as `test/registry.c` fails with `xmlParseMemory` errors when xkbregistry is enabled; `libxkbcommon` builds fine if xkbregistry is disabled
- Do we need `python` support; python bindings will be removed as of `2.16.0`

## References
- https://github.com/wismill/libxkbcommon/commit/564308d231cd297a67ff65ee55db3633d3351050
- https://github.com/xkbcommon/libxkbcommon/pull/530
- https://github.com/xkbcommon/libxkbcommon/pull/675
- https://gitlab.gnome.org/GNOME/libxml2/-/releases
