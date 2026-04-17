---
title: pdcurses
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Replaces `netbsd-curses`
- Original `pdcurses` does not fully replace `netbsd-curses`
  - No support for `vt` environments (e.g terminal use)
- `pdcursesmod` covers most of `netbsd-curses` symbols
- To build `pdcursesmod`:
  - `cd` to `vt` and build with `make DLL=Y`
  - copy header files from parent directory as well
  - provide missing symlinks upon installation
- Attempting to bootstrap glaucus with `pdcursesmod` worked but:
  - `yash` prompt no longer shows colors
  - `yash` tab completion no longer works
  - unable to `clear` the terminal
- There are a lot of caveats and it is generally discouraged

## References
- https://github.com/jwinarske/PDCurses
- https://github.com/Bill-Gray/PDCursesMod
- https://github.com/Bill-Gray/PDCursesMod/blob/master/vt/README.md#caveats
