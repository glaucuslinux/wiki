---
title: libffi
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Notes
- Consider removing `--disable-exec-static-tramp` once once ghc and gobject-introspection work fine with it enabled: https://github.com/libffi/libffi/pull/647
- The static exec trampolines is enabled by default since libffi 3.4.2. However it doesn't work with gobject-introspection.
- Consider `--enable-pax_emutramp` (Alpine?) but beware because it is experimental!
- `--disable-multi-os-directory` is used because we don't support multilib, and because we are not cross-compiling libffi as it's only provided in native. This option is also used by Arch, Void and openwrt, while Alpine does not use it probably because they care about portability (which is also why they have the `--enable-portable-binary` flag which disables optimizations as well)
