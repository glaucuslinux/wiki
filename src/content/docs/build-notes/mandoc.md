---
title: mandoc
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `mandoc` requires an `LN` variable in `configure.local` to use symbolic links
- `cat` can be used instead of `less` (oasis)
- `sys_endian` in `mandoc` refers to `sys/endian.h`; `musl` provides `include/endian.h`
- Do we need `HAVE_CMSG_XPG42=0`?

## References
- https://github.com/plp13/qman
- https://lists.gnu.org/archive/html/gnunet-developers/2018-09/msg00017.html
- https://undeadly.org/cgi?action=article&sid=20170304230520
