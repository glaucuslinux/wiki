---
title: freetype
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Prepare
- `autogen.sh` breaks the build

## Configure
- Uses host `pkg-config` to find required libraries?
- Check `--with-harfbuzz=dynamic`
- Provide `ft2demos` and `freetype2.sh` as well
- Enable `freetype-config` in `builds/unix/freetype-config` (Alpine)?

## Other
- Infinality has been deprecated (some long time ago)
