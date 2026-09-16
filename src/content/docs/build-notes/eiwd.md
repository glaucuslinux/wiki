---
title: eiwd
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Replaces `wpa_supplicant`
- Can be used standalone without requiring `connman` or `ifupdown-ng`
- Documentation requires `rst2man`
- `iwctl` requires `dbus` and `libedit`
- `resolvconf` requires an external dns resolver like `openresolv`

## Configure
- `--disable-dbus`, `--disable-dbus-policy` and `--disable-systemd-service` remov the need to pass `--without-dbus-*` and `--without-systemd-*`
- Do not use `--enable-external-ell` and favor the bundled version as it removes `dbus` support and provides an internal dhcp client that can be used when `EnableNetworkConfiguration=true`
- `wired`, `hwsim`, `tools` and `ofono` are disabled by default

## Package
- Leave the default installation paths and do not rename them to `eiwd`; no `/var/lib/eiwd` and `main.conf` should be under `/etc/iwd`
- Move `iwd` from `$libexecdir` to `/usr/bin`
- Provide an `iwd` service and have it enabled by default

## `/etc/iwd/main.conf`
- `DisablePeriodicScan=true` stops `iwd` from scanning while disconnected preventing auto reconnects when router loses power
- `DisableRoamingScan=true` stops `iwd` from scanning while connected preventing connecting to when router loses power
- `EnableIPv6` is set to `true` by default since version `2.0`
- `PowerSaveDisable=*` disables power save for all drivers
- `UseDefaultInterface=true` has been deprecated, use `DefaultInterface=*` instead

## References
- https://codeberg.org/kiss-community/repo/src/branch/master/extra/eiwd
- https://kisscommunity.bvnf.space/software/eiwd/
- https://man.archlinux.org/man/iwd.config.5.en
- https://wiki.archlinux.org/title/Iwd
- https://wiki.gentoo.org/wiki/Iwd
