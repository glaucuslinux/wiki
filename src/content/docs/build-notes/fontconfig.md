---
title: fontconfig
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Prefer `autoreconf -vfis` to `./autogen.sh` as the latter requires `gettext`
- Do not remove `src/fcobjshash.gperf.h` as it breaks the build
- `src/fcobjshash.h` does not exist
- Does not build with `muon`
- Requires `gperf`; `kiss` provides `fcobjshash.h` to remove `gperf` dependency
- The default cache dir is `/var/cache/fontconfig`
- Consider disabling non-scalable fonts (e.g. bitmap fonts)

## References
- https://github.com/chimera-linux/cports/tree/master/main/fontconfig
- https://www.linuxfromscratch.org/blfs/view/svn/x/tuning-fontconfig.html
