---
title: expat
description: An opinionated Linux® distribution based on musl libc and toybox
---

- glaucus does not use `xmlwf`

## Configure
- Disable `arc4random` and `arc4random_buf` as glaucus does not provide `libbsd`
- `musl` provides `getentropy()` as a wrapper around `getrandom()` which is also a wrapper around the `SYS_getrandom` syscall
- `--with-sys-getrandom` and `--with-dev-urandom` are legacy options for systems that lack `getrandom()` or `getentropy()`

## References
- https://mail-index.netbsd.org/tech-userlevel/2020/05/02/msg012333.html
- https://openwall.com/lists/musl/2026/08/14/6
