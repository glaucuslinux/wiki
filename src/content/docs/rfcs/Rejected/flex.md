---
title: flex
description: An opinionated Linux® distribution based on musl libc and toybox
---

- No release in over 8 years; stuck on version `2.6.4` and pulling the latest `git` breaks a LOT of things
- Depends on itself, `help2man` and `texi2dvi`
- Depends on `bison`; does not work with `byacc`
- Touch `doc/flex.1` to prevent `help2man` from breaking `make install-strip`
- glaucus does not use `libfl` (`gcc` will complain regardless if `libfl` exists or not)
- Explicitly specify `ac_cv_func_malloc_0_nonnull=yes ac_cv_func_realloc_0_nonnull=yes` otherwise it will be guessed as `no`

## References
- https://github.com/westes/flex/issues/337
- https://github.com/westes/flex/milestone/5
