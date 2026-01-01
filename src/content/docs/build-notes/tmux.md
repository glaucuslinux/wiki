---
title: tmux
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `tmux` does better multiplexing compared to `dtach`, `mtm` and built-in terminal multiplexers (e.g. `wezterm`)
- Void applies a `reallocarray.patch`
- `--enable-sixel` is needed to prevent crashes in sixel terminals
- Depends on `libevent` and `netbsd-curses`
- Check if `--enable-utempter` works with `utmps`
- Check `/usr/share/doc/tmux/examples/tmux.conf` and install `tmux.conf`
- Might backport some patches for `3.6a` to fix borders and colors (e.g. Gentoo)
- Should we explicitly pass `--disable-cgroups` as it requires `systemd`? Or will `configure` automatically detect that systemd is not supported?
