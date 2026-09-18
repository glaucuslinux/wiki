---
title: file
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Configure
- Do not "try to look inside compressed files"
- `--disable-static` is used by default
- `--disable-elf-core` breaks build
- Cross-compiling `file` depends on the same version of itself (and on `libmagic`); `magic/Makefile.am` mentions that this is a bug that may eventually be fixed, by building both a native file and a cross file and compiling the magic database with the native one
- No need to symlink against `libpthread` when building against `musl` libc
