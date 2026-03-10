---
title: iproute2
description: An opinionated Linux® distribution based on musl libc and toybox
---

- glaucus removes `ARPD` and `BDB`
- Set `make NETNS_RUN_DIR=/run/netns`; otherwise it defaults to `/var/run/netns`
- There is no test suite
- Do not install `libnetlink.a` or `libnetlink.h`; nothing depends on them
- `ip` replaces other programs like `ifconfig` and `route`
- `bridge` provides a superset of the functionality implemented by the `brctl` program from `bridge-utils`
- `ss` aka "Socket Statistics" can replace `netstat` from `net-tools` as it provides more TCP and state information
- upstream already applies ax25 as of 5.18.0
- `-D_GNU_SOURCE` is already in the flags
- Check `iproute2` docdir
- `iproute2` uses `$YACC`
- This `iproute2` issue is from upstream:
```
IPT  grep: grep: No such file or directory
grep: TC_CONFIG_XT: No such file or directory
```
- `include` should be `$PWD/include` according to iproute2 config file, and not `/usr/include`?
- `libbpf` is not needed

## References
- https://gitlab.archlinux.org/archlinux/packaging/packages/iproute2/-/issues/2
- https://gitweb.gentoo.org/repo/gentoo.git/tree/sys-apps/iproute2/files
- https://lwn.net/Articles/710533/
- https://phoronix.com/scan.php?page=news_item&px=GNU-inetutils-2.0
