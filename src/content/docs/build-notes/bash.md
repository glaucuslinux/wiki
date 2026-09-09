---
title: bash
description: An opinionated Linux® distribution based on musl libc and toybox
---

- glaucus only uses `bash` in the bootstrap process to build certain packages (see Bashisms section below)
- glaucus does not provide `bash` in the final system

## Prepare
- `autoreconf` breaks build

## Configure
- Does not cross compile with ease because of hardcoded variables
- Does not link against `libedit` even with `LIBS=-ledit` and `libreadline.a`; however, it builds fine with `--enable-readline` and `--with-installed-readline`
- Links against `terminfo` from `netbsd-curses` on glaucus and builds fine with `--with-curses`

## Build
- Add `no-parallel` to `opt` in case of race conditions between `y.tab.c` and `builtins/libbuiltins.a`

## Check
- Disabled on glaucus as `bash` is not part of the final system

## Package
- glaucus removes `bin/bashbug`

## Bashisms
- `ld/genscripts.sh` from `binutils`; glaucus uses `llvm binary utilities` instead
- `buildconf.sh` from `expat`
- `libcap`
- `libedit`
- `toybox`: hard to patch
- `zlib-ng`; glaucus uses `sortix libz` instead

## Old
- `5.2.37` is broken; glaucus uses `5.3`
- Cross breaks with `LIBS=-lnsss` as it links host `man2html` to cross `nsss`; glaucus no longer uses `nsss`

## References
- https://glfs-book.github.io/glfs/introduction/bash-profile.html
- https://gnu.org/software/bash/manual/html_node/Command-Grouping.html
- https://gnu.org/software/bash/manual/html_node/Optional-Features.html
- https://linuxfromscratch.org/blfs/view/svn/postlfs/profile.html
- https://mywiki.wooledge.org/BashPitfalls
- https://mywiki.wooledge.org/BashWeaknesses
