---
title: Wayland
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

Resources:
- https://wayland.freedesktop.org/building.html
- https://arewewaylandyet.com/
- https://github.com/natpen/awesome-wayland
- https://github.com/solarkraft/awesome-wlroots
- https://github.com/oofdog/awesome-wayland
- https://wiki.gentoo.org/wiki/List_of_software_for_Wayland

- FreeBSD has a lot of wayland ports

Without Xorg:
- https://github.com/sdsddsd1/mywayland
- https://www.linuxquestions.org/questions/linux-from-scratch-13/wayland-w-xwayland-sans-x11-anyone-interested-4175595302/
- https://lists.freedesktop.org/archives/wayland-devel/2017-December/036143.html
- https://github.com/swaywm/sway/issues/676
- https://fedoraproject.org/wiki/Changes/LegacyXorgDriverRemoval
- https://fedoraproject.org/wiki/Changes/ReplaceFbdevDrivers

Compositors:
- hyprland
- labwc
- sway
- weston

Android:
- Waydroid: https://waydro.id/

Clipboard:
- wayclip: https://sr.ht/~noocsharp/wayclip/
- wl-clipboard: https://github.com/bugaevc/wl-clipboard

Bars:
- sfwbar: https://github.com/LBCrion/sfwbar
- Waybar: https://github.com/Alexays/Waybar

Displays:
- kanshi: https://sr.ht/~emersion/kanshi/
- wdisplays: https://github.com/cyclopsian/wdisplays
- wlay: https://github.com/atx/wlay
- wlr-randr: https://sr.ht/~emersion/wlr-randr/

Distros:
- Fedora: https://fedoraproject.org/spins/sway/
- OpenSUSEway: https://en.opensuse.org/Portal:OpenSUSEway

File Manager:
- Nemo
- Thunar

Font:
- JetBrains Nerd Font Mono

Image Viewer:
- imv: https://sr.ht/~exec64/imv/
- swayimg: https://github.com/artemsen/swayimg

Keyboard Input:
- hawck: https://github.com/snyball/hawck
- keyd: https://github.com/rvaiya/keyd
- showmethekey: https://github.com/AlynxZhou/showmethekey
- wev: https://git.sr.ht/~sircmpwn/wev
- wshowkeys: https://sr.ht/~sircmpwn/wshowkeys/
- wtype: https://github.com/atx/wtype
- wvkbd: https://github.com/jjsullivan5196/wvkbd
- ydotool: https://github.com/ReimuNotMoe/ydotool

Launchers:
- albert: https://github.com/albertlauncher/albert
- bemenu: https://github.com/Cloudef/bemenu
- fuzzel: https://codeberg.org/dnkl/fuzzel
- LavaLauncher: https://sr.ht/~leon_plickat/LavaLauncher/
- rootbar: https://hg.sr.ht/~scoopta/rootbar
- tofi: https://github.com/philj56/tofi
- wofi: https://sr.ht/~scoopta/wofi/
- wmenu: https://git.sr.ht/~adnano/wmenu

Login Manager:
- greetd: https://sr.ht/~kennylevinsen/greetd/
- Ly: https://github.com/fairyglade/ly

Notifications:
- fnott: https://codeberg.org/dnkl/fnott
- mako: https://github.com/emersion/mako

Other:
- WayWard: https://github.com/varmd/wayward

Overlay:
- wob: https://github.com/francma/wob

Power:
- [DEAD] wlogout: https://github.com/ArtsyMacaw/wlogout
- wlopm: https://sr.ht/~leon_plickat/wlopm/

Remote:
- NoMachine: https://www.nomachine.com/
- waynergy: https://github.com/r-c-f/waynergy
- wayvnc: https://github.com/any1/wayvnc

Screen Locking (Idle):
- swayidle: https://github.com/swaywm/swayidle
- swaylock: https://github.com/swaywm/swaylock
- swaylock-effects: https://github.com/mortie/swaylock-effects

Screen Recorder:
- SimpleScreenRecorder: https://github.com/MaartenBaert/ssr
- wf-recorder: https://github.com/ammen99/wf-recorder
- wlrobs: https://hg.sr.ht/~scoopta/wlrobs

Screen Sharing:
- xdg-desktop-portal-wlr: https://github.com/emersion/xdg-desktop-portal-wlr

Screenshots:
- grim: https://sr.ht/~emersion/grim/
- slurp: https://github.com/emersion/slurp

Temperature:
- Gammastep: https://gitlab.com/chinstrap/gammastep
- Luminance: https://github.com/sidevesh/Luminance
- wlsunset: https://sr.ht/~kennylevinsen/wlsunset/

Terminal Emulator:
- foot: https://codeberg.org/dnkl/foot

Video Player:
- mpv: https://mpv.io/

Wallpaper:
- mpvpaper: https://github.com/GhostNaN/mpvpaper
- swaybg: https://github.com/swaywm/swaybg
- wbg: https://codeberg.org/dnkl/wbg

Web Browser:
- FireFox: https://www.phoronix.com/news/Firefox-116-Allow-Wayland-Only

The following require LLVM/Clang:
- v4l
- librsvg
- mesa software renderer
- swiftshader

- stuff using libllvm: https://archlinux.org/packages/extra/x86_64/llvm-libs/
- stuff using clang: https://archlinux.org/packages/extra/x86_64/clang/
- stuff using llvm: https://archlinux.org/packages/extra/x86_64/llvm/

## Sway
- To get screen share working
  - check this file from arch `etc/sway/config.d/50-systemd-user.conf`
  - https://wiki.archlinux.org/title/XDG_Desktop_Portal
