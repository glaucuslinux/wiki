---
title: toybox
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `toybox`'s `cpio` defaults to `newc`, and is as fast as `bsdcpio`
- Do we need to run `scripts/genconfig.sh` before `make`?
- `scripts/genconfig.sh` and tests depend on `bash`
- `find` from `findutils` is about twice as fast as the one from `toybox`
- `toybox`'s `ip` is unable to set interfaces up
- `musl` recommends using `getconf` (and `iconv`?) from `toybox`
- `toybox`'s `sysctl —system` vs `-p`
- `sysctl.d` directory is better than `sysctl.conf` file as you're just dropping files in there instead of editing a file in place
- `sysctl` configuration: https://github.com/k4yt3x/sysctl
- prefer `toybox`'s `groups` to `shadow`'s
- This symbol is always set: `TOYBOX_UTMPX=y`

## Replaces
- `coreutils`
- `diffutils`
- `findutils`; `toybox`'s `find` is approximately two times slower
- `libarchive`'s `bsdcpio`
- `patch`; `toybox`'s `patch` already does `--no-backup-if-mismatch` by default
- `procps-ng`; `toybox` does not provide `hugetop`, `pidwait`, `slabtop` (though planned) and `tload` (not planned)
- `psmisc`; `toybox` is planning on providing `fuser`, `pstree`, `peekfd` and `prtstat` (but not `pslog` or `pstree.x11`)
- `sed`

## Does Not Replace
- `bc`; toybox's `bc` is at least 20 times slower for larger numbers despite being based on gavin's implementation
- `file`
- `fping`
- `grep`; toybox's `grep` is at least 10 times slower
- `iproute2`
- `kbd`; busybox has better implementations
- `less`; bad implementation
- `mandoc`; bad implementation
- `neatvi`; bad implementation
- `pciutils`
- `sdhcp`
- `shadow`
- `util-linux`; bad implementations like `swapon`
- `wget2`; bad implementation

## Additional binaries provided by `coreutils`
1. `b2sum`
2. `basenc`
3. `chcon` (for SELinux)
4. `csplit`
5. `dir`
6. `dircolors` (provided by `ls`)
7. `join`
8. `numfmt`
9. `pathchk`
10. `pinky`
11. `pr`
12. `ptx`
13. `stdbuf`
14. `sum`
15. `tsort`
16. `unexpand`
17. `users` (provided by `shadow`)
18. `vdir`

## Shell Builtins
- `:` (POSIX) (bash, dash, oksh, yash)
- `.` (POSIX) (bash, dash, oksh, yash)
- `alias`/`unalias` (bash, dash, oksh, yash)
- `bg` (bash, dash, oksh, yash)
- `break` (POSIX) (bash, dash, oksh, yash)
- `cd` (bash, dash, oksh, yash)
- `command` (bash, dash, oksh, yash)
- `continue` (POSIX) (bash, dash, oksh, yash)
- `echo` (bash, dash, oksh) (yash: substitutive built-in for `/usr/bin/echo`)
- `eval` (POSIX) (bash, dash, oksh, yash)
- `exec` (POSIX) (bash, dash, oksh, yash)
- `exit` (POSIX) (bash, dash, oksh, yash)
- `export` (POSIX) (bash, dash, oksh, yash)
- `fg` (bash, dash, oksh, yash)
- `getopts` (bash, dash, oksh, yash)
- `jobs` (bash, dash, oksh, yash)
- `kill` (bash, dash, oksh, yash)
- `pwd` (bash, dash, oksh) (yash: substitutive built-in for `/usr/bin/pwd`)
- `read` (bash, dash, oksh, yash)
- `readonly` (POSIX) (bash, dash, oksh, yash)
- `return` (POSIX) (bash, dash, oksh, yash)
- `set` (POSIX) (bash, dash, oksh, yash)
- `shift` (POSIX) (bash, dash, oksh, yash)
- `test`/`[` (bash, dash, oksh) (yash: substitutive built-in for `/usr/bin/test` and `/usr/bin/[` respectively)
- `times` (POSIX) (bash, dash, oksh, yash)
- `trap` (POSIX) (bash, dash, oksh, yash)
- `type` (bash, dash, oksh, yash)
- `ulimit` (bash, dash, oksh, yash)
- `umask` (bash, dash, oksh, yash)
- `unset` (POSIX) (bash, dash, oksh, yash)
- `wait` (bash, dash, oksh, yash)

### Shell Builtins Provided by toybox
- `echo`
- `help`
- `kill`
- `pwd`
- `test`
- `ulimit`

### Shell Builtins Not Found in
- `abbr` (bash, dash, oksh, yash)
- `alloc` (bash, dash, oksh, yash)
- `autoload` (bash, dash, yash) (oksh: alias for `typeset -fu`)
- `bindkey` (bash, dash, oksh) (yash: elective built-in)
- `bye` (bash, dash, oksh, yash)
- `cap` (bash, dash, oksh, yash)

## References
- https://android.googlesource.com/platform/system/core/+/master/shell_and_utilities/README.md
- https://codeberg.org/sewn/kiss-repo/commit/c7449c660d048034b3da358efe0a4d8526c8019b
- https://core.suckless.org/sbase/
- https://core.suckless.org/ubase/
- https://github.com/chimera-linux/chimerautils
- https://github.com/dcantrell/bsdutils
- https://github.com/evilusean/Pysean/blob/main/NoBloatTools
- https://github.com/ibara/baseutils
- https://github.com/matijaskala/coreutils-bsd
- https://github.com/oracle/solaris-userland
- https://heirloom-ng.pindorama.net.br
- https://heirloom.sourceforge.net/devtools.html
- https://heirloom.sourceforge.net/sh.html
- https://heirloom.sourceforge.net/tools.html
- https://landley.net/toybox/index.html
- https://landley.net/toybox/roadmap.html
- https://landley.net/toybox/status.html
- https://packages.gentoo.org/categories/app-alternatives
- https://tools.suckless.org/9base/
- https://www.openwall.com/lists/musl/2013/11/09/3
- https://youtube.com/@roblandley1154
- https://youtube.com/watch?v=Sk9TatW9ino
