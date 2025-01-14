---
title: automake
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Requires `autoreconf` to build with latest `automake`
- `autoreconf` depends on `gzip` (for `amhello`) and `makeinfo`
- Does not support cross-compilation (`amhello` error)
- Test suite requires `bash` and other dependencies
- Test suite is unreliable with a lot failing tests (e.g. `lex`)
