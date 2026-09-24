---
title: gmp
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Depends on `flex` and `slibtool`
- `--enable-fat` for optimized low level subroutines; improves performance, without a size increase
- Checks for `with-pic` and not `enable-pic`
- Check if build is broken with gcc 15.2.0 due to defaulting to C23
