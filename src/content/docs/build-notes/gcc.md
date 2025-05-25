---
title: gcc
description: An opinionated Linux® distribution based on musl libc and toybox
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
- The following (ignored) errors occur when building `libstdc++-v3` (in all stages):
```
libstdc++-v3.log:945:make[1]: [Makefile:1831: x86_64-glaucus-linux-musl/bits/largefile-config.h] Error 1 (ignored)
libstdc++-v3.log:946:make[1]: [Makefile:1832: x86_64-glaucus-linux-musl/bits/largefile-config.h] Error 1 (ignored)
```
According to `tmp/gcc/gcc-14.2.0/build/x86_64-glaucus-linux-musl/libstdc++-v3/include/Makefile`:
```make
...
# This header is not installed, it's only used to build libstdc++ itself.
${host_builddir}/largefile-config.h: ${CONFIG_HEADER} stamp-${host_alias}
	@rm -f $@.tmp
	@-grep 'define _DARWIN_USE_64_BIT_INODE' ${CONFIG_HEADER} >> $@.tmp
	@-grep 'define _FILE_OFFSET_BITS' ${CONFIG_HEADER} >> $@.tmp
	@-grep 'define _LARGE_FILES' ${CONFIG_HEADER} >> $@.tmp
	@mv $@.tmp $@
...
```
and indeed if we check `tmp/gcc/gcc-14.2.0/build/x86_64-glaucus-linux-musl/libstdc++-v3/include/x86_64-glaucus-linux-musl/bits/largefile-config.h`:
```c
# define _DARWIN_USE_64_BIT_INODE 1
```
which means that the first `@-grep` is working, while the latter two are not causing these two `Error 1 (ignored)` messages; and no this is not related to a race condition and it does not go away neither with `-j 1` nor with `--disable-largefile`
- No need to fix headers or includes on glaucus
- `libsupc++` is the ABI library and it is a subset of `libstdc++`
- Alpine sets `libat_cv_have_ifunc=no` before gcc configure; related to libatomic, and Alpaquita are providing ifunc and are not setting this variable

## References
- https://gcc.gnu.org/bugzilla/show_bug.cgi?id=106162
- https://gcc.gnu.org/install/build.html
- https://gcc.gnu.org/install/configure.html
- https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html
- https://gcc.gnu.org/onlinedocs/gcc/Option-Summary.html
- https://gcc.gnu.org/onlinedocs/gcc/x86-Options.html
- https://gcc.gnu.org/onlinedocs/libstdc++/manual/configure.html
- https://wiki.osdev.org/Building_GCC
