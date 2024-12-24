---
title: bc
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `configure.sh` does not support `editline` and `readline` together
- `configure.sh` does not support short and long option types together
- `--localedir` has been deprecated
- `--mandir` is being specified even though man-pages are being disabled
- Test suite uses the `test` target (`check` is a synonym)
