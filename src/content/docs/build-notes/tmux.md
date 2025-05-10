---
title: tmux
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- `tmux` does better multiplexing compared to `dtach`, `mtm` and built-in terminal multiplexers (e.g. `wezterm`)
- Void applies a `reallocarray.patch`
- `--enable-sixel` is needed to prevent crashes in sixel terminals
- Depends on `libevent` and `netbsd-curses`
- Check if `--enable-utempter` works with `utmps`
- Check `/usr/share/doc/tmux/examples/tmux.conf` and install `tmux.conf`
