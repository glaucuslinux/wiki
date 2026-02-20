---
title: Locale
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `LANGUAGE` > `LC_ALL` > `LANG`
- `LC_ALL` overrides category-specific variables
- `LANG` provides a default for any category not set
- `/etc/locale.conf` is a systemdism from `localectl`
- If `locale` shows `POSIX` then foreign characters (e.g. Arabic) won't display correctly unless `LC_CTYPE=C.UTF-8` or `LANG=en_US.UTF-8` are used
```sh
- *C (aka POSIX, micro optimization, disables UTF-8, performance)
- C.UTF-8 (glibcism?)
- en_US.UTF-8

## TERM
- *linux (tty, 8 colors)
- xterm-256color (default)
- tmux-256color vs screen-256color

## `POSIXLY_CORRECT` should be unset
```
