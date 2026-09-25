---
title: libarchive
description: An opinionated Linux® distribution based on musl libc and toybox
---

- glaucus uses `toybox cpio`
- `bsdcpio` is as fast as rust `3cpio` and toybox `cpio`
- `bsdcpio` is much faster compared to regular `cpio`
- `bsdtar -p` implies `--acl --xattrs`, it also only works in `x` mode

## Prepare
- Depdends on `queue.h`; provides its own `unzip/la_queue.h`

## Configure
- `cng` is windows only
- `lzo` is disabled by default
- `mbedtls` and `nettle` are disabled by default
- `xml2` and `expat` are for macos `xar`

## Other
- Avoid `--no-same-permissions`
- Avoid `--numeric-owner`
- Prefer `bsdunzip` over unmaintained Info-ZIP `unzip`
- Prefer `--no-same-owner`

## References
- https://youtube.com/watch?v=M8NVBa3ZsE4
