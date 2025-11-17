---
title: dbus
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `developer` mode (`asserts`, `verbose` and `embedded-tests`) is disabled by default
- `installed-tests` and `user-session` are disabled by default
- `libaudit` support depends on `libaudit` and `libcap-ng` at build-time
- `kqueue` is disabled on Linux (BSD flag)
- `dbus-broker` depends on `systemd` for its launcher:
  - https://wiki.gentoo.org/wiki/Hard_dependencies_on_systemd
  - https://github.com/bus1/dbus-broker/issues/340
- `--disable-asserts` and not `--disable-assertions` (old configure?)
- Separate `dbus` user
- Remove `"$SACD"/etc` and `"$SACD"/var` and `"$SACD"/usr/lib/systemd`

## References
- https://chimera-linux.org/docs/configuration/dbus
- https://github.com/bus1/dbus-broker/issues/340
- https://openwrt.org/docs/techref/ubus#what_s_the_difference_between_ubus_vs_dbus
- https://wiki.hyperbola.info/doku.php?id=en:philosophy:dbus_failure
- https://www.hyperbola.info/news/end-of-d-bus-support/
- https://www.hyperbola.info/todo/dbus-mitigation/
