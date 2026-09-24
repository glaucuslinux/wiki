---
title: help2man
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Depends on `gettext` and `perl` at build-time
- Are `perl-locale-gettext` / `gettext-tiny` needed?
- A circular dependency between `help2man` and `gettext` on Void (`automake` -> `autoconf` -> `help2man` -> `gettext` -> `automake`)
- Both iglunix and kiss provide a limited version of help2man
- There is no test suite
