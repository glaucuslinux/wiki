---
title: fping
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Configure
- `--enable-ipv4` and `--enable-ipv6` are on by default

## Package
- Requires `setcap cap_net_raw=+ep "$dir/usr/bin/fping"` to send raw icmp packets; do not use setuid `chmod 4755` or `chmod +s`

## References
- https://bitwizard.nl/mtr/
- https://github.com/alexgrin/mping
- https://github.com/josephcolton/tcpping
- https://github.com/oleg-derevenetz/bwping
- https://github.com/shackleb0lt/cerberus
- https://github.com/ThomasHabets/arping
- https://github.com/traviscross/mtr
- https://github.com/troglobit/mping
