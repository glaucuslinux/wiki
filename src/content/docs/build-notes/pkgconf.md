---
title: pkgconf
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- The canonical url has moved to "https://distfiles.ariadne.space/pkgconf" from "https://distfiles.dereferenced.org/pkgconf"
- `/usr/share/aclocal/pkg.m4` might conflict with `pkg-config`
- pkgconf test suite is skipped because it depends on `kyua`
- `kyua` has a cyclic dependency issue; it depends on `pkg-config` (as well as `lutok` and `sqlite`)
- to get around this build: `pkgconf` -> `lutok` -> `sqlite` -> `kyua` -> `pkgconf` with tests
- No need to set `PKGCONFDIR` and `PKGCONFIGDIR` as environment variables during build
- Do we need a `personality` file `/usr/share/pkgconfig/personality.d/x86_64-pc-linux-musl.personality` for native?
```
Triplet: x86_64-pc-linux-musl
SysrootDir: /
DefaultSearchPaths: /usr/lib/pkgconfig:/usr/share/pkgconfig
SystemIncludePaths: /usr/include
SystemLibraryPaths: /usr/lib
```
- Also do we need another personality file for cross (`x86_64-glaucus-linux-musl`)?
- `--with-pkg-config-dir` defaults to both `/usr/lib/pkgconfig` and `/usr/share/pkgconfig`
