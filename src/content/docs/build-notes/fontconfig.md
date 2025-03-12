---
title: fontconfig
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Prefer `autoreconf -vfis` to `./autogen.sh` as the latter is also a wrapper around `./configure`
- Do not remove `src/fcobjshash.gperf.h` as it breaks the build
- `src/fcobjshash.h` does not exist
- Does not build with `muon`
- Requires `gperf`; `kiss` provides `fcobjshash.h` to remove `gperf` dependency
