---
title: procps-ng
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Notes
- systemd support is disabled by default
- ncurses support is disabled by default
- `--with-elogind` is for systems without systemd
- disable `kill` from `procps-ng` because we are using the one from `util-linux` 
