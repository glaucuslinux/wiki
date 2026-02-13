---
title: libedit
description: An opinionated Linux® distribution based on musl libc and toybox
---

- musl defines `__STDC_ISO_10646__` in `stdc-predef.h` which gets included by `gcc` by default (unlike `clang`)
- `readline/history.h` and `readline/tilde.h` can be symlinked to `editline/readline.h`
- Prefer symlinks to `libedit.so` instead of linker scripts `INPUT(-ledit)`
- `macos` uses `libedit` as its default line editing and history library

## References
- https://github.com/chimera-linux/cports/blob/master/main/libedit
- https://github.com/chimera-linux/libedit-chimera
- https://github.com/CTSRD-CHERI/cheribsd/blob/master/bin/sh/dot.shrc
- https://github.com/ralish/dotfiles/blob/main/editline/.editrc
- https://github.com/sabotage-linux/sabotage/blob/master/pkg/libedit
- https://github.com/wikimedia/mediawiki-vagrant/blob/master/puppet/modules/misc/files/editrc
- https://man.openbsd.org/editline.7
- https://unix.stackexchange.com/questions/548708/editrc-changing-keybindings-in-etc-editrc
