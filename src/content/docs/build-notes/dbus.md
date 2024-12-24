---
title: dbus
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `developer` mode (`asserts`, `verbose` and `embedded-tests`) is disabled by default
- `installed-tests` and `user-session` are disabled by default
- `libaudit` support depends on `libaudit` and `libcap-ng` at build-time
- `kqueue` is disabled on Linux (BSD flag)
- `dbus-broker` depends on `systemd` for its launcher:
  - https://wiki.gentoo.org/wiki/Hard_dependencies_on_systemd
  - https://github.com/bus1/dbus-broker/issues/340
