---
title: netbsd-curses
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Package
- Check if `util-linux` links against `libtinfo.so` and if passing `-lterminfo` resolves it
- Check if `libedit`, `pcre2` and `util-linux` explicitly require passing `-lterminfo` to `LIBS` and `LDFLAGS`

## Build
- `netbsd-curses` attempts to run `nbperf` and `tic` on the build system even when "cross-compiled"
- If `CC` equals `HOSTCC` then `netbsd-curses` assumes we are not cross-compiling and sets `CROSSCOMPILING=0`
- While this is correct for `gcc`, this is wrong for `clang` as it is a cross-compiler by default given the right set of `CFLAGS`
- `CROSSCOMPILING=1` prevents `CFLAGS` from leaking into `CFLAGS_HOST` causing `nbperf` and `tic` to be natively built with `HOSTCC`
- `CC="clang $CFLAGS"` and `HOSTCC=clang` also fixes this but is suboptimal

## Package
- Do not provide `captoinfo` or `infotocap` as symlinks to `tic` as `netbsd-curses`'s `tic` does not support `-I` or `-C`

## Other
- `--as-needed` ensures that only what is needed is being used from `libcurses.so` and `libterminfo.so`
- Pass `-lcurses -lterminfo` in this order

## References
- https://github.com/oasislinux/netbsd-curses
- https://github.com/sabotage-linux/netbsd-curses/commit/5874f9b1ced9c29d7d590d95e254b252f657a160.patch
- https://github.com/sabotage-linux/netbsd-curses/issues/39
- https://github.com/sabotage-linux/netbsd-curses/wiki/List-of-ncurses-users-in-debian
- https://implementality.blogspot.com/2020/04/thomas-e-dickey-on-netbsd-curses.html
- https://invisible-island.net/ncurses/ncurses-netbsd.html
- https://lists.alpinelinux.org/~alpine/devel/%3Ce12847f2-4cea-c3e8-84c3-e98b92553f8e%40dereferenced.org%3E
- https://lists.sr.ht/~carbslinux/carbslinux-devel/%3CGVXP194MB17585EDB2DCA129AC12A51F7977E9%40GVXP194MB1758.EURP194.PROD.OUTLOOK.COM%3E
