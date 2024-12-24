---
title: dhcp
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `--enable-dhcpv4o6` aids in transition from DHCPv4 to DHCPv6 on Alpine: https://kb.isc.org/docs/aa-01359
- Previous patches used `ip` instead of `ifconfig` but upstream changed that
