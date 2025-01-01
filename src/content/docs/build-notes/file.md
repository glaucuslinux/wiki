---
title: file
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `--disable-static` is used by default
- Depends on the same version of itself (and on `libmagic`); `magic/Makefile.am` mentions that this is a bug that may eventually be fixed, by building both a native file and a cross file and compiling the magic database with the native one
- No need to symlink against `libpthread` when building against `musl` libc
