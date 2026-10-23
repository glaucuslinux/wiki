---
title: json-c
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Prepare
- Check if we can remove `json-c` as only `sway` depends on it
- Check if we need `pointer` and/or `patch` support (RFCs 6901 and 6902)

## Prepare
- Depends on `doxygen` for documentation

## Configure
- `-DDISABLE_JSON_POINTER=ON` disables both pointer (RFC6901) and patch (RFC6902) support
- `rdrand` is only available on x86-64
- We pass `-DCMAKE_POLICY_DEFAULT_CMP0219=OLD` to prevent policy warning
