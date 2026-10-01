---
title: libffi
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Prepare
- `autoreconf` breaks build

## Configure
- `--disable-builddir` prevents the build from running in a subdirectory
- Static exec trampolines are enabled by default since `3.4.2` and `--disable-exec-static-tramp` violates "Write XOR Execute (W^X)", though it might be needed for `ghc` and `gobject-introspection`
- `--disable-multi-os-directory` on glaucus because `multilib` is disabled, and `libffi` is not being cross-compiled (also used on Arch, Void and OpenWRT for optimization, while Alpine uses `--enable-portable-binary` for portability as it disables optimizations)
- `--enable-pax_emutramp` is experimental and it requires `pax` kernel
- `--enable-purify-safety` is for debugging with `purify`

## References
- https://github.com/libffi/libffi/pull/647
