---
title: json-c
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Configure
- `-DDISABLE_JSON_POINTER=ON` disables both pointer (RFC6901) and patch (RFC6902) support
- `rdrand` is only available on x86-64
- Depends on `doxygen` for documentation
- We pass `-DCMAKE_POLICY_DEFAULT_CMP0219=OLD` to prevent policy warning
