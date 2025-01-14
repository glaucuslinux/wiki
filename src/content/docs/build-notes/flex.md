---
title: flex
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Depends on `help2man` and `texi2dvi`
- Depends on itself
- Touch `doc/flex.1` to prevent `help2man` from running and breaking `make install-strip`
- glaucus does not use `libfl` (`gcc` configure might complain about a missing lex library)
