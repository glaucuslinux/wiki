---
title: gperf
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `autoreconf` does not work; requires `texi2pdf`
- `make install` breaks when `autoreconf` is run
- Upstream has a c++17 patch for `getline.cc`
- If some tests fail, use `-j1`
- Check if build is broken with gcc 15.2.0 due to defaulting to C23
