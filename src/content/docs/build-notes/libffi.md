---
title: libffi
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- `autoreconf` breaks build
- Static exec trampolines are enabled by default since `3.4.2`
- Remove `--disable-exec-static-tramp` once `ghc` and `gobject-introspection` support it: https://github.com/libffi/libffi/pull/647
- `--enable-pax_emutramp` on Alpine (experimental)
- `--disable-multi-os-directory` on glaucus because `multilib` is disabled, and `libffi` is not being cross-compiled (also used on Arch, Void and OpenWRT for optimization, while Alpine uses `--enable-portable-binary` instead for portability)
