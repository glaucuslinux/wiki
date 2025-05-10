---
title: bc
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- Rely on `github` for `url` as `gavinhoward.com` frequently goes down
- `configure.sh` does not support `editline` and `readline` together
- `configure.sh` does not support short and long option types together
- `--localedir` has been deprecated
- Test suite uses the `test` target (`check` is a synonym)
- `tests/bc/errors/33.txt` fails with `mimalloc` on Chimera
