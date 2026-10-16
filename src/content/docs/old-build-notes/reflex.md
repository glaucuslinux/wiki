---
title: reflex
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Depends on `byacc`
- Breaks the build of:
  - `kbd`
  - `wget2`: when `autoreconf -vfis` is ran (though this does not always happen)
