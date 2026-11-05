---
title: sway
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Prepare
- Check if `swaybg` and `swaybar` require `gdk-pixbuf`
### Package
- Check if we should provide our own `portals.conf`

## Configure
- `-Db_ndebug` set to `false` by default

## Roadmap
- boot cross img
- build `cmake` (-> `json-c`)
- build `json-c` (-> `sway`)
- build `libffi` (-> `wayland` -> `sway`)
- build `mpdecimal` (-> `python`)
- build `python` (-> `wayland`)
- build `wayland` (-> `sway`)
- build `wayland-protocols` (-> `sway`)
- build `libpciaccess` (-> `libdrm`)
- build `libdrm` (-> `wlroots` -> `sway`)
- build `libxml2` (-> `libxkbcommon` -> `wlroots` -> `sway`)
- build `libxkbcommon` (-> `wlroots`)
- build `libpng` (-> `pixman` -> `wlroots` -> `sway`)
- build `pixman` (-> `wlroots`)
- [BROKEN] build `mesa` (-> `wlroots`)?
- build `hwdata` (-> `wlroots`)
- build `mtdev` (-> `libinput` -> `wlroots` -> `sway`)
- build `libevdev` (-> `libinput` -> `wlroots` -> `sway`)
- build `libinput` (-> `wlroots`)
- build `basu`/`sd-bus` (-> `seatd` -> `wlroots`)?
- build `seatd` (-> `wlroots`)
- [BROKEN] build `wlroots` (-> `sway`)
- build `cairo` (-> `sway`)
- build `glib` (-> `pango` -> `sway`)
- build `harfbuzz` (-> `pango` -> `sway`)
- build `fontconfig` (-> `pango` -> `sway`)
- build `freetype` (-> `fontconfig` -> `pango` -> `sway`)
- build `pango` (-> `sway`)
- build `cairo`
- [BROKEN] build `sway`

## References
- https://gitweb.gentoo.org/repo/gentoo.git/tree/gui-wm/sway/files/sway-portals.conf
