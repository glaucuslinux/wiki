---
title: libxkbcommon
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Prepare
- Check if `xkeyboard-config` is required as a run time dependency (probably still is)

## Configure
- `xkbregistry` as of `1.8.1` requires at least version `2.14.0` of `libxml2`
- `libxkbcommon` removed support for byacc as of `1.10.0` and are recommending `bison>=3.6` as a hard dependency instead

## Other
- Releases have migrated to github from `xkbcommon.org`
- Uses a custom license expression `LicenseRef-digital-equipment-corporation`

## References
- https://github.com/glaucuslinux/core/issues/9
- https://github.com/xkbcommon/libxkbcommon/issues/644
- https://github.com/xkbcommon/libxkbcommon/pull/633
