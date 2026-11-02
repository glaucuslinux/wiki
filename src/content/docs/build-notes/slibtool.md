---
title: slibtool
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Configure
- Check if explicitly passing `--sysroot=$cross` is required when cross-compiling (see `configure`)
### Package
- Check if we can rely on less stuff from `gnu libtool`


## Configure
- `app` is an alias for `frontend` which is enabled by default
- `glaucus-configure` works as `--sysconfdir=/etc` is needed to override the `/usr/etc` default
- No need to pass `--arch` and `--cross-compile` as we already export `ARCH` and `CROSS_COMPILE` in the environment
- No need to set any custom environment variables like `COMPILER`,`PKGCONF` and `TOOLCHAIN` as the configure options are sufficient
- If `--cchost` and `--target` are not explicitly specified, then `slibtool` automatically sets them to `--host`'s value
- `--debug` is not enabled by default
- Do not set `--strict` as it adds `-Werror` to `CFLAGS` and `-Wl,--no-undefined` to `LDFLAGS`
- `--all-shared` alone builds `slibtool` against `libslibtool` which does not exist unless `--enable-shared` is passed
- `ALL_SHARED` and `ALL_STATIC` are set to `no` by default
- `DISABLE_SHARED` and `DISABLE_STATIC` are set to `yes` by default (passing `--disable-static` is redundant)
- We have no use for `libslibtool` both static and shared versions as nothing depends on it (and it is disabled by default)
- We have no use for `include/slibtool` which is disabled by default and gets installed when either `shared` or `static` are enabled
- No need to set any `NATIVE_*` variable
- `PE_SUBSYSTEM` and `PE_IMAGE_BASE` are windows specific variables
- Do not set `--with-preferred-host-*` as it only affects `slibtool`'s runtime tool choices for native builds and we already prefer the non-prefixed version of the tools (see `project/config/cfgdefs.sh`)

## Package
- `/usr/share/libtool` vs `/usr/share/libtoolize` paths
- `glibtoolize` is not a necessary symlink
- Duplicate the copied macros under a new directory `/usr/share/libtool/AC_CONFIG_MACRO_DIRS`?

## Other
- `LIBTOOL=slibtool` should be added to `MAKEFLAGS`
- Upstream migrated from `midipix.org` to `foss21.org`
- `slibtool` does not install `.la` files by default (can be reversed by using `clibtool`)
- `slibtoolize` will be provided in the future (either as a mode or a symlink)
- `ltdl` is no longer needed (it serves to provide a `dlopen()` functionality on systems which do not offer it, i.e. HP-UX and BeOS)
- libtoolize fails as a symlink to slibtool (several build tools complain e.g. gmp) (since slibtool does not treat libtoolize with the stoolie driver)
- `slibtool`'s `ltmain.sh` is broken
- `libarchive` does not build with `slibtoolize` or the `libtoolize` wrapper; only with gnu `libtoolize`
- `slibtool` additionally installs two symlinks:
  - `slibtool-static`: equivalent of `-disable-shared`
  - `slibtool-shared`: equivalent of `-disable-static`
  - these symlinks should be used when building packages that have the above switches hard-coded into the generated libtool script (e.g. `binutils` and `gdb` which have shared library builds disabled by default)
  - to determine whether this invocation form is appropriate with a specific package run `./libtool --features` from the build directory, then check if the output has either shared or static library builds disabled
- If `slibtool` is invoked as a basic tool (i.e. `slibtool`, `dlibtool`, etc.), then building both shared libraries and static archives is enabled by default
- Serpent's space macro patch breaks with `slibtool-shared-shared` not found

## References
- https://dev.midipix.org/cross/slibtool/issue/5
- https://dev.midipix.org/cross/slibtool/issue/50
- https://dev.midipix.org/cross/slibtool/issue/8
- https://flameeyes.blog/2010/10/05/libtool-archives-and-their-pointless-points/
- https://wiki.gentoo.org/wiki/Project:Quality_Assurance/Handling_Libtool_Archives
- https://wiki.gentoo.org/wiki/Slibtool
