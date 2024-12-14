---
title: autoconf
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- There is no need to specify `M4=/usr/bin/m4` and `EMACS=no` as build system automatically picks them up
- Tests `227` and `351` are broken (Adelie & Arch)
- Requries GNU m4, and perl to run `autom4te` on `tests/wrapper.in`
