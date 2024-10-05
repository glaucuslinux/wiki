---
title: util-linux
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `./autogen.sh` requires GNU `gettext`, so we run `autoreconf -vfis` instead
- requires `libcap-ng` to build `setpriv` (glaucus already provides `s6-setuidgid`) (https://forum.artixlinux.org/index.php/topic,3360.0.html)
- `gawk` is hardcoded in in `tools/all_syscalls`
- use `kill` from `util-linux` instead of the one from `procps-ng` because that is what most distributions are using
- check if `python` is a real dependency in native, and if so then what uses it
- `/etc/adjtime` should be `/var/lib/hwclock/adjtime` according to the latest FHS (meaning that both Arch and Alpine are using an old directory version) https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch05s08.html#varlibhwclockStateDirectoryForHwclo
- musl has its own `sys/ttydefaults.h` so don't provide one (like Alpine)
- Disable `raw` as it requires `raw.h` which is only available on `glibc`
- `col` requires `glibc` (build system disables it by default on `musl`)
- glaucus disables `more` and uses `less` by default
