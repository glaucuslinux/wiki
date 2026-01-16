---
title: gcc
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Disable bootstrap; stage1 is good enough
- Use a different `libexecdir`
- `bootstrap-lto` build configuration adjusts `CFLAGS` and `LDFLAGS`
- `--with-build-config=bootstrap-lto-lean` has to be used with `make profiledbootstrap`
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
- Alpine uses `gcc-go` to bootstrap go
- `-fstack-protector-strong` is the default; no need to lower `ssp-buffer-size` from the default `8` to `4`, but glaucus still does it
- Disable `libsanitizer` for `gcc` with musl (only ASan works), and prefer `clang` and `compiler-rt` for sanitizers
- Do we need to remove `usr/lib/gcc/x86_64-glaucus-linux-musl/$ver/install-tools/` (and `include-fixed/`)?
- Patching `gcc` to link `libatomic` to everything is not needed on `x86_64` (Alpine enables it for `riscv64`)
- If you are not building a C library in the same source tree as GCC, you should also provide the target libraries and headers before configuring GCC, specifying the directories with --with-sysroot or --with-headers and --with-libs. Many targets also require “start files” such as crt0.o and crtn.o which are linked into each executable. There may be several alternatives for crt0.o, for use with profiling or other compilation options. Check your target’s definition of STARTFILE_SPEC to find out what start files it uses.
- No need to perform this maneuver from LFS thanks to our toolchain design:
```
cat gcc/limitx.h gcc/glimits.h gcc/limity.h > \
  `dirname $($target-gcc -print-libgcc-file-name)`/include/limits.h
```
- `--enable-gnu-indirect-function` (ifunc) is only available for glibc and is enabled by default on glibc systems; it won't hurt to explicitly disable it on musl
- For bootstrap builds we hardcode `sysroot` because it is split from the `toolchain` and located in its own directory outside of the `toolchain` directory; this does not change with `build-sysroot` because `build-sysroot` controls where gcc finds its libaries, headers and stuff during its build, while `sysroot` controls where it finds them after the build when building stuff, in a sense this makes the toolchain not so relocatable (well it will still look under `sysroot` (which is `cross` in our condition) for stuff regardless of what the `toolchain` directory is named or located, meaning if we moved `glaucus/toolchain` over to `/tmp/someOtherDir` it will still look for stuff under `glaucus/cross` wherever that is, so that's a minor win), but it is not meant to be, this is because we want to keep `cross` (basically our `sysroot`) separate from the `toolchain` so we can populate it later on with stage 2 stuff and turn it into a bootable image; this is not `mussel` after all
- `--with-libstdcxx-lock-policy=atomic` uses less memory and is simpler than `mutex`
- `--enable-linker-build-id` is `off` by default
- Disable transactional memory (Intel TSX) `--disable-tm-clone-registry` as it is obsolete nowadays (see `-fgnu-tm`)
- `-Qn` is an old obsolete synonym for `-fno-ident`
- `-mmusl` is the default on `*-*-linux-*musl*` targets
- `-fomit-frame-pointer` is used by default with `-Os` (and `-O2`)
- From `ld` manual:
```
Note that the location of the compiler originated plugins is different from the place where the ar, nm and ranlib programs search for their plugins. In order for those commands to make use of a compiler based plugin it must first be copied into the ${libdir}/bfd-plugins directory. All gcc based linker plugins are backward compatible, so it is sufficient to just copy in the newest one.
```
- Graphite is no longer being developed/maintained as it used to be
- Baseline gcc optimizes performs better loop optimizations without graphite (isl) than with it
- Installing the linker plugin into $libdir/bfd-plugins has the same effect as usage of the command wrappers (gcc-ar, gcc-nm and gcc-ranlib)
- `--with-cross-host` is deprecated (according to a `FIXME` comment in `configure`)
- Configure `libstdc++-v3` with `--enable-libstdcxx-time` as `musl` has `clock_gettime`

## References
- https://dl.acm.org/doi/full/10.1145/3674735
- https://gcc.gnu.org/bugzilla/show_bug.cgi?id=106162
- https://gcc.gnu.org/install/build.html
- https://gcc.gnu.org/install/configure.html
- https://gcc.gnu.org/install/specific.html
- https://gcc.gnu.org/onlinedocs/gcc/Common-Function-Attributes.html
- https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html
- https://gcc.gnu.org/onlinedocs/gcc/Option-Summary.html
- https://gcc.gnu.org/onlinedocs/gcc/x86-Options.html
- https://gcc.gnu.org/onlinedocs/libstdc++/manual/configure.html
- https://github.com/dslm4515/Musl-LFS/issues/74
- https://wiki.osdev.org/Building_GCC
