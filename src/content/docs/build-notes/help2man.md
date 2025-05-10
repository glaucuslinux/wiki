---
title: help2man
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- Depends on `gettext` and `perl` at build-time
- Are `perl-locale-gettext` / `gettext-tiny` needed?
- A circular dependency between `help2man` and `gettext` on Void (`automake` -> `autoconf` -> `help2man` -> `gettext` -> `automake`)
- There is no test suite
