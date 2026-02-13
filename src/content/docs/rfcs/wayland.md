---
title: Wayland
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Android
- Waydroid: https://waydro.id/

## Bars
- chocobar: https://codeberg.org/notchoc/chocobar
- dam: https://codeberg.org/sewn/dam
- deburr: https://github.com/gitRaiku/deburr
- sfwbar: https://github.com/LBCrion/sfwbar
- yambar: https://codeberg.org/dnkl/yambar

## Brightness Control
- clight: https://github.com/FedeDP/Clight
- luminance: https://github.com/sidevesh/Luminance
- wlsunset: https://git.sr.ht/~kennylevinsen/wlsunset

## Clipboard Managers
- wlsnarf: https://codeberg.org/notchoc/wlsnarf

## Compositors
- croissant: https://codeberg.org/vyivel/croissant
- dwl: https://codeberg.org/dwl/dwl
- labwc: https://github.com/labwc/labwc (Disable librsvg)
- mango: https://github.com/DreamMaoMao/mangowc
- scroll: https://github.com/dawsers/scroll
- sway: https://github.com/swaywm/sway
- volare: https://codeberg.org/raboof/volare
- waybox: https://github.com/wizbright/waybox
- wayward: https://github.com/varmd/wayward
- woodland: https://github.com/DiogenesN/woodland

## Display Configuration
- kanshi: https://git.sr.ht/~emersion/kanshi
- way-displays: https://github.com/alex-courtis/way-displays
- wlr-randr: https://gitlab.freedesktop.org/emersion/wlr-randr

## Image Viewers
- imv: https://sr.ht/~exec64/imv/
- swayimg: https://github.com/artemsen/swayimg
- wu: https://codeberg.org/kaleido/wuimg

## Keyboard
- keyd: https://github.com/rvaiya/keyd
- showmethekey: https://github.com/AlynxZhou/showmethekey
- wvkbd: https://github.com/jjsullivan5196/wvkbd
- ydotool: https://github.com/ReimuNotMoe/ydotool

## Launchers
- basket: https://github.com/xTrayambak/basket
- bemenu: https://github.com/Cloudef/bemenu
- emenu: https://codeberg.org/fbushstone/emenu
- fuzzel: https://codeberg.org/dnkl/fuzzel
- mew: https://codeberg.org/sewn/mew
- tofi: https://github.com/philj56/tofi
- wmenu: https://codeberg.org/adnano/wmenu
- wofi: https://hg.sr.ht/~scoopta/wofi

## Login Managers
- gtkgreet: https://git.sr.ht/~kennylevinsen/gtkgreet

## Notifications
- fnott: https://codeberg.org/dnkl/fnott
- luft: https://codeberg.org/bogdan-the-great/luft
- mako: https://github.com/emersion/mako

## Overlay
- diowpanel: https://github.com/DiogenesN/diowpanel
- diowwindowlist: https://github.com/DiogenesN/diowwindowlist
- wob: https://github.com/francma/wob

## Power Management
- wlogout: https://github.com/ArtsyMacaw/wlogout
- wlopm: https://git.sr.ht/~leon_plickat/wlopm

## Remote
- waynergy: https://github.com/r-c-f/waynergy
- wayvnc: https://github.com/any1/wayvnc

## Screen Locking (Idle)
- swayidle: https://github.com/swaywm/swayidle
- swaylock: https://github.com/swaywm/swaylock
- wlock: https://codeberg.org/sewn/wlock

## Screencasts
- wl-mirror: https://github.com/Ferdi265/wl-mirror
- wlrobs: https://hg.sr.ht/~scoopta/wlrobs

## Screenshots
- dulcepan: https://codeberg.org/vyivel/dulcepan
- grim: https://git.sr.ht/~emersion/grim
- slurp: https://github.com/emersion/slurp
- swappy: https://github.com/jtheoof/swappy

## Terminal Emulator
- foot: https://codeberg.org/dnkl/foot

## Wallpaper
- mpvpaper: https://github.com/GhostNaN/mpvpaper
- swaybg: https://github.com/swaywm/swaybg
- wbg: https://codeberg.org/dnkl/wbg

## Sway
- Arch fixes screen sharing by providing `etc/sway/config.d/50-systemd-user.conf`

## Without Xorg
- A pure wayland install:
  - No `libX` under `/usr/lib`
  - `pidof Xorg` returns nothing
  - `pmap $(pidof Xorg) | grep _drv` also returns nothing
- https://forums.freebsd.org/threads/example-tutorial-pure-wayland-desktop.85930/
- https://github.com/cevdetta/waypure-pkgbuild
- https://github.com/sdsddsd1/mywayland
- https://git.sr.ht/~kqz/repo
- https://hacktivis.me/notes/pure-wayland
- https://tilde.team/~kiedtl/blog/wayland/

## Pure
- [libwayland](https://gitlab.freedesktop.org/wayland/wayland): the classic core wayland code and protocol
- [freeway](https://git.sr.ht/~shrub900/freeway): a slightly smaller, simpler libwayland implementation with less dependencies and native NetBSD kqueue support
- [nyctal](https://github.com/s-rah/nyctal): tiny wayland compositor implemented in Go
- [wld](https://github.com/michaelforney/wld): a primitive drawing library that targets wayland
- [swc](https://github.com/michaelforney/swc): a wonderful library for creating simple tiling wayland compositors, using wld
- [neuwld](https://git.sr.ht/~shrub900/neuwld): a fork of wld with proper font rendering, and more features in the works
- [neuswc](https://git.sr.ht/~shrub900/neuswc): a fork of swc with many more features and fixes implemented, including wallpapers, screenshots, and better cursor handling
- [velox](https://github.com/michaelforney/velox): a simple tiling compositor based on swc
- [hevel](https://git.sr.ht/~dlm/hevel): a scrollable, floating compositor inspired by plan9 UX paradigms, based on neuswc
- [st-wl](https://github.com/michaelforney/st): a port of the suckless terminal emulator to wayland, using wld
- [hst](https://git.sr.ht/~dlm/hst): a pre-patched and freeway-compatible version of st-wl with better font rendering using neuwld
- [havoc](https://github.com/ii8/havoc): a minimal and modern wayland terminal emulator
- [hack](https://git.sr.ht/~shrub900/hack): a native-wayland version of plan9port’s acme editor with theming support, using wld
- [swiv](https://git.sr.ht/~shrub900/swiv): tiny image viewer for wayland, using wld
- [swclock](https://git.sr.ht/~shrub900/swclock): a xclock-like analog clock program for wayland, using neuwld
- [wev](https://git.sr.ht/~sircmpwn/wev): small tool for debugging events on a wayland window

## References
- FreeBSD has a lot of wayland ports
- https://arewewaylandyet.com/
- https://en.opensuse.org/Portal:OpenSUSEway
- https://eylenburg.github.io/de_comparison.htm
- https://fedoraproject.org/spins/sway/
- https://github.com/natpen/awesome-wayland
- https://github.com/openSUSE/openSUSEway
- https://github.com/rcalixte/awesome-wayland
- https://github.com/solarkraft/awesome-wlroots
- https://wayland.freedesktop.org/building.html
- https://wayland.fyi/
- https://wiki.archlinux.org/title/XDG_Desktop_Portal
- https://wiki.gentoo.org/wiki/List_of_software_for_Wayland
