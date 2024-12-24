---
title: Bash
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `autoreconf` is broken
- Is `bin/bashbug` needed?
- Modify `CFLAGS` to configure:
```
CFLAGS="-DSYS_BASHRC='\"/etc/bashrc\"' \
        -DSYS_BASH_LOGOUT='\"/etc/bash_logout\"' \
        -DDEFAULT_PATH_VALUE='\"/usr/bin\"' \
        -DSTANDARD_UTILS_PATH='\"/usr/bin\"' \
        -DNON_INTERACTIVE_LOGIN_SHELLS \
        -DSSH_SOURCE_BASHRC"
```
- We need a decent `/etc/profile` for bash (also unset TERMCAP?)
- Do we need to set `TERMCAP_LIB=/usr/lib/libncursesw.a` (probably not, void does this though)
- glaucus version of `bash` is linked against `terminfo` from `netbsd-curses`

## Limitations
- Default variables when cross compiling
- Does not work with `libedit` on glaucus even with `LIBS=-ledit` and when using `libreadline.a` (check?)

- `binutils` (fails to build with `yash` possibly due to POSIXLY_CORRECT)
- `expat` (buildconf.sh uses bash)
- `libcap` requires bash
- `toybox` requires bash (hard to patch)
- `zlib-ng` requires bash
