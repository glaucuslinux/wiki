---
title: byacc
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Other
- May use `bison` instead

## Configure
### Configure
- `--program-prefix=b` is needed to install `byacc` as `byacc` and not `yacc`, the latter is a symlink provided later on `yacc -> byacc`
- `btyacc` is enabled by default:
  - This increases compatibility with `bison` and allows `byacc -B` to be used
  - This also means that backtracking features like `%destructor` and `%locations` are now supported
- `--enable-stdnoreturn` is redundant as `clang` treats `_Noreturn` and `__attribute__((noreturn))` identically; neither is `posix` but `musl` prefers `_Noreturn` over a `gcc` extension
- `--disable-echo` silences compiler messages
- `--disable-leaks` performs memory-leak testing
- `--with-dmalloc`, `--with-dbmalloc` and `--with-valgrind` are for testing
- `--without-manpage-format` does not work, use `--with-manpage-format=normal` instead
- `--without-man2html` prevents checking for `man2html` which glaucus does not provide
- Do not pass `--with-system-type` as it overrides `--host`

## Other
- Replaces `bison -y`

## References
- https://aur.archlinux.org/packages/byacc-bison
- https://c9x.me/yacc/
- https://github.com/ibara/yacc
- https://github.com/iglunix/iglunix/blob/main/base/linux/kernel-byacc.patch
- https://github.com/wyvertux/wyverkiss/wiki/Building-the-kernel
