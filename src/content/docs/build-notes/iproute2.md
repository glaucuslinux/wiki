---
title: iproute2
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- glaucus removes `ARPD` and `BDB`
- Check `NETNS_RUN_DIR=/run/netns`
- `basename` patch should be upstreamed?
- There is no test suite
- `ip` replaces other programs like `ifconfig` and `route`
- `bridge` provides a superset of the functionality implemented by the `brctl` program from `bridge-utils`
- `ss` aka "Socket Statistics" can replace `netstat` from `net-tools` as it provides more TCP and state information
