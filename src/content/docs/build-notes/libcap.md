---
title: libcap
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Prepare
- Depends on `linux-headers`
- `progs/mkcapshdoc.sh` depends on `bash`

## Configure
- `DEBUG` is empty by default
- Explicitly specify `CC`, `AR`, `RANLIB` and `OBJCOPY` when `CROSS_COMPILE` is defined
- `GOPKGDIR` isn't used when `GOLANG=no`
- `INDENT` is empty if not found and is not used when `USE_GPERF=no`
- `KERNEL_HEADERS` control which `capability.h`, `prctl.h` and `securebits.h` to include, the internal ones under `libcap/include/uapi/linux` vs the ones under `usr/include/linux` (provided by `linux-headers`) and these two may not always be in sync which is why the internal headers are "intentionally" kept ahead; do not set `KERNEL_HEADERS`
- `PTHREADS` is set to `yes` by default and provides `libpsx`
- `RAISE_SETFCAP` is set to `no` by default (`yes` is not recommended)
- `USE_GPERF=no` prevents the build system from depending on `gperf` and uses the fallback generator instead
- `CAPSH_SHELL='-DSHELL=\"/bin/sh\"'` stops `capsh` from falling back to `/bin/bash`

## Build
- Does not support parallel build; complains about missing `cap_names.h` when it exists (a race condition probably..)

## Package
- Are `pam_cap.so`, `libcap.so` and `libpsx.so` runnable as standalone binaries (`chmod +x`)?

## References
- https://sites.google.com/site/fullycapable/who-ordered-libpsx
