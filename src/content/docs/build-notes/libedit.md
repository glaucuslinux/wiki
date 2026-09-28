---
title: libedit
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Replaces `readline`
- `macos` uses `libedit` as its default line editing and history library

## Prepare
- Depends on the `file` command?
- `libedit` only checks if `__STDC_ISO_10646__` is defined (and not its value) and `musl` defines it in `stdc-predef.h` which `gcc` includes by default unlike `clang`
- `musl` also provides `sys/ttydefaults.h`

## Package
- `inputrc` is not needed
- Prefer symlinks to `editline/readline.h` instead of touching empty `history.h`, `readline.h` and `tilde.h` headers or having `#include <editline/readline.h>` inside
- Prefer symlinks to `libedit.so` instead of linker scripts `INPUT(-ledit)`

## `editrc`
- `bind -e` and `bind -v` reset the bindings so run them as early as possible
- `bind -k up ...` is identical to `bind "\e[A" ...`
- `bind -k down ...` is identical to `bind "\e[B" ...`
- Prefer `ed-search-prev-history` to `ed-prev-history` and `ed-search-next-history` to `ed-next-history` for friendlier incremental prefix search
- We might need to append `history size 1024` and `history unique 1` lines to `editrc` unless they're the default behavior
### Keys and Macros
```
"\e[1;5C" :: ctrl + right
"\e[1;5D" :: ctrl + left
"\e[1~"   :: home
"\e[3;5~" :: ctrl + delete
"\e[3~"   :: delete
"\e[4~"   :: end
"\e[5C"   :: ctrl + right
"\e[5D"   :: ctrl + left
"\e[5~"   :: page up
"\e[6~"   :: page down
"\e[7~"   :: home (rxvt)
"\e[8~"   :: end (rxvt) 
"\eOc"    :: ctrl + right (rxvt)
"\eOd"    :: ctrl + left (rxvt)
"^R"      :: ctrl + r
"^W"      :: ctrl + w
```

## References
- https://github.com/chimera-linux/cports/blob/master/main/libedit
- https://github.com/chimera-linux/libedit-chimera
- https://github.com/ralish/dotfiles/blob/main/editline/.editrc
- https://github.com/sabotage-linux/sabotage/blob/master/pkg/libedit
- https://github.com/wikimedia/mediawiki-vagrant/blob/master/puppet/modules/misc/files/editrc
- https://man.netbsd.org/editline.7
- https://man.netbsd.org/editrc.5
- https://unix.stackexchange.com/questions/548708/editrc-changing-keybindings-in-etc-editrc
