---
title: slibtool
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Configure
- Check if explicitly passing `--sysroot=$cross` is required when cross-compiling (see `configure`)
- Check if we need to set `--toolchain=llvm` and `--with-preferred-host-*=llvm-*` as these options only affect `slibtool`'s runtime tool choices for native builds and we already prefer the non-prefixed version of the tools as we only provide `llvm binary utilities` as the default version for the tools `ar`, `as`, `nm` and `ranlib` (see `project/config/cfgdefs.sh`)
### Package
- Check if we can rely on less stuff from `gnu libtool`
- Check if it is better to symlink `/usr/bin/libtool -> rlibtool` globally as `/usr/bin/libtool -> /usr/share/slibtool/slibtool.sh` is not recommended globally and should only be reserved for some broken projects as `./libtool -> /usr/share/slibtool/slibtool.sh` and when it is used `LIBTOOL=rlibtool` and `SLIBTOOL=rlibtool` should be set
- Check if we need to set `LIBTOOL=rlibtool`, `SLIBTOOL=rlibtool` and `LIBTOOLIZE=slibtoolize` globally
- Check if we need the `/usr/share/aclocal/libtool.m4 -> ../slibtool/slibtool.m4` symlink in addition to `/usr/share/aclocal/slibtool.m4`
### Other
- Check if `libarchive` builds with `slibtoolize` now
- Check if we can use `slibtool`'s `ltmain.sh` now

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

## Package
- Do not create a `/usr/bin/glibtoolize` symlink
- Do not create a `/usr/bin/libtoolize -> slibtool` symlink since `slibtool` does not handle `libtoolize` with the `stoolie` driver (several packages complain) (use `LIBTOOLIZE=slibtoolize` or create a `/usr/bin/libtoolize -> slibtoolize` symlink instead)
- Do not create a `/usr/share/libtoolize` directory (use `/usr/share/libtool` instead)
- Do not duplicate macros under `/usr/share/libtool/AC_CONFIG_MACRO_DIRS` (`aclocal` only searches `/usr/share/aclocal`)

## Other
- `LIBTOOL=slibtool` should be added to `MAKEFLAGS`
- Upstream migrated from `midipix.org` to `foss21.org`
- `ltdl` is no longer needed (it serves to provide a `dlopen()` functionality on systems which do not offer it, i.e. HP-UX and BeOS)
- `slibtool` builds both shared and static without `.la` files or debug output
- `dlibtool` same as `slibtool` with debug output (`d` stands for `debug`)
- `clibtool` same as `slibtool` with `.la` files (`c` stands for `compatibility`)
- `rlibtool` automagically operate in the exact same mode (static, shared or both) as the generated libtool script (`r` probably stands for `heuristics`)
- `dclibtool`, `rclibtool`, `rdlibtool` and `rdclibtool` are combinations of the previous letters (`c` adds `.la` files and `d` adds debug output)
- `slibtool-static`: equivalent of `-disable-shared` (use `rlibtool` instead)
- `slibtool-shared`: equivalent of `-disable-static` (use `rlibtool` instead)
- `autoreconf` copies files from `autoconf` and `automake` packages after installation and not from `/usr/share/libtool/build-aux`

## References
- https://dev.midipix.org/cross/slibtool/issue/5
- https://dev.midipix.org/cross/slibtool/issue/50
- https://dev.midipix.org/cross/slibtool/issue/8
- https://flameeyes.blog/2010/10/05/libtool-archives-and-their-pointless-points/
- https://wiki.gentoo.org/wiki/Project:Quality_Assurance/Handling_Libtool_Archives
- https://wiki.gentoo.org/wiki/Slibtool
- https://wiki.gentoo.org/wiki/Talk:Slibtool
