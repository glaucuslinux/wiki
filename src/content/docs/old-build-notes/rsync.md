---
title: rsync
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Configure
- Check if we should disable `openssl` support because `xxhash` checksums are faster

## Prepare
- Depends on `python` for `rrsync`
- Depends on `yodl2man`

## Configure
- `--disable-roll-simd` should be used when not using `glibc`
- `--with-openssl-conf=/path/name.cnf`

## Other
- `openrsync` is an outdated fork of `rsync`

## References
- https://openrsync.org/
- https://github.com/WayneD/rsync/issues/29
