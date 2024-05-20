---
title: json-c
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Notes
- `rdrand` option is only available on x86-64 where the `rdrand` instruction is available
- Optionally depends on `doxygen` for documentation
- Check if removing `-DBUILD_APPS=OFF -DDISABLE_EXTRA_LIBS=ON` adds useful software, or should we keep disabling apps and extra libs?
