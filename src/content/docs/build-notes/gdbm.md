---
title: gdbm
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Configure
- `--without-readline` prevents `bin/gdbmtool` from linking against system `libreadline` and `libncursesw`
- Alpine disables large-file support to make the db file compatible with older versions
- `--enable-crash-tolerance` is auto detected and might not work on `ext4`; we may end up explicitly passing `--disable-crash-tolerance`

## Package
- No need to create compatibility symlinks to `/usr/include/gdbm`
- We might not need the provided binaries
