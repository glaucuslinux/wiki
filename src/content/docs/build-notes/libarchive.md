---
title: libarchive
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Depdends on `queue.h`
- `--without-xml2` disables `libxml2` (glaucus uses `expat` instead)
- nettle is disabled by default
- glaucus uses `cpio` from `toybox`
- Is `expat` a run time dependency?
