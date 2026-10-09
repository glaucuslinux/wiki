---
title: netbsd-curses
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Build
- `netbsd-curses` attempts to run cross-compiled `nbperf` and `tic` on the build system:
  - unset `HOSTCC`; does not work if host `clang` is being used with `--target` and `--sysroot` to cross-compile the rest of `netbsd-curses`
  - or set `HOSTCC=gcc` if you are using `clang` and the host is using `gcc`; easiest as host `gcc` is not a cross-compiler by default
  - or remove `--target` and `--sysroot` from `CFLAGS` if using host `clang`
- If `CC` does not equal `HOSTCC` then `netbsd-curses` assumes we are cross-compiling and sets `CROSSCOMPILING=1`
- `CROSSCOMPILING=1` does not allow `CFLAGS` to be in `CFLAGS_HOST` which are used for building `nbperf` and `tic` with `HOSTCC`

## Package
- Do not provide `captoinfo` or `infotocap` as symlinks to `tic` as `netbsd-curses`'s `tic` does not support `-I` or `-C`

## Other
- `--as-needed` ensures that only what is needed is being used from `libcurses.so` and `libterminfo.so`
- Pass `-lcurses -lterminfo` in this order
- `libedit`, `pcre2` and `util-linux` require explicitly passing `-lterminfo` to `LIBS` and `LDFLAGS`
- `util-linux` and `yash` link against `libtinfo.so`; check if passing `-lterminfo` removes this need?

## References
- https://github.com/oasislinux/netbsd-curses
- https://github.com/sabotage-linux/netbsd-curses/commit/5874f9b1ced9c29d7d590d95e254b252f657a160.patch
- https://github.com/sabotage-linux/netbsd-curses/issues/39
- https://github.com/sabotage-linux/netbsd-curses/wiki/List-of-ncurses-users-in-debian
- https://implementality.blogspot.com/2020/04/thomas-e-dickey-on-netbsd-curses.html
- https://invisible-island.net/ncurses/ncurses-netbsd.html
- https://lists.alpinelinux.org/~alpine/devel/%3Ce12847f2-4cea-c3e8-84c3-e98b92553f8e%40dereferenced.org%3E
- https://lists.sr.ht/~carbslinux/carbslinux-devel/%3CGVXP194MB17585EDB2DCA129AC12A51F7977E9%40GVXP194MB1758.EURP194.PROD.OUTLOOK.COM%3E
