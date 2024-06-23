---
title: dbus
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Notes
- `developer` mode is disabled by default
- `asserts`, `verbose` and `embedded-tests` are disabled by default (since `developer` mode is disabled by default)
- `installed-tests` and `user-session` are disabled by default
- `libaudit` support requires `libaudit` and `libcap-ng` as build-time dependencies
- `kqueue` is disabled on Linux (BSD flag)
