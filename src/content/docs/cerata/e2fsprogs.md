---
title: e2fsprogs
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Notes
- The LFS64 patch has been merged upstream (So remove the LFS64 patch from Alpine in the following update):
  - https://github.com/tytso/e2fsprogs/pull/144
  - https://github.com/tytso/e2fsprogs/pull/150
  - https://git.alpinelinux.org/aports/tree/main/e2fsprogs
- `--enable-e2initrd-helper` is on by default
- We have to manually remove the static libraries, as their shared counterparts already exist with `--enable-elf-shlibs`
