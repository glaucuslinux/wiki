---
title: util-linux
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Notes
- requires `libcap-ng` to build `setpriv`
- `gawk` is hardcoded in in `tools/all_syscalls`
- use `kill` from `util-linux` instead of the one from `procps-ng` because that is what most distributions are using
- check if `python` is a real dependency in native, and if so then what uses it
- `/etc/adjtime` should be `/var/lib/hwclock/adjtime` according to the latest FHS (meaning that both Arch and Alpine are using an old directory version) https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch05s08.html#varlibhwclockStateDirectoryForHwclo
- musl has its own `sys/ttydefaults.h` so don't provide one (like Alpine)
