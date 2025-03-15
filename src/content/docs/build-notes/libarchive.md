---
title: libarchive
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Depdends on `queue.h`
- `--without-xml2` disables `libxml2` (glaucus uses `expat` instead)
- `nettle` is disabled by default
- glaucus uses `cpio` from `toybox`
- Is `expat` a run time dependency?
- bsdcpio is much faster compared to regular cpio
- bsdcpio is as fast as rust 3cpio and toybox cpio
- `bsdtar -p` implies `--acl --xattrs`, it also only works in `x` mode
- Prefer `--no-same-owner`
- Avoid `--no-same-permissions`?
- Avoid `--numeric-owner`
- Prefer `bsdunzip` over unmaintained Info-ZIP `unzip`

## Resources
- https://www.youtube.com/watch?v=M8NVBa3ZsE4
