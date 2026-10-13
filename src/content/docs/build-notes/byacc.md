---
title: byacc
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Configure
- Remove `--program-prefix=b`?
### Other
- May use `bison` instead

## Configure
- `btyacc` is enabled by default:
  - This increases compatibility with `bison` and allows `byacc -B` to be used
  - This also means that backtracking features like `%destructor` and `%locations` are now supported

## Other
- Replaces `bison -y`

## References
- https://aur.archlinux.org/packages/byacc-bison
- https://c9x.me/yacc/
- https://github.com/ibara/yacc
- https://github.com/iglunix/iglunix/blob/main/base/linux/kernel-byacc.patch
- https://github.com/wyvertux/wyverkiss/wiki/Building-the-kernel
