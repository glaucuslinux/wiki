---
title: byacc
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Replaces `bison -y`

## Configure
- `btyacc` is enabled by default:
  - This increases compatibility with `bison` and allows `byacc -B` to be used
  - This also means that backtracking features like `%destructor` and `%locations` are now supported
- Remove `--program-prefix=b`?

## References
- https://aur.archlinux.org/packages/byacc-bison
- https://c9x.me/yacc/
- https://github.com/ibara/yacc
- https://github.com/iglunix/iglunix/blob/main/base/linux/kernel-byacc.patch
- https://github.com/wyvertux/wyverkiss/wiki/Building-the-kernel
