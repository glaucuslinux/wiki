---
title: gcc
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Bootstrapping does not work in toolchain and in cross (only in native where it makes sense according to docs) (should be enabled by default in native, if not then explicitly pass `--enable-bootstrap`)
- `bootstrap-lto-lean` has to be used with `make profiledbootstrap`?
- `bootstrap-debug-lean` is slower and bigger compared to `bootstrap-debug`
- `gcc` `bootstrap-lto` build configuration adjusts `CFLAGS` and `LDFLAGS`
- `--enable-link-mutex` is deprecated, use `--enable-link-serialization=1` instead: https://gcc.gnu.org/bugzilla/show_bug.cgi?id=109310 (`=1` is sane, any higher value might thrash the system)
- `cc1` depends on `mpc` at runtime
- Requires tar for the make target `install-headers-tar`
