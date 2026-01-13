---
title: utmps
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `--enable-utmp` requires `--enable-libc-includes`
- We might need a `--with-include=/usr/include/utmps` in case of missing includes
- `-lutmps` automatically passes `-lskarnet` (in utmps.pc)
- There is no test suite
