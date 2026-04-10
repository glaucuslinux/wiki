---
title: slibtool
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `LIBTOOL=slibtool` should be added to `MAKEFLAGS`
- `/usr/share/libtool` vs `/usr/share/libtoolize` paths
- `glibtoolize` is not a necessary symlink
- Duplicate the copied macros under a new directory `/usr/share/libtool/AC_CONFIG_MACRO_DIRS`?
- Officially migrated from `midipix.org` to `foss21.org`
- slibtool does not install `.la` files by default (can be reversed by using clibtool)
- `slibtoolize` will be provided in the future (either as a mode or a symlink)
- `ltdl` is no longer needed (it serves to provide a `dlopen()` functionality on systems which do not offer it, i.e. HP-UX and BeOS)
- libtoolize fails as a symlink to slibtool (several build tools complain e.g. gmp) (since slibtool does not treat libtoolize with the stoolie driver)
- `slibtool`'s `ltmain.sh` is broken; provide alternative instead?
- `libarchive` does not build with `slibtoolize` or the `libtoolize` wrapper; only with gnu libtoolize
- Serpent's space macro patch breaks builds with `slibtool-shared-shared` not found
- `slibtool` additionally installs two symlinks:
  - `slibtool-static`: equivalent of `-disable-shared`
  - `slibtool-shared`: equivalent of `-disable-static`
  - these symlinks should be used when building packages that have the above switches hard-coded into the generated libtool script (e.g. `binutils` and `gdb` which have shared library builds disabled by default)
  - to determine whether this invocation form is appropriate with a specific package run `./libtool --features` from the build directory, then check if the output has either shared or static library builds disabled
- If `slibtool` is invoked as a basic tool (i.e. `slibtool`, `dlibtool`, etc.), then building both shared libraries and static archives is enabled by default

## References
- https://dev.midipix.org/cross/slibtool/issue/5
- https://dev.midipix.org/cross/slibtool/issue/50
- https://dev.midipix.org/cross/slibtool/issue/8
- https://flameeyes.blog/2010/10/05/libtool-archives-and-their-pointless-points/
- https://wiki.gentoo.org/wiki/Project:Quality_Assurance/Handling_Libtool_Archives
- https://wiki.gentoo.org/wiki/Slibtool
