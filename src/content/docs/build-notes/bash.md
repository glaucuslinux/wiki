---
title: bash
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `5.2.37` is broken
- `autoreconf` breaks build
- Cross breaks with `LIBS=-lnsss` as it links host `man2html` to cross `nsss`
- Does not link against `libedit` even with `LIBS=-ledit` and when using `libreadline.a`; unlike `dash` and `yash`
- Links against `terminfo` from `netbsd-curses` on glaucus; is `--with-curses` needed?
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
- Does not cross compile well (hardcodes default variables)
- The following packages depend on `bash`:
  - `binutils`: `ld/genscripts.sh` fails to build with `yash` and `oksh` possibly due to `POSIXLY_CORRECT`
  - `expat`: buildconf.sh uses bash
  - `libcap`
  - `libedit`
  - `toybox`: hard to patch
  - `zlib-ng`

## References
- https://glfs-book.github.io/glfs/introduction/bash-profile.html
- https://www.gnu.org/software/bash/manual/html_node/Optional-Features.html
- https://www.linuxfromscratch.org/blfs/view/svn/postlfs/profile.html
