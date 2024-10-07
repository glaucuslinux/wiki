---
title: help2man
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- There is no test suite
- Is `perl` a build-time dependency?
- Are `perl-locale-gettext` / `gettext-tiny` needed?
- According to void `gettext` is not needed as a build dependency as it creates a cycle: automake -> autoconf -> help2man -> !gettext! -> automake
