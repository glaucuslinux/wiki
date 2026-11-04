---
title: kbd
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Prepare
- Check if it builds with `byacc` and that `bison` is not a hard dependency (like `flex`)

## Prepare
- Depends on `flex`; does not support `reflex`

## Configure
- Code coverage support is disabled by default
- `werror` is disabled by default
- Optional programs are disabled by default
- `libkeymap` and `libkfont` are disabled by default
- Explicitly disable `memcheck` as `configure` still sets it to `auto` even when `tests` are disabled
- `openvt` runs interactive shells on virtual terminals
- `vlock` is enabled by default and it requires `pam` and disabling it removes `/usr/etc`
- `configure` does not respect `--without-bzip2` so we explicitly set `ac_cv_lib_bz2_BZ2_bzDecompressInit=no` and without it:
```
- with dlopen libbz2:   yes
...
BZIP2_LIBS='-lbz2'
...
USE_BZIP2_FALSE='#'
USE_BZIP2_TRUE=''
...
#define HAVE_BZIP2 1
```
- `resizecons` gets built and installed even with `RESIZECONS_PROGS=no`
- Prefer default `datarootdir` and `datadir` (which is `/usr/share`) to `/usr/share/kbd`

## Package
- Do not create a `/usr/bin/open -> openvt` symlink as `open` is ambiguous nowadays
- Remove `loadunimap` and `mapscrn` as they are obsolete and their functionality is now part of `setfont` 
- Remove `getkeycodes` and rely on `showkey` and `evdev` instead
- Remove `psf*` as fonts are already pre-built (no need to modify font tables at runtime)
- Remove `resizecons`
- Keep `unicode_start` and `unicode_stop` as they are small wrappers around `kbd_mode` and `setfont` 

## Other
- Alpine's initramfs uses `busybox`'s `loadkmap` which only parses binary keymaps `.bmap`
- `deallocvt` may be needed for cleaning up after a graphical session
- `bkeymaps` is an older version of `kbd`
