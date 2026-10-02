---
title: libevdev
description: An opinionated Linux® distribution based on musl libc and toybox
---

- The `.bz2` tarball is smaller without `autotools` being `autoreconf`ed

## Prepare
- Avoid `./autogen.sh` as it runs `git config ...`

## Configure
- Configure and build with `muon` and not `autotools` as we can disable `tools`
- `gcov` and `coverity` support are disabled by default
