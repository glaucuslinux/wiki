---
title: harfbuzz
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Circular dependency with `cairo`? But we need to enable `cairo` support in the future
- Circular dependency with `freetype`
- Consider enabling `cairo`, `gobject`, `graphite`, `icu`, `introspection` support
- Enable the newer `graphite2` instead of `graphite`
- Might need to pass `-D cpp_std=c++17`

## References
- https://github.com/harfbuzz/harfbuzz/blob/main/CONFIG.md
- https://github.com/harfbuzz/harfbuzz/issues/2524
