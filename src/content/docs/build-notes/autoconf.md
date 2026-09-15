---
title: autoconf
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Prepare
- Depends on `m4` and itself
- Depends on `help2man`; touch missing `.1.t` files (`-j1` does not work)
- `lto` works without patches on glaucus

## Configure
- Build system automatically sets `M4=/usr/bin/m4` and `EMACS=no`
- `--without-lispdir` prevents `configure` from providing a location to store `.elc` files (defaults to `${datadir}/emacs/site-lisp`)

## `autoreconf`
- Depends on `autopoint` from `gettext-tiny`
- Runs `aclocal`, `autoconf`, `automake`, `autoheader`, `autopoint` and `libtoolize` in the right order and repeatedly when appropriate
- It only remakes files that are older than their sources
- Environment variables `AUTOM4TE`, `AUTOCONF`, `AUTOHEADER`, `AUTOMAKE`, `ACLOCAL`, `AUTOPOINT`, `LIBTOOLIZE`, `M4`, and `MAKE` can be used to override the invocation of `autoreconf` and the respective tools
- `NOCONFIGURE=yes` (or any value) prevents `autogen.sh` from running `./configure`

## Other
- Explicitly specify `exec-prefix` in `glaucus-configure` because build systems are awful
- Explicitly specify `--libdir=/usr/lib` in `glaucus-configure` to prevent `lib64` contamination

## References
- https://autotools.info/autoconf/macros.html
- https://devmanual.gentoo.org/general-concepts/autotools/index.html
- https://gnu.org/software/autoconf/
- https://gnu.org/software/autoconf/manual/
- https://invisible-island.net/autoconf/autoconf.html
- https://ohse.de/uwe/articles/aal.html
- https://wiki.debian.org/Autoreconf
