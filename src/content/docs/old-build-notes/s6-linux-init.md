---
title: s6-linux-init
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Build
- Run `s6-linux-init-maker` in `build`:
```sh
sudo s6-linux-init-maker -c /etc/s6/current -L -f /etc/s6/skel someRandomDir
```

## `s6-linux-init-maker`
- Do not use `-G "agetty -8 -a root -L tty1 115200"` for early getty because we want `tty1` to depend on `hostname` in order to use it with different kernels that might hardcode `hostname`
- Do not use `-n` and `-N` with `s6-linux-init-maker` as we have a clean initramfs
- Do not use `-1` with `s6-linux-init-maker` because it pollutes `/dev/console`
- Do not use `-f /etc/s6/skel` with `s6-linux-init-maker` if `s6-linux-init` has already been configured
- `s6-linux-init-maker` no longer creates early utmpd scripts anymore and users are expected to handle utmpd with wtmpd
- We have a new `-V boot_verbosity`  for `s6-linux-init-maker` which adds `-v boot_verbosity` to `s6-linux-init` (defaults to `1` which means only important warnings will be printed and increasing this value may yield more, but usually harmless, warning messages
