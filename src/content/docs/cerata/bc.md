---
title: bc
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `configure.sh` does not handle short and long option types together (use only one)
- Do not enable both editline and readline (build system will pack the latter flag passed)
- `--localedir` is obsolete and removed
- `--mandir` is being specified even though man-pages are being disabled
- Test suite uses the `test` target (`check` is a synonym)
