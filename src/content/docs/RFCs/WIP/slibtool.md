---
title: slibtool
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Check if all tools like `LIBTOOL=slibtool` should be added to `MAKEFLAGS` (check Gentoo wiki and slibtool's README?)

- Officially migrated from `midipix.org` to `foss21.org`
- slibtool does not install `.la` files by default
- Currently slibtoolize and a lot of macros (m4 files) are needed to make slibtool a full replacement for libtool
- Version 0.6.0 which will come out soon (March/April) will have:
  - in-memory archive merging
  - a fully-fledged slibtoolize
  - a fully functional sltdl (for mainstream usage, at least)
- `slibtoolize` will be provided in the future (either as a mode or a symlink)
- `ltdl` is no longer needed (it serves to provide a `dlopen()` functionality on systems which do not offer it, i.e. HP-UX and BeOS)

## Resources
- Ataraxia (https://gitlab.com/ataraxialinux/ataraxia/-/raw/master/packages/slibtool)
- eweOS (https://github.com/eweOS/packages/blob/slibtool)
- Libertine (https://github.com/libertine-linux-packages/slibtool)
- SerpentOS (https://github.com/serpent-os/recipes/blob/main/s/slibtool)

- https://wiki.gentoo.org/wiki/Slibtool
- https://dev.midipix.org/cross/slibtool/issue/5
- https://dev.midipix.org/cross/slibtool/issue/8
- https://dev.midipix.org/cross/slibtool/issue/50
