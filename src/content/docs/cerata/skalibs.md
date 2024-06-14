---
title: skalibs
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Notes
- Do not use cross-compilation `sysdep` options in `build.native`, from INSTALL:
```
Note that you can provide manual sysdeps values at any time, for any existing sysdep, to bypass autodetection - and you can even do it when building natively. It's just not recommended (you should let skalibs autodetect everything it can), and and it's only mandatory for a small subset of sysdeps in the cross-compilation case.
```
- We don't need `--with-sysdep-grndinsecure=no` because musl defines `GRND_INSECURE`)
