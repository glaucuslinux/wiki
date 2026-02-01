---
title: grub
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `autogen.sh` (and `autoreconf -vfis`) require `autoconf-archive`
- `grub.cfg` is now the default configuration file
- `grub-install` option `--no-floppy` has been deprecated (the code returns `0` for compatibility)
