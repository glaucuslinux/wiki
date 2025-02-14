---
title: Bash
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `autoreconf` breaks build
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
- Does not cross compile well (hardcodes default variables)
- Does not work with `libedit` on glaucus even with `LIBS=-ledit` and when using `libreadline.a` (check?)
- The following packages depend on `bash`:
  - `binutils`: `ld/genscripts.sh` fails to build with `yash` and `oksh` possibly due to `POSIXLY_CORRECT`
  - `expat`: buildconf.sh uses bash
  - `libcap`
  - `libedit`
  - `toybox`: hard to patch
  - `zlib-ng`
