---
title: bash
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Cross breaks with `LIBS=-lnsss` as it links host `man2html` to cross `nsss`
- Does not link against `libedit`; unlike `dash` and `yash`

## Resources
- https://www.gnu.org/software/bash/manual/html_node/Optional-Features.html
