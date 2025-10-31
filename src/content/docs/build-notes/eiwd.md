---
title: eiwd
description: An opinionated Linux® distribution based on musl libc and toybox
---

- provide an `iwd` service and have it enabled by default
- `iwctl` requires `dbus`
- Do we need `--disable-tools`?
- Do not use `--enable-external-ell` as it is not stable yet
- We might need to add `UseDefaultInterface=true` to `main.conf` to prevent iwd from manipulating network interfaces names
- Can be used with `ifupdown-ng`: https://wiki.alpinelinux.org/wiki/Iwd#Use_iwd_with_ifupdown-ng
- `resolvconf` requires `openresolv` to be installed
- Do we need `ead`?
- Do we need `connman` to handle wired connections?
- `network` vs `netdev` vs `wheel` group in policy sections `iwd-dbus.conf`, `ead-dbus.conf` and `hwsim-dbus.conf`?
- `/var/lib/eiwd/` vs `/var/lib/iwd/`
- `main.conf` should be in `/etc/iwd` and not `/etc/eiwd`
- `iwctl` requires explicit enabling `--enable-client` and `dbus`..
- move iwd from `libexec/lib` to `/usr/bin`?
- Patch `src/wiphy.c` to provide basename on void
- `EnableIPv6` is set to `true` by default since version `2.0`
- state directories (prefer the lower modes):
```
/etc/iwd/     700/755 root root
/etc/ead/     750     root root ?
/var/lib/iwd/ 600/700 root root
/var/lib/ead/ 600/700 root root (could be a symlink to /etc/ead)
```

## References
- https://codeberg.org/kiss-community/repo/src/branch/master/extra/eiwd
- https://kisscommunity.bvnf.space/software/eiwd/
- https://wiki.archlinux.org/title/Iwd
- https://wiki.gentoo.org/wiki/Iwd
