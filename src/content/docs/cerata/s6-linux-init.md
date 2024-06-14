---
title: s6-linux-init
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Notes
`sudo s6-linux-init-maker -c /etc/s6/current -L -f /etc/s6/skel someRandomDir`

- Do not use `-G "agetty -8 -a root -L tty1 115200"` for early Getty because we want `tty1` to depend on `hostname` (to be able to use it with different kernels that might hardcode `hostname`)
- Do not use `-n` and `-N` with `s6-linux-init-maker` as we have a clean initramfs
- (The higher the baudrate the faster data are sent and received (so use 115200 instead of 38400 when possible)
- `s6-linux-init-maker` does not create early utmpd scripts anymore. Users are expected to handle utmpd at the same time as wtmpd, i.e. first thing in stage 2.
- We have a new `-V boot_verbosity`  for `s6-linux-init-maker` which adds `-v boot_verbosity` to `s6-linux-init` (Default is **1**, which means that only important warnings will be printed. Increasing this value may yield more, but usually harmless, warning messages.)

Removed:
- `-1`: because it is causing unclean output to /dev/console polluting it
- `-f`: no need to use `-f /etc/s6/skel` if s6-linux-init was already configured with that, which is the case on glaucus itself
