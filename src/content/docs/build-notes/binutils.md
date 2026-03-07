---
title: binutils
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Does not allow `autoreconf` and does not have `runstatedir`
- Depends on `zstd`
- Do we need to depend on `jansson` with `--enable-jansson`, or is that for `gdb` only?
- Alpine reverts `25882` for ARM and PowerPC
- `--disable-separate-code` bloats every executable and shared library by at least 2 MB; `musl-cross-make` uses this for smaller binaries in some cases (while sacrificing a bit of security)
- `--enable-64-bit-bfd` is needed to ensure 64-bit support even on hosts with narrower word sizes
- Is `libbfd` even needed `--disable-install-libbfd` (same thing for `libiberty`, `--disable-install-libiberty`)?
- `--enable-pgo-build=lto` requires `dejagnu` and the test suite?
- No need to specify `make configure-host configure-target`:
  - `configure-host` is binutils specific, and it checks the build machine for needed tools
  - `configure-host` is needed for a static build of `binutils` as it forces all subdirectories to be configured immediately (without it a static build of `binutils` will fail `C compiler cannot create executables`)
- Should the target `bpf-unknown-none` be enabled?
- Does `--enable-default-compressed-debug-sections-algorithm=zstd` contradict with `--disable-compressed-debug-sections` and enables compressed debug sections, or does it only set the default algorithm if the user decides to use compressed debug sections?
- `--with-build-sysroot` is only relevant in `cross`
- Do not symlink `toolchain/usr/$TGT` to `gcc-ar`/`gcc-nm`/`gcc-ranlib` as it will loop infinitely and thrash your system
- `bfd` does not build with `yash`; only with `dash` and `bash`
- `--enable-new-dtags` allows the linker to use the "runpath" tag instead of the older rpath one
- `--without-msgpack`: `msgpack` is not needed on glaucus (gentoo also disables this)
- `--disable-default-stack` is an alias for `--enable-default-execstack=no`
- `--enable-shared` enables the shared libraries of `libbfd` and `libopcodes` and makes tools like `ar` and `as` depend on them

## gold
- `gold` has been deprecated
- `gold` does not search `/usr/local/lib`
- `gold` does not assume libs like `pthread` or `rt`; had to add them by hand
- Known breakages when linking `grub`
- Does not work with `musl` unless `PIE` is used; even then it bloats things up

## References
- https://bugs.archlinux.org/task/42540
- https://github.com/richfelker/musl-cross-make/commit/d969dea983a2cc54a1e0308a0cdeb6c3307e4bfa
- https://reviews.llvm.org/D64903
- https://sourceware.org/bugzilla/show_bug.cgi?id=25882
- https://github.com/commercialhaskell/stack/issues/2387
- https://www.openwall.com/lists/musl/2015/05/01/5
- https://sourceware.org/bugzilla/show_bug.cgi?id=32715
- https://youtube.com/watch?v=Dlw_ULTdEYs
