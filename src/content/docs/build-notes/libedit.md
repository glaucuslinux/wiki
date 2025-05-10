---
title: libedit
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- musl defines `__STDC_ISO_10646__` in `stdc-predef.h` which gets included by `gcc` by default (unlike `clang`)
- `readline/history.h` and `readline/tilde.h` can be symlinked to `editline/readline.h`

## References
- https://github.com/chimera-linux/cports/blob/master/main/libedit
- https://github.com/chimera-linux/libedit-chimera
- https://github.com/sabotage-linux/sabotage/blob/master/pkg/libedit
