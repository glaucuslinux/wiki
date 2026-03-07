---
title: libcap
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Depends on `linux-headers`
- `RAISE_SETFCAP` is set to `no` by default (`yes` is not recommended)
- `progs/mkcapshdoc.sh` depends on `bash`
- `INDENT` is set to empty if not found
- Does not support parallel build
