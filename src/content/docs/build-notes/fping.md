---
title: fping
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `--enable-ipv4` and `--enable-ipv6` are on by default
- Might require `setcap cap_net_raw=+ep /usr/bin/fping` (or `cap_net_raw+eip`?)

## References
- https://github.com/josephcolton/tcpping
- https://github.com/shackleb0lt/cerberus
- https://github.com/ThomasHabets/arping
- https://github.com/traviscross/mtr
- https://www.bitwizard.nl/mtr/
