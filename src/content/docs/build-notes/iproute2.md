---
title: iproute2
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Package
- Consider removing `$dir/usr/lib/tc`

## Prepare
- `arpd` is not built if `bdb` is not detected
- Depends on `flex` (the 2017 release in particular); does not build with `reflex`
- `iproute2` uses `$YACC`
- No need to patch for `musl`

## Build
- `make HAVE_MNL=n` stops `tipc`, `devlink`, `rdma`, `dcb`, `vdpa`, `netshaper` from being built

## Package
- By default `libnetlink.a` and `libnetlink.h` are not installed
- `make HAVE_MNL=n install` stops `tipc`, `devlink`, `rdma`, `dcb`, `vdpa`, `netshaper` from being installed

## Other
- `ip` replaces `ifconfig` and `route`
- `bridge` replaces `brctl` from `bridge-utils`
- `ss` aka "socket statistics" replaces `netstat` from `net-tools`
- Upstream applied `ax25` as of `5.18.0`
- Upstream removed `m_ipt.o` as of `6.9.0`

## References
- https://gitlab.archlinux.org/archlinux/packaging/packages/iproute2/-/issues/2
- https://lwn.net/Articles/710533/
- https://phoronix.com/scan.php?page=news_item&px=GNU-inetutils-2.0
