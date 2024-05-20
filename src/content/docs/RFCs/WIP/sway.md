---
title: sway
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## sway Roadmap
- boot cross img
- build cmake (needed for json-c)
- build json-c (needed for sway)
- build libffi (needed for wayland which is needed for sway)
- build mpdecimal (needed for python)
- build python (needed for wayland to build)
- build wayland (needed for sway)
- build wayland-protocols (needed for sway)
- build libpciaccess (needed for libdrm)
- build libdrm (needed for wlroots which is needed for sway)
- build libxml2 (needed for libxkbcommon which is needed for wlroots which is needed for sway)
- build libxkbcommon (needed for wlroots)
- build libpng (needed for pixman which is needed for wlroots which is needed for sway)
- build pixman (needed for wlroots)
- [BROKEN] build egl and vulkan (needed for wlroots)?
- [BROKEN] build gbm (needed for wlroots)?
- build hwdata (needed for wlroots)
- build mtdev (needed for libinput which is needed for wlroots which is needed for sway)
- build libevdev (needed for libinput which is needed for wlroots which is needed for sway)
- build libinput (needed for wlroots)
- build basu/sd-bus (needed for seatd which is needed for wlroots)?
- build seatd (needed for wlroots)
- [BROKEN] build wlroots (needed for sway)
- build cairo (needed for sway)
- [BROKEN] build glib (needed for pango which is needed for sway)
- build harfbuzz (needed for pango which is needed for sway)
- build fontconfig (needed for pango which is needed for sway)
- build freetype (needed for fontconfig which is needed for pango which is needed for sway)
- build pango (needed for sway)

- muon is broken due to meson adding iconv as a dependency
- harfbuzz and freetype have a circular dependency (kiss is working around that)
- you need to install cairo after freetype and fontconfig to get a font backend? or else pango won't build
