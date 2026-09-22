---
title: fribidi
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Prepare
- `autogen.sh` requires the `which` command

## Configure
- Configure and build with `muon` as it allows for removing more stuff (e.g. the `fribidi` command)
- Disabling `deprecated` removes legacy code but might break ABI
