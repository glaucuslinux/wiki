---
title: gzip
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Does it depend on `bash` and `less` (for its scripts)?
- Does it depend on `diffutils`, `grep` and `util-linux` (for its scripts)?
- Does its test suite depend on `perl`?
- Explicitly specify `ac_cv_prog_LESS=less` to configure?
- Alpine and Void pass `DEFS=NO_ASM gl_cv_func_fflush_stdin=yes` for `musl`to avoid text relocation

## Resources
- https://lists.alpinelinux.org/~alpine/aports/patches/2545
