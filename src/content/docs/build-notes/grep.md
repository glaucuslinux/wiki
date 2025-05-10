---
title: grep
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- `egrep` and `fgrep` are obsolescent; warnings can make some test suites fail so remove them?
- `--without-included-regex` has been deprecated: https://lists.gnu.org/archive/html/bug-grep/2021-08/msg00028.html
- `dirfd` patch is for ancient systems: https://lists.gnu.org/archive/html/bug-gnulib/2023-05/msg00040.html
