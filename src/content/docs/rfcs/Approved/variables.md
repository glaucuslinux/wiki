---
title: Variables
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Prefix with `rad` for variables from the package manager
- Prefix with `ceras` for variables and functions in build files

```sh
## `LANGUAGE` > `LC_ALL` > `LANG`
## `/etc/locale.conf` is a systemdism from `localectl`
- *C (aka POSIX, micro optimization, disables UTF-8, performance)
- C.UTF-8 (glibcism?)
- en_US.UTF-8

## TERM
- *linux (tty, 8 colors)
- xterm-256color (default)
- tmux-256color vs screen-256color

## `POSIXLY_CORRECT` should be unset
```
