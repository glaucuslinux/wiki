---
title: rsync
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

# Notes
- https://github.com/WayneD/rsync/issues/29
- `--disable-roll-simd` should be used when not using `glibc`
* Some distros (e.g. Alpine) disable `openssl` support because `xxhash` checksums are much faster (same thing goes for the new flag `--with-openssl-conf=/path/name.cnf`)
- rrsync requires `python`
