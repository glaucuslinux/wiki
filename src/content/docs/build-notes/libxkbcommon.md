---
title: libxkbcommon
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Uses a custom license expression `LicenseRef-digital-equipment-corporation`
- Releases have migrated to github from `xkbcommon.org`
- `xkbregistry` depends on `libxml2`; latest versions of `libxkbcommon` (as of `1.8.1`) now require at least version `2.14.0` of `libxml2`
- `libxkbcommon` removed support for byacc as of `1.10.0` and are recommending `bison>=3.6` instead
- Might complain from `lto`?
- `libxkbcommon` builds both `static` and `shared`
  - disable `static` with `muon`
  - try using `-Ddefault_library=shared`

## References
- https://github.com/glaucuslinux/core/issues/9
- https://github.com/xkbcommon/libxkbcommon/issues/644
- https://github.com/xkbcommon/libxkbcommon/pull/633
