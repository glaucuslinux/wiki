---
title: autoconf
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Depends on `m4` and itself
- Depends on `help2man`; touch missing `.1.t` files (`-j1` does not work)
- `autoreconf` depends on `autopoint` from `gettext-tiny`
- Build system automatically sets `M4=/usr/bin/m4` and `EMACS=no`
- `lto` works without patches on glaucus
- `binutils` does not provide `/usr/share/info/standards.info`
- `autoreconf` runs all (`aclocal`, `autoconf`, `automake`, `autoheader`, `autopoint` and `libtoolize`) in the right order and when appropriate (repeatedly) to update the GNU Build System in the specified directories and their subdirectories (by default, it only remakes files that are older than their sources)
- The environment variables AUTOM4TE, AUTOCONF, AUTOHEADER, AUTOMAKE, ACLOCAL, AUTOPOINT, LIBTOOLIZE, M4, and MAKE may be used to override the invocation of `autoreconf` and the respective tools
- Test suite requries GNU `m4`, and `perl` to run `autom4te` on `tests/wrapper.in`
- Tests `227` and `351` are broken on Adelie and Arch
- Tests are disabled on Alpine

## References
- https://autotools.info/autoconf/macros.html
- https://invisible-island.net/autoconf/autoconf.html
- https://wiki.debian.org/Autoreconf
