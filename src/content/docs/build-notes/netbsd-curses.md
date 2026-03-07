---
title: netbsd-curses
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Try to link against `terminfo` alone without `curses` if doable; oksh and bash, use only terminfo for what they need?
- Sabotage does not recommend adding a `libtinfo` symlink to either `libncurses` or `libterminfo` and suggests using `LDFLAGS="-lcurses -lterminfo" ./configure` instead; some packages link against `libtinfo` like `util-linux` and `yash`
- Attempts to run cross-compiled `tic` (and `nbperf`) on the build system:
  - unset `HOSTCC`; does not work if host `clang` is being used with `--target` and `--sysroot` to cross-compile the rest of `netbsd-curses`
  - or set `HOSTCC=gcc` if you are using `clang` and the host is using `gcc`; easiest as host `gcc` is not a cross-compiler by default
  - or remove `--target` and `--sysroot` from `CFLAGS` if using host `clang`

## References
- https://github.com/sabotage-linux/netbsd-curses/issues/39
- https://implementality.blogspot.com/2020/04/thomas-e-dickey-on-netbsd-curses.html
- https://invisible-island.net/ncurses/ncurses-netbsd.html
- https://lists.alpinelinux.org/~alpine/devel/%3Ce12847f2-4cea-c3e8-84c3-e98b92553f8e%40dereferenced.org%3E
- https://lists.sr.ht/~carbslinux/carbslinux-devel/%3CGVXP194MB17585EDB2DCA129AC12A51F7977E9%40GVXP194MB1758.EURP194.PROD.OUTLOOK.COM%3E
