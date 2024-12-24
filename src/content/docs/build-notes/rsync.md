---
title: rsync
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- https://github.com/WayneD/rsync/issues/29
- `--disable-roll-simd` should be used when not using `glibc`
- Disable `openssl` support because `xxhash` checksums are faster on Alpine
- `--with-openssl-conf=/path/name.cnf`
- Depends on `python` for `rrsync`
- Depends on `yodl2man`
