---
title: gperf
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `autoreconf` does not work
- `make install` breaks when `autoreconf` is run
- Upstream has a c++17 patch for `getline.cc`
- If some tests fail, use `-j1`
