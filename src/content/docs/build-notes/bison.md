---
title: bison
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Depends on `help2man`
- Depends on `flex`?
- Explicitly `--disable-year2038` and `--disable-assert`
- Touch `doc/bison.1.tmp` and `doc/bison.info` to prevent `help2man` from breaking `make`
- Void renames `yacc` to `bison-yacc`
- Add `--without-libtextstyle-prefix` to configure?
