---
title: nsss
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Use `--enable-libc-includes` when `nsss` improves (also fix `shadow`)
- A circular dependency exists between `nsss` and `s6` (at boot-time)
- There is no test suite
