---
title: pixman
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `demos` require both `gtk` and `openmp` support
- `tests` require `openmp` support (on Void?)
- `stacksize` patch for use with `musl` to prevent segfaults with `librsvg`: `LDFLAGS="-Wl,-z,stack-size=2097152"`

## References
- https://git.adelielinux.org/adelie/packages/-/blob/current/user/pixman/stacksize-reduction.patch
