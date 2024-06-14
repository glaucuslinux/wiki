---
title: muon
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Notes
- ensure `default_library` is set to shared to prevent any possible static library from being built (which is what `wayland` and `libxkbcommon` may do...)
