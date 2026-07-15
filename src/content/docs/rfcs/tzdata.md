---
title: `tzdata`
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Not POSIX compliant
- `tzdata` has long removed `systemv` as obsolete
- `tzdb` contains both `tzcode` and `tzdata`; do we need `zic`, `zdump` and `tzselect`?
- `posixtz` is no longer included with `tzdata`/`tzcode`
- to prevent bugs with musl and other stuff, use `fat` instead of `slim` (`slim` is the default)

## References
- https://bugs.gentoo.org/623962
- https://gitlab.alpinelinux.org/alpine/aports/-/issues/12057
- https://mm.icann.org/pipermail/tz/2016-August/024010.html
