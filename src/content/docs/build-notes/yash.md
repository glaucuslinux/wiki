---
title: yash
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Configure
- Consider removing `--disable-dirstack` if required
- Consider adding `--disable-test` if the `test` builtin is not required

## Prepare
- Depends on `a2x` and `asciidoc`
- Depends on `netbsd-curses` (`libterminfo.so` in particular)
- `yash` provides its own command line editing library `lineedit` and does not depend on `libedit` or `readline` (this means that the custom bindings under `/etc/editrc` will not affect `yash`)
- `install` target copies whatever is under `share/` to `DESTDIR` and we do not want `share/completion` so remove it as glaucus uses alternative software

## Configure
- All `--enable-*` flags are already enabled by default (see `configure`)
- `--no-create` is like a dry run that does not generate build files
- `debug` is set to `false` by default
- `--disable-doc` removes the need to depend on `a2x`
- `--disable-help` prevents both `help $builtin` and `$builtin --help` from working
- No need to set `YASH_GETCWD_AUTO_MALLOC` as `musl` handles `getcwd` correctly
- `--with-term-lib=terminfo` is the only required library to build and run `yash` (`curses`, `ncurses`, `ncursesw` and `tinfo` are not needed)

## Package
- `default` sources `sample` which sources `common`
- `yash` loads `default` automatically if no `~/.yashrc` is detected
- `share/config` is not needed as provide our own `default`

## `yashrc`
- `clobber` is enabled by default
- glaucus builds `yash` with command history and line-editing support so it makes no sense to check if these are enabled or not
- `HISTRMDUP` can be set to remove duplicate history items but it makes prediction less accurate
- `MAILCHECK=0` does not disable mail checking and instead checks before every prompt
- `set --le-predict-empty` is counterintuitive
- `YASH_PS1P='\fi.'` dims predicted text like `fish`
- Prefer `forward-semiword` and `backward-semiword` to both their `bigword` and `emacsword` variants
- Prefer `backward-kill-semiword` to `backward-kill-bigword` to respect `/` and `-` in paths

## Other
- Can be cross-compiled properly now removing the need for `dash` in `chroot`

## References
- https://github.com/magicant/yash/issues/48
- https://github.com/magicant/yash/pull/203
- https://magicant.github.io/yash/doc/
