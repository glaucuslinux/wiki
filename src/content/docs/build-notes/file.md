---
title: file
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `--disable-static` is used by default
- Depends on the same version of itself (and on `libmagic`)
- No need to symlink against `libpthread` when building against `musl` libc
