---
title: automake
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Prepare
- Requires `autoreconf` to build with latest `automake`
- `autoreconf` requires `gzip` (for `amhello`) and `makeinfo`
- Does not support cross-compilation (`amhello` error)

## Check
- Depends on `bash`
- Disabled on Alpine
- Internal delays exist in individual tests (LFS)
- Unreliable with many failing tests (e.g. `lex`)
