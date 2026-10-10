---
title: tmux
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Prepare
- Depends on `libevent` and `netbsd-curses`; `libev` and `libuev` are not supported

## Configure
- `cgroups`, `sixel`, `systemd`, `utempter` and `utf8proc` support is disabled by default
- Not passing `--with-TERM` lets `tmux` default to `screen` which we don't want as `tmux-256color` is better

## Package
- Check `/usr/share/doc/tmux/examples/tmux.conf` and install `tmux.conf`

## `tmux.conf`
- `set -as terminal-features ",*:RGB"` fixes broken colors

## Other
- `tmux` originated from `openbsd`
- `tmux` does better multiplexing compared to `dtach`, `mtm` and built-in terminal multiplexers (e.g. `wezterm`)
- `tmux -u` enables `utf8` support and without it unicode glyphs will appear as underscores if the environment does not support `utf8`
- `tmux` server causes issues with locales and missing XDG variables (e.g. `XDG_RUNTIME_DIR`)
- Remember to set `$TERM` in `chroot` if `tmux` is being used

## References
- https://github.com/tmux/tmux/issues/253
- https://github.com/tmux/tmux/wiki/FAQ#how-do-i-use-rgb-colour
