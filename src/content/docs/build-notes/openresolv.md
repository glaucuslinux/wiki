---
title: openresolv
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Configure
- `--bindir` is a synonym to `--sbindir`
- `--statedir` is a synonym to `--localstatedir`
- `--libexecdir=/usr/bin` installs subscribers like `dnsmasq` or `unbound` to `/usr/bin` which collides with the original binaries

## Package
- Moving `resolv.conf` to `/run` does not improve lookup performance

## Other
- `/etc/resolvconf.conf` is the configuration file for `openresolv`
- `/etc/resolv.conf` is the `dns` resolver file for `musl`
