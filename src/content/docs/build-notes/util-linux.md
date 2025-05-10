---
title: util-linux
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- Depends on `bison`; not `byacc`?
- Depends on `gettext`; not `gettext-tiny`?
- Does it depend on `python`?
- Depends on `libcap-ng` to build `setpriv`; glaucus already provides `s6-setuidgid`: https://forum.artixlinux.org/index.php/topic,3360.0.html
- Use `autoreconf -vfis` as `./autogen.sh` requires GNU `gettext`, `gtkdocize` and `bison`
- `tools/all_syscalls` hardcodes `gawk`
- Explicitly specify `--bindir`
- Use `kill` from `util-linux` instead of `procps-ng` (mainstream)
- `/etc/adjtime` should be `/var/lib/hwclock/adjtime` according to FHS (both Alpine and Arch are using an old directory version) https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch05s08.html#varlibhwclockStateDirectoryForHwclo
- If the `adjtime` file does not exist, the default is `utc`
- `musl` provides its own `sys/ttydefaults.h`, while Alpine provides a separate version
- Disable `raw` as it requires `raw.h` which is only available on `glibc`, also `linux/raw.h` has been removed since 5.14
- `col` requires `glibc` (disabled by default on `musl`)
- glaucus disables `more` and uses `less`
- `more` depends on `libmagic` from `file`
- Using `LIBS` instead of `LDFLAGS` does not ensure `nsss` and `utmps` are being linked
- Uses `ncursesw` over `ncurses` so do not pass `--with-curses`
- Provides `kill` but not `killall` which is provided by `toybox`
- Use `su` from `toybox` or `util-linux` as recommended by `shadow`
- `runuser` and `su` from `util-linux` both require `pam`
- Disable `pg` as it uses `vidputs()` which is not provided by `netbsd-curses`
- Alpine and Arch use `login` and `su` from `util-linux`
- `--enable-sulogin-emergency-mount`: check if it requires `pam` and if `shadow` provides it
- `--disable-year2038`: check if it requires `logind` and `pam`
- `--without-libmagic`: check if it requires `file`
- `--with-cryptsetup`: check if it requires `systemd`; only works with `systemd`

## References
- https://bugzilla.redhat.com/show_bug.cgi?id=1984771
- https://github.com/sabotage-linux/sabotage/commit/1f3b7032769f0ce27cde3ac7490d02f0393c9a5a
- https://gitlab.alpinelinux.org/alpine/aports/-/issues/11730
