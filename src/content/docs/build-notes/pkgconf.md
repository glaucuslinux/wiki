---
title: pkgconf
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `/usr/share/aclocal/pkg.m4` might conflict with `pkg-config`
- pkgconf test suite is skipped because it depends on `kyua`
- `kyua` has a cyclic dependency issue; it depends on `pkg-config` (as well as `lutok` and `sqlite`)
- to get around this build: `pkgconf` -> `lutok` -> `sqlite` -> `kyua` -> `pkgconf` with tests
- No need to set `PKGCONFDIR` and `PKGCONFIGDIR` as environment variables during build
