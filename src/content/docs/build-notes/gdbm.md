---
title: gdbm
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `configure` enables line-editing support if available
- Alpine disables large-file support to make the db file compatible with older versions
- No need to create compatibility symlinks to `/usr/include/gdbm`
