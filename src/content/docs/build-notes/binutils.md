---
title: binutils
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Does not allow `autoreconf` and does not have `runstatedir`
- Depends on `zstd`
- Do we need to depend on `jansson` with `--enable-jansson`, or is that for `gdb` only?
- Alpine reverts `25882` for ARM and PowerPC
- `--disable-separate-code` bloats every executable and shared library by at least 2 MB
- `--enable-64-bit-bfd` is needed to ensure 64-bit support even on hosts with narrower word sizes
- Is `libbfd` even needed `--disable-install-libbfd` (same thing for `libiberty`, `--disable-install-libiberty`)?
- `--enable-pgo-build=lto` requires `dejagnu` and the test suite?
- Do we need `make configure-host configure-target`?
- Should the target `bpf-unknown-none` be enabled?
- Does `--enable-default-compressed-debug-sections-algorithm=zstd` contradict with `--disable-compressed-debug-sections` and enables compressed debug sections, or does it only set the default algorithm if the user decides to use compressed debug sections?
- `--with-build-sysroot` is only relevant in `cross`
- Do not symlink `toolchain/usr/$TGT` to `gcc-ar`/`gcc-nm`/`gcc-ranlib` as it will loop infinitely and thrash your system
- `bfd` does not build with `yash`; only with `dash` and `bash`
- `gold` has been deprecated

## References
- https://sourceware.org/bugzilla/show_bug.cgi?id=25882
