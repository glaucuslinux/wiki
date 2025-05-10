---
title: autoconf
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- Depends on `m4` and itself
- Depends on `help2man`; touch missing `.1.t` files (`-j1` does not work)
- `autoreconf` depends on `autopoint` from `gettext-tiny`
- Build system automatically sets `M4=/usr/bin/m4` and `EMACS=no`
- `lto` works without patches on glaucus
- `binutils` does not provide `/usr/share/info/standards.info`
- Test suite requries GNU `m4`, and `perl` to run `autom4te` on `tests/wrapper.in`
- Tests `227` and `351` are broken on Adelie and Arch
- Tests are disabled on Alpine

## References
- https://wiki.debian.org/Autoreconf
