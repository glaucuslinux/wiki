---
title: fping
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `--enable-ipv4` and `--enable-ipv6` are on by default
- Might require `setcap cap_net_raw=+ep` (or `cap_net_raw+eip`?) (or `chmod 4755` or `chmod +s`) for `/usr/bin/fping`

## References
- https://bitwizard.nl/mtr/
- https://github.com/alexgrin/mping
- https://github.com/josephcolton/tcpping
- https://github.com/shackleb0lt/cerberus
- https://github.com/ThomasHabets/arping
- https://github.com/traviscross/mtr
- https://github.com/troglobit/mping
