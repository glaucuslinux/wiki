---
title: gcc
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Disable bootstrap; stage1 is good enough
- Use a different `libexecdir`
- `bootstrap-lto` build configuration adjusts `CFLAGS` and `LDFLAGS`
- `bootstrap-lto-lean` has to be used with `make profiledbootstrap`
- `bootstrap-debug-lean` is slower and bigger compared to `bootstrap-debug`
- `BOOT_CFLAGS`, `BOOT_LDFLAGS` and `--with-boot-ldflags` only make sense when bootstrapping gcc; applies to stages 2 and 3
- `LD_FOR_TARGET`, `STAGE1_CFLAGS` and `STAGE1_LDFLAGS` apply to stage 1
- `--enable-link-mutex` has been deprecated, use `--enable-link-serialization=1` instead: https://gcc.gnu.org/bugzilla/show_bug.cgi?id=109310 (`=1` is sane, any higher value might thrash the system)
- `cc1` depends on `mpc` at run time
- Depends on `tar` for the `make` target `install-headers-tar`
- As of 14.1, new configure options `--enable-host-pie`, to build the compiler executables as PIE; and `--enable-host-bind-now`, to link the compiler executables with `-Wl,-z,now` to enable additional hardening
- `--enable-host-shared` has a performance penalty on `gcc`
- Might need a lex/flex library `libfl.a`:
```c
checking for lex library... not found
configure: WARNING: required lex library not found; giving up on touch lex.yy.c
```
- `BOOT_CXXFLAGS` has been deprecated
- `CFLAGS`, `CXXFLAGS`, `CFLAGS_FOR_TARGET` and `CXXFLAGS_FOR_TARGET` are being picked up from the environment; the latter two are automatically assigned to the former two
- Check `clocale` to use for `libstdc++`; `generic` vs `--disable-clocale`?
- `libgcc_s.so.1` size dramatically reduced when using stage1 flags (from ~ 830k to ~ 170k)
- `otool` is for mach os, and is part of LLVM; the `otool` not found error is normal for `gcc`
- Move cpp from lib to bin?

## Resources
- https://gcc.gnu.org/install/build.html
- https://gcc.gnu.org/install/configure.html
- https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html
- https://gcc.gnu.org/onlinedocs/gcc/Option-Summary.html
- https://gcc.gnu.org/onlinedocs/gcc/x86-Options.html
- https://gcc.gnu.org/onlinedocs/libstdc++/manual/configure.html
- https://wiki.osdev.org/Building_GCC
