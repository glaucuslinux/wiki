---
title: muon
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Does it depend on `libedit` with `bestline`?
- Is `CFLAGS=-DBOOTSTRAP_NO_SAMU` valid?
- Set `default_library` to `shared` to prevent static libraries from being built (`wayland` and `libxkbcommon`)
- Depends on `meson` or itself to cross compile itself on a glibc host
- Does not support `cross-file`
- A circular dependency between muon and itself?
- muon replaces meson, but resulting binaries are not stripped?
