---
title: fakeroot
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `fakeroot` (the binary) in `package()` can preserve ownership and permissions in `$SACD`; it also ensures that the host won't be tainted (won't be run as `root`)

## References
- https://github.com/kisslinux/kiss/pull/46
- https://kisslinux.org/news/20190830a
- https://youtu.be/-CVuBLDpulo?t=841
