---
title: pixman
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- `stacksize` patch for use with `musl` to prevent segfaults with `librsvg`: `LDFLAGS="-Wl,-z,stack-size=2097152"`
- https://git.adelielinux.org/adelie/packages/-/blob/current/user/pixman/stacksize-reduction.patch
