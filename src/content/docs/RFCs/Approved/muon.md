---
title: muon
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Notes
- muon does not support remote build
- does muon actually depend on libedit with bestline or not?
- glaucus needs meson to bootstrap muon on hosts that use glibc because muon does not support cross-compilation or the usage of "cross-file"
- cyclic dependency between muon and itself
- muon replaces meson, but resulting binaries are not stripped?
