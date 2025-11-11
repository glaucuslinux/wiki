---
title: json-c
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Depends on `cmake`
- `rdrand` is only available on x86-64
- Depends on `doxygen` for documentation
- Remove `-DBUILD_APPS=OFF -DDISABLE_EXTRA_LIBS=ON` for more software?
- Might require a patch or `-DCMAKE_POLICY_VERSION_MINIMUM=3.5` to fix build with `cmake` version `4+`
- Do we need `-DDISABLE_WERROR=ON`?
