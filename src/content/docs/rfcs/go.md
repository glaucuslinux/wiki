---
title: go
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Replaces `nim`
- Relatively harder to bootstrap from source (see below to get to `1.24`):
```
- Build Go 1.4 from C (the last version with a C compiler)
- Use Go 1.4 to build Go 1.17 (the minimum required for Go 1.20)
- Use Go 1.17 to build Go 1.20 (the minimum required for Go 1.22)
- Use Go 1.20 to build Go 1.22 (the minimum required for Go 1.24)
- Use Go 1.22 to build Go 1.24
```
- Bootstrapping will only get longer for future releases (as newer releases will only support being built with the recent 2 older releases)

## References
- https://go.dev/doc/install/source
