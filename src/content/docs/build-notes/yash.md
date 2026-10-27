---
title: yash
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Prepare
- Patch to clear until last forward slash `/` and not entire argument (`bindkey --emacs '\^W' backward-kill-semiword`)?
- Patch to correctly color relative symbolic links as available even if not in the same directory
- Patch to prevent warning when overwriting files (`cp`, `mv`...) (this probably happens because `yash` is run with `-i`)
### Configure
- Consider removing `--disable-dirstack` if required
- Consider adding `--disable-test` if the `test` builtin is not required

## Prepare
- Depends on `a2x` and `asciidoc`
- Depends on `netbsd-curses` (`libterminfo.so` in particular)
- `yash` provides its own command line editing library `lineedit` and does not depend on `libedit` or `readline` (this means that the custom bindings under `/etc/editrc` will not affect `yash`)

## Configure
- All `--enable-*` flags are already enabled by default (see `configure`)
- `--no-create` is like a dry run that does not generate build files
- `debug` is set to `false` by default
- `--disable-doc` removes the need to depend on `a2x`
- `--disable-help` prevents both `help $builtin` and `$builtin --help` from working
- No need to set `YASH_GETCWD_AUTO_MALLOC` as `musl` handles `getcwd` correctly
- `--with-term-lib=terminfo` is the only required library to build and run `yash` (`curses`, `ncurses`, `ncursesw` and `tinfo` are not needed)

## Other
- Can be cross-compiled properly now removing the need for `dash` in `chroot`

## References
- https://github.com/magicant/yash/issues/48
- https://github.com/magicant/yash/pull/203
- https://yash.osdn.jp/doc/params.html
