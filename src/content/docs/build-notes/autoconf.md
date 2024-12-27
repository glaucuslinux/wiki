---
title: autoconf
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Depends on `m4` and itself
- Depends on `help2man`; ignore missing `.1.t` files
- `autoreconf` depends on `autopoint` from `gettext-tiny`
- Build system automatically sets `M4=/usr/bin/m4` and `EMACS=no`
- Test suite requries GNU m4, and `perl` to run `autom4te` on `tests/wrapper.in`
- Tests `227` and `351` are broken on Adelie and Arch

## Resources
- https://wiki.debian.org/Autoreconf
