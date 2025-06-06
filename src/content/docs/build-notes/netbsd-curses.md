---
title: netbsd-curses
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Try to link against `terminfo` alone without `curses` if doable; oksh and bash, use only terminfo for what they need?
- Sabotage does not recommend adding a `libtinfo` symlink to either `libncurses` or `libterminfo` and suggests using `LDFLAGS="-lcurses -lterminfo" ./configure` instead; some packages link against `libtinfo` like `util-linux` and `yash`

## References
- https://github.com/sabotage-linux/netbsd-curses/issues/39
- https://invisible-island.net/ncurses/ncurses-netbsd.html
- https://lists.alpinelinux.org/~alpine/devel/%3Ce12847f2-4cea-c3e8-84c3-e98b92553f8e%40dereferenced.org%3E
- https://lists.sr.ht/~carbslinux/carbslinux-devel/%3CGVXP194MB17585EDB2DCA129AC12A51F7977E9%40GVXP194MB1758.EURP194.PROD.OUTLOOK.COM%3E
