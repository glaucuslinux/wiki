---
title: mtools
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Only provided to satisfy `limine`'s `uefi-cd` via `mcopy` and `mformat`

## Prepare
- `fix-uninitialized.patch` from `alpine` is not required as `Stream` is always assigned before being read in `init.c`

## Configure
- Explicitly `--disable-xdf` as `xdf` is enabled by default (`S["XDF_IO_OBJ"]="xdf_io.o"` and `S["XDF_IO_SRC"]="xdf_io.c"`)
- `--disable-floppyd` by itself does not fully disable `x` support (`checking for X... libraries , headers`)
- `--without-x` implicitly disables `floppyd` as `floppyd` depends on `x`, though having `--disable-floppyd` does not hurt

## Package
- No need to provide a `/etc/mtools.conf`
