---
title: eiwd
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Do we need `--disable-tools`?
- Do not use `--enable-external-ell` as it is not stable yet
- We might need to add `UseDefaultInterface=true` to `main.conf` to prevent iwd from manipulating network interfaces names
- Can be used with `ifupdown-ng`: https://wiki.alpinelinux.org/wiki/Iwd#Use_iwd_with_ifupdown-ng
- `resolvconf` requires `openresolv` to be installed
- Do we need `ead`?
- Do we need `connman` to handle wired connections?
- Use `network` vs `netdev` group?
- `/var/lib/eiwd/` vs `/var/lib/iwd/`
- `iwctl` requires explicit enabling `--enable-client`
- move iwd from `libexec/lib` to `/usr/bin`?
