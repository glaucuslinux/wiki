---
title: iproute2
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- glaucus removes `ARPD` and `BDB`
- Check `make NETNS_RUN_DIR=/run/netns`
- There is no test suite
- Do not install `libnetlink.a` or `libnetlink.h`
- `ip` replaces other programs like `ifconfig` and `route`
- `bridge` provides a superset of the functionality implemented by the `brctl` program from `bridge-utils`
- `ss` aka "Socket Statistics" can replace `netstat` from `net-tools` as it provides more TCP and state information

## References
- https://gitlab.archlinux.org/archlinux/packaging/packages/iproute2/-/issues/2
