---
title: Locale
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `LANGUAGE` > `LC_ALL` > `LANG`
- `LANG` provides a default for any category not set
- `LC_ALL` overrides category-specific variables
- `/etc/locale.conf` is a systemdism from `localectl`
- If `locale` shows `POSIX` then foreign characters (e.g. Arabic) won't display correctly unless `LC_CTYPE=C.UTF-8` or `LANG=en_US.UTF-8` are used
```sh
- *C.UTF-8 (default musl locale, not a glibcism, lightest possible UTF-8 locale without requiring glibc)
- en_US.UTF-8
- C (aka POSIX, strict 7-bit single-byte ASCII, disables UTF-8)

## TERM
- *linux (tty, 8 colors)
- xterm-256color (default)
- tmux-256color vs screen-256color

## `POSIXLY_CORRECT` should be unset
```
- Do not set `MUSL_LOCPATH` for `musl-locales` as it messes up install path (relative `$PWD`)
- POSIX.1 recommends restricting filenames to letters (a-z, A-Z), numbers (0-9), period (.), dash (-), and underscore(_)

## References
- https://git.adelielinux.org/adelie/musl-locales
- https://github.com/TFSThiagoBR98/musl-locale
- https://gitlab.alpinelinux.org/alpine/aports/-/blob/master/community/musl-locales
