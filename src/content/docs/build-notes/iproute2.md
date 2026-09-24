---
title: iproute2
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Configure
- `arpd` is not built if `bdb` is not detected
- Depends on `flex` (the 2017 release in particular); does not build with `reflex`
- `iproute2` uses `$YACC`
- Upstream already applies ax25 as of 5.18.0

## Build
- We might have to pass `make CC=clang (or "$CC") HOSTCC=clang (or "$CC")`
- Upstream issue (check if resolved):
```
IPT  grep: grep: No such file or directory
grep: TC_CONFIG_XT: No such file or directory
```

## Package
- By default `libnetlink.a` and `libnetlink.h` are not installed
- Set `make NETNS_RUN_DIR=/run/netns`; otherwise it defaults to `/var/run/netns`

## Other
- `ip` replaces `ifconfig` and `route`
- `bridge` replaces `brctl` from `bridge-utils`
- `ss` aka "socket statistics" replaces `netstat` from `net-tools`
- disable building modules that require iptables:
`sed -i 's/.m_ipt.o//' tc/Makefile`

## References
- https://gitlab.archlinux.org/archlinux/packaging/packages/iproute2/-/issues/2
- https://gitweb.gentoo.org/repo/gentoo.git/tree/sys-apps/iproute2/files
- https://lwn.net/Articles/710533/
- https://phoronix.com/scan.php?page=news_item&px=GNU-inetutils-2.0
