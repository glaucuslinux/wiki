---
title: oksh
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Patch to support `/etc/kshrc` instead of `ksh.kshrc`
- Does not support `multiline`
- `--enable-lto` forces `-O3` in `CFLAGS`?
- Request `$LIBS` be added to make cross easier
- the new oksh has ctrl + arrows working (loksh doesn't have that!)
- `musl` provides reallocarray and timereclear as of `1.2.2`
- check the following for `pconfig.h`:
```
/* #define HAVE_ISSETUGID */
/* #define HAVE_ST_MTIMESPEC */
```
- musl provides `issetugid` which originates from OpenBSD while glibc does not?

## References
- https://github.com/ibara/oksh/blob/master/ksh.kshrc
- https://github.com/ibara/oksh/issues/45
- https://github.com/ibara/oksh/issues/63
- https://reddit.com/r/openbsd/comments/mansac/ksh_and_multiple_line_command_expansion/
