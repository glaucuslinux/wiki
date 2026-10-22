---
title: netbsd-curses
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Build
- `netbsd-curses` attempts to run `nbperf` and `tic` on the build system even when "cross-compiled"
- If `CC` equals `HOSTCC` then `netbsd-curses` assumes we are not cross-compiling and sets `CROSSCOMPILING=0`
- While this is correct for `gcc`, this is wrong for `clang` as it is a cross-compiler by default given the right set of `CFLAGS`
- `CROSSCOMPILING=1` prevents `CFLAGS` from leaking into `CFLAGS_HOST` causing `nbperf` and `tic` to be natively built with `HOSTCC`

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
