---
title: slibtool
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Check if tools like `LIBTOOL=slibtool` should be added to `MAKEFLAGS` (check Gentoo wiki and slibtool's README?)
- `/usr/share/libtool` vs `/usr/share/libtoolize` paths
- `glibtoolize` is not a necessary symlink
- Duplicate the copied macros under a new directory `/usr/share/libtool/AC_CONFIG_MACRO_DIRS`?
- Officially migrated from `midipix.org` to `foss21.org`
- slibtool does not install `.la` files by default (can be reversed by using clibtool)
- `slibtoolize` will be provided in the future (either as a mode or a symlink)
- `ltdl` is no longer needed (it serves to provide a `dlopen()` functionality on systems which do not offer it, i.e. HP-UX and BeOS)
- libtoolize fails as a symlink to slibtool (several build tools complain e.g. gmp) (since slibtool does not treat libtoolize with the stoolie driver)

## Resources
- https://wiki.gentoo.org/wiki/Slibtool
- https://dev.midipix.org/cross/slibtool/issue/5
- https://dev.midipix.org/cross/slibtool/issue/8
- https://dev.midipix.org/cross/slibtool/issue/50
