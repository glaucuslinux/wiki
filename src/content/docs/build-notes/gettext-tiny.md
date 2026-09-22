---
title: gettext-tiny
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Configure
- `fPIC` gets overriden by `CFLAGS` under `config.mak`
- `LIBINTL=NONE` prevents the installation of the header `libintl.h` and library `libintl.a`
- `LIBINTL=NOOP` (or not passing anything) provides both the header and library
- `LIBINTL=MUSL` only provides the library as `musl` (and `musl-headers`) already provide `libintl.h`

## Build
- Breaks with `lto` (optimux)

## References
- https://github.com/sabotage-linux/gettext-tiny/issues/64
