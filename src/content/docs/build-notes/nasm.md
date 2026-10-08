---
title: nasm
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Configure
- Do not use `--disable-gc` as it disables `--gc-sections` which prevents the linker from stripping dead code
- `--without-zlib` does not disable `zlib` and instead switches to the bundled version

## Package
- The `strip` target needs to be called separately before `install` to avoid race conditions with multiple `make` jobs
- `--enable-lto` appends `-flto` to *FLAGS
