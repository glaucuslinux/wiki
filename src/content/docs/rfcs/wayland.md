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

## Brightness Control
- brightnessctl: https://github.com/Hummer12007/brightnessctl
- clight: https://github.com/FedeDP/Clight
- luminance: https://github.com/sidevesh/Luminance
- wlsunset: https://git.sr.ht/~kennylevinsen/wlsunset

## Clipboard Managers
- wlsnarf: https://codeberg.org/notchoc/wlsnarf

## Compositors
- croissant: https://codeberg.org/vyivel/croissant
- doors: https://dawn.wine/CreeperFace/doors
- dwl: https://codeberg.org/dwl/dwl
- labwc: https://github.com/labwc/labwc (Disable librsvg)
- mango: https://github.com/mangowm/mango
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
- bemenu: https://github.com/Cloudef/bemenu
- emenu: https://codeberg.org/fbushstone/emenu
- fuzzel: https://codeberg.org/dnkl/fuzzel
- mew: https://codeberg.org/sewn/mew
- tofi: https://github.com/philj56/tofi
- wmenu: https://codeberg.org/adnano/wmenu
- wofi: https://hg.sr.ht/~scoopta/wofi

## Login Managers
- gtkgreet: https://git.sr.ht/~kennylevinsen/gtkgreet
  - Depends on `greetd` which depends on `rust` and `pam`

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
  - does not build with `netbsd-curses`'s `tic`; missing `-e`

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

## Suckless
- bswc: https://codeberg.org/binkd/bswc
- freeway: https://git.sr.ht/~shrub900/freeway
- hack: https://git.sr.ht/~shrub900/hack
- havoc: https://github.com/ii8/havoc
- hevel: https://git.sr.ht/~dlm/hevel
- howl: https://git.sr.ht/~wf/howl
- hst: https://git.sr.ht/~dlm/hst
- libwayland: https://gitlab.freedesktop.org/wayland/wayland
- neuipc: https://codeberg.org/binkd/neuipc
- neuswc: https://git.sr.ht/~shrub900/neuswc
- neuwld: https://git.sr.ht/~shrub900/neuwld
- st-wl: https://github.com/michaelforney/st
- swc: https://github.com/michaelforney/swc
- swclock: https://git.sr.ht/~shrub900/swclock
- swiv: https://git.sr.ht/~shrub900/swiv
- velox: https://github.com/michaelforney/velox
- wev: https://git.sr.ht/~sircmpwn/wev
- wld: https://github.com/michaelforney/wld
- wsxwm: https://git.sr.ht/~uint/wsxwm

## Other
- https://github.com/stumpwm/mahogany
- https://github.com/project-repo/cagebreak
- https://github.com/Hjdskes/cage

## References
- FreeBSD has a lot of wayland ports
- https://arewewaylandyet.com/
- https://en.opensuse.org/Portal:OpenSUSEway
- https://eylenburg.github.io/de_comparison.htm
- https://fedoraproject.org/spins/sway/
- https://github.com/natpen/awesome-wayland
- https://github.com/openSUSE/openSUSEway
- https://github.com/orahcio/void-packages
- https://github.com/rcalixte/awesome-wayland
- https://github.com/solarkraft/awesome-wlroots
- https://intestinate.com/pilfs/beyond.html#wayland
- https://wayland.freedesktop.org/building.html
- https://wayland.fyi/
- https://wiki.archlinux.org/title/XDG_Desktop_Portal
- https://wiki.gentoo.org/wiki/List_of_software_for_Wayland
