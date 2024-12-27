---
title: gcc
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Disable bootstrap (stage1 is good enough)
- `bootstrap-lto` build configuration adjusts `CFLAGS` and `LDFLAGS`
- `bootstrap-lto-lean` has to be used with `make profiledbootstrap`
- `bootstrap-debug-lean` is slower and bigger compared to `bootstrap-debug`
- `--enable-link-mutex` has been deprecated, use `--enable-link-serialization=1` instead: https://gcc.gnu.org/bugzilla/show_bug.cgi?id=109310 (`=1` is sane, any higher value might thrash the system)
- `cc1` depends on `mpc` at run time
- Depends on `tar` for the `make` target `install-headers-tar`
- As of 14.1, new configure options `--enable-host-pie`, to build the compiler executables as PIE; and `--enable-host-bind-now`, to link the compiler executables with `-Wl,-z,now` to enable additional hardening
