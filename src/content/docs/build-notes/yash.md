---
title: yash
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Configure
- Consider removing `--disable-dirstack` if required
- Consider adding `--disable-test` if the `test` builtin is not required
### `yashrc`
- Check `Variables used by the shell` section in the manual for additional variables to set/unset
- Check what locale variables and values to set after checking the manual
- Check `\ffontspecs.` section in the manual for customizing prompt colors
### Other
- Check if we can replace `bash` entirely even if we enable more features inside `bash` (will also require `yash` not going into POSIXly-correct mode when invoked as `sh`)

## Prepare
- Depends on `a2x` and `asciidoc`
- Depends on `netbsd-curses` (`libterminfo.so` in particular)
- `yash` provides its own command line editing library `lineedit` and does not depend on `libedit` or `readline` (this means that the custom bindings under `/etc/editrc` will not affect `yash`)
- `install` target copies whatever is under `share/` to `DESTDIR` and we do not want `share/completion` as glaucus uses alternative software

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
- `pipe-fail` is disabled by default (similar to `bash`)
- glaucus builds `yash` with command history and line-editing support so it makes no sense to check if these are enabled or not
- `HISTRMDUP` can be set to remove duplicate history items but it makes prediction less accurate
- `MAILCHECK=0` does not disable mail checking and instead checks before every prompt
- `set --le-predict-empty` is counterintuitive
- `YASH_PS1P='\fi.'` dims predicted text like `fish`
- Prefer `forward-semiword` and `backward-semiword` to both their `bigword` and `emacsword` variants
- Prefer `backward-kill-semiword` to `backward-kill-bigword` to respect `/` and `-` in paths
- `semiword` stops at punctuation
- It is not possible to reset all `bindkey`s and start from a clean state, so we keep things vanilla and only bind what is needed

## Other
- Can be cross-compiled properly now removing the need for `dash` in `chroot`
- Initialization scripts are executed only if `yash` was invoked in interactive mode
- The POSIX standard deprecates combining options and arguments (`set -oerrexit`) and any POSIX-conforming applications must separate them `set -o errexit`
- When `yash` is in interactive mode the `vi` mode is automatically activated if the standard input and error are both connected to a terminal
- The POSIXly-correct mode is automatically enabled when `yash` is started as `sh`
- `set -o posixly-correct` also enables the POSIXly-correct mode
- `set -o` prints a list of shell options and their current values
- `set` accepts options in long format `set --allexport`, with `-o/+o` (`set -o allexport`) and as a single character (`set -a`)
- Not all `set` options can be specified as a single character
- Long format is case-insensitive and irrelevant non-alphanumeric characters are ignored (`--le-comp-debug` and `--LeCompDebug` are equivalent)
- If `no` is prepended to a long option, the meaning is reversed

## References
- https://diva-portal.org/smash/get/diva2:1985766/FULLTEXT01.pdf
- https://gist.github.com/mohanpedala/1e2ff5661761d3abd0385e8223e16425
- https://github.com/carpentries-incubator/shell-extras/issues/30
- https://github.com/dylanaraps/pure-bash-bible
- https://github.com/dylanaraps/pure-sh-bible
- https://github.com/koalaman/shellcheck
- https://github.com/magicant/yash/issues/48
- https://github.com/magicant/yash/pull/203
- https://github.com/mgree/smoosh
- https://github.com/shellspec/shellbench
- https://grymoire.com/Unix/Quote.html
- https://grymoire.com/Unix/Sh.html
- https://magicant.github.io/yash/doc/
- https://news.ycombinator.com/item?id=13940322
- https://pubs.opengroup.org/onlinepubs/9799919799/idx/shell.html
- https://pubs.opengroup.org/onlinepubs/9799919799/utilities/sh.html
- https://pubs.opengroup.org/onlinepubs/9799919799/utilities/V3_chap02.html
- https://reddit.com/r/bash/comments/mivbcm/the_set_o_pipefail_is_not_a_best_practice/
- https://reddit.com/r/linux/comments/9yokuc/safer_bash_scripts_with_set_euxo_pipefail_options/
- https://reddit.com/r/programming/comments/1bvinup/avoid_set_o_pipefail_in_bash/
- https://shellhaters.org/
- https://steinbaugh.com/posts/posix.html
- https://www.etalabs.net/sh_tricks.html
- https://youtube.com/watch?v=9fSkygQ-ZjI
