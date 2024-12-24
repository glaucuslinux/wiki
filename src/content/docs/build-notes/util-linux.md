---
title: util-linux
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Does it depend on `python`?
- Depends on `libcap-ng` to build `setpriv`; glaucus already provides `s6-setuidgid`: https://forum.artixlinux.org/index.php/topic,3360.0.html
- Use `autoreconf -vfis` as `./autogen.sh` requires GNU `gettext`
- `tools/all_syscalls` hardcodes `gawk`
- Use `kill` from `util-linux` instead of `procps-ng` (mainstream)
- `/etc/adjtime` should be `/var/lib/hwclock/adjtime` according to FHS (both Alpine and Arch are using an old directory version) https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch05s08.html#varlibhwclockStateDirectoryForHwclo
- `musl` provides its own `sys/ttydefaults.h`, while Alpine provides a separate version
- Disable `raw` as it requires `raw.h` which is only available on `glibc`
- `col` requires `glibc` (disabled by default on `musl`)
- glaucus disables `more` and uses `less`
- `more` depends on `libmagic` from `file`
- Using `LIBS` instead of `LDFLAGS` does not ensure `nsss` and `utmps` are being linked
