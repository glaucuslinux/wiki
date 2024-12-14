---
title: muon
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Is `CFLAGS=-DBOOTSTRAP_NO_SAMU` valid?
- ensure `default_library` is set to shared to prevent any possible static library from being built (which is what `wayland` and `libxkbcommon` may do...)
- muon does not support cross compilation
- muon requires meson or muon to cross compile itself on a glibc host
