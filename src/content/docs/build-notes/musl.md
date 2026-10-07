---
title: musl
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Prepare
- Depends on `mawk`
- Does not depend on `linux-headers`
- Removing `memcpy.s` and `memmove.s` forces `musl` to use the `C` implementations

## Configure
- `--syslibdir=/usr/lib` breaks the ABI, we set it regardless as `/lib/ld-musl-x86_64.so.1` still gets hardcoded in the binaries (check with `readelf -p .interp /bin/toybox`)
- The dynamic linker needs to reside at `../etc` relative to `syslibdir`
- `exec_prefix` is defined before `prefix` and should be explicitly specified after `make` for `musl-headers`

## Build
- Do not build with `lto`

## Package
- Install `musl-headers` after `linux-headers` to prevent collisions
- `install-tools` is for the wrapper `musl-gcc`
- The dynamic linker searches for shared libraries at run time under directories listed in `/etc/ld-musl-$ARCH.path` separated by colons or newlines

## Other
- `DT_RELR` support (`-z pack-relative-relocs`) has been upstreamed, and reduces size by 5 - 8%
- If `LANG` and `LC_*` are unset, `setlocale(LC_ALL, "")` defaults to `C.UTF-8` under `musl` unliked `glibc` which defaults to `C`
- If `MUSL_LOCPATH` is unset or `setuid`/`setgid` are set, locale files are not loaded and only the `C` locale is available
- `musl` defines `__STDC_ISO_10646__` as `201206L` since `1.1.15` in `stdc-predef.h` which `gcc` includes by default unlike `clang`
- `musl` does not provide `__gnuc_va_list`; use `__isoc_va_list` instead
- `musl` does not provide legacy `ucontext` functions like `getcontext`, `setcontext`, `makecontext` and `swapcontext` (no longer POSIX)
- `musl` does not provide `libiconv`, `libintl` and `libxcrypt` unlike `glibc`
- `musl` does not provide `nss` to avoid `dlopen`; use `/etc/hosts` and `/etc/resolv.conf` instead
- `musl` does not provide `strndupa`
- `musl` does not support `dns` for non-ascii domains (`idn`)
- `musl` does not support symbol versioning; use `--disable-symvers` for other packages
- `musl` lacks `cdefs.h`, `error.h`, `queue.h`, `stab.h` and `tree.h`; patch software to remove these headers
- `musl` provides empty `crti.o` and `crtn.o` for legacy `.init` and `.fini` support; use `.init_array` and `.fini_array` instead
- `musl` provides `ssp` via `__stack_chk_guard` and `__stack_chk_fail` and `libssp_nonshared.a` is only required on 32-bit or `powerpc`
- `musl` provides `timer_create()`
- `musl` queries nameservers in `/etc/resolv.conf` in parallel (unlike `glibc`) and accepts the first valid response and network load is mitigated by only supporting three nameservers `MAXNS 3`
  - caching nameserver on localhost (near-zero latency / smallest cache size / slowest for queries not from cache)
  - `isp` nameserver (low latency for cached results / moderate cache size / moderate performance for queries not from cache)
  - `8.8.8.8` (higher latency / caches the whole DNS tree)
- `musl` does not build with `gold` without `pie`; glaucus uses `lld` and `llvm binary utilities` instead
- `musl` parses POSIX timezone `TZ="NFT-1DST,M3.5.0,M10.5.0"`; however, `tzdata` is needed to parse geographical names `Asia/Damascus`
- `musl` relies on `compiler-rt` (or `libgcc`) only for the `__muldc3`, `__muldxc3`,`__mulsc3` and `__powidf2` symbols
- `musl`'s default allocator `mallocng` was inspired by `openbsd malloc` and `hardened_malloc` and is good enough
- `musl`'s dynamic linker ignores `LD_PRELOAD` and `LD_LIBRARY_PATH` when `setuid`/`setgid` are set
- `musl` silently discards log messages if `/dev/log` is absent
- `musl` treats all text as `utf8` and all non-ascii characters as first-class; no external locale files or conversion modules are needed
- No need to remove `intl.h`/`libintl.h` as `gettext-tiny` doesn't provide them and `libintl.a` when configured with `LIBINTL=NONE`
- Rich Felker advises against patching `configure` to support `--fast-math` as it breaks the ABI

## References
- https://blog.z3bra.org/2015/08/cross-compiling-with-pcc-and-musl.html
- https://brightrain.aerifal.cx/~niklata/PORTING
- https://codeberg.org/emmett1/crux-musl
- https://codeberg.org/hoatzinx/musl-clang
- https://crux.nu/Wiki/MuslOverlay
- https://git.2f30.org/fortify-headers/
- https://github.com/AppImage/type2-runtime/issues/116
- https://github.com/bell-sw/alpaquita-aports/blob/stream/core/musl-perf
- https://github.com/chimera-linux/cports/tree/master/main/musl
- https://github.com/cross-tools/musl-cross
- https://github.com/jopamo/musl-bsd
- https://github.com/Matrix3600/musl-cross
- https://github.com/orgs/chimera-linux/discussions/2480
- https://github.com/richfelker/musl-cross-make/blob/master/README.md
- https://github.com/richfelker/musl-cross-make/issues/101
- https://github.com/richfelker/musl-cross-make/issues/102
- https://gitlab.alpinelinux.org/alpine/tsc/-/issues/58
- https://git.musl-libc.org/cgit/musl/tree/INSTALL
- https://git.musl-libc.org/cgit/musl/tree/WHATSNEW
- https://gitweb.gentoo.org/proj/musl.git
- https://maskray.me/blog/2021-11-07-init-ctors-init-array
- https://molluscular.com/
- https://musl.libc.org/about.html
- https://musl.libc.org/manual.html
- https://musl.libc.org/releases.html
- https://openwall.com/lists/musl/
- https://rfc.archlinux.page/0023-pack-relative-relocs/
- https://wiki.debian.org/musl
- https://wiki.gentoo.org/wiki/Hardened/Toolchain
- https://wiki.gentoo.org/wiki/Musl
- https://wiki.gentoo.org/wiki/Musl_porting_notes
- https://wiki.gentoo.org/wiki/Musl_porting_notes/1.2.4
- https://wiki.gentoo.org/wiki/Project:Musl
- https://wiki.musl-libc.org/
- https://wiki.musl-libc.org/abi-cheat-sheet
- https://wiki.musl-libc.org/abi-manuals
- https://wiki.musl-libc.org/alternatives
- https://wiki.musl-libc.org/bugs-found-by-musl
- https://wiki.musl-libc.org/compatibility
- https://wiki.musl-libc.org/design-concepts
- https://wiki.musl-libc.org/environment-variables
- https://wiki.musl-libc.org/faq
- https://wiki.musl-libc.org/functional-differences-from-glibc
- https://wiki.musl-libc.org/future-ideas
- https://wiki.musl-libc.org/getting-started
- https://wiki.musl-libc.org/guidelines-for-distributions
- https://wiki.musl-libc.org/open-issues
- https://wiki.musl-libc.org/roadmap
- https://wiki.musl-libc.org/supported-platforms
- https://youtube.com/watch?v=NoU0y8et6Zc
