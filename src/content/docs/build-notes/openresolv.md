---
title: openresolv
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `--bindir` is a synonym to `--sbindir`
- `--statedir` is a synonym to `--localstatedir`
- `--libexecdir`: `/usr/bin` vs `/usr/lib/resolvconf`
- Do we need a resolver helper?
- Do we need to change the location of `resolv.conf` to `/run` like other resolvers (`dnsmasq`) for faster lookups on `tmpfs`?
- There is no test suite

## References
- https://github.com/chimera-linux/cports/commits/master/main/openresolv/patches/use-run-default.patch
