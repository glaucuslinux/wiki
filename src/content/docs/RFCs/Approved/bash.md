---
title: Bash
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Notes
- glaucus version of `bash` is linked against `terminfo` from `netbsd-curses`
- binutils fails to build when `yash` is the default shell, probably due to it operating in posixly correct mode

## Limitations
- bash has default variables when cross compiling
- glaucus bash does not work with readline even with LIBS=-ledit and when using libreadline.a (check?)

- `libcap` requires bash
- `toybox` requires bash (hard to patch)
- `zlib-ng` requires bash
