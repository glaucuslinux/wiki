---
title: nsss
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Use `--enable-libc-includes` when `nsss` improves (also fix `shadow`)
- A circular dependency between `nsss` and `s6` (at boot-time)
- There is no test suite
- The following definitions are missing in headers from nsss:
```c
#include <features.h>

#define __NEED_size_t
#define __NEED_uid_t
#define __NEED_gid_t

#ifdef _GNU_SOURCE
#define __NEED_FILE
#endif

#include <bits/alltypes.h>
```
