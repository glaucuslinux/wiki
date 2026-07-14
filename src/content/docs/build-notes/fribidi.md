---
title: fribidi
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Prefer the release `.xz` tarball over the `.gz` one:
  - the latter has a broken `autotools` build system that depends on `c2man` even if `autoreconf` was called
  - might switch to `.gz` when `muon` is ready
- Arch fixes compilation with `gcc` 15 using:
```
echo "cc='gcc -fpermissive -std=gnu17'" > c2man/config.sh`
```
- `--disable-deprecated` removes deprecated code and changes this in `config.h`:
```
/* Don't build deprecated functionality */
#define FRIBIDI_NO_DEPRECATED 1
```
- static builds are already disabled by default (`--disable-deprecated`?)
