---
title: binutils
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Does not allow `autoreconf` and does not have `runstatedir`
- Depends on `zstd`
- Alpine reverts `25882` for ARM and PowerPC
- `--disable-separate-code` bloats every executable and shared library by at least 2 MB
- `--enable-64-bit-bfd` is turned on by default for `x86-64`?
- Should the target `bpf-unknown-none` be enabled?
- Does `--enable-default-compressed-debug-sections-algorithm=zstd` contradict with `--disable-compressed-debug-sections` and enables compressed debug sections, or does it only set the default algorithm if the user decides to use compressed debug sections?
- `--with-build-sysroot` is only relevant in `cross`
- Do not symlink `toolchain/usr/$TGT` to `gcc-ar`/`gcc-nm`/`gcc-ranlib` as it will loop infinitely and thrash your system
- `bfd` does not build with `yash`; only with `dash` and `bash`
- `gold` has been deprecated

## Resources
- https://sourceware.org/bugzilla/show_bug.cgi?id=25882
