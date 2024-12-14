---
title: Fonts
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Spleen is a bitmap font, and bitmap fonts (like terminus) aren't preferred
- Console font is spleen-8x16
- Spleen has better punctuation marks, symbols and brackets/braces compared to terminus

- https://en.wikipedia.org/wiki/List_of_monospaced_typefaces
- https://www.linuxfromscratch.org/blfs/view/svn/postlfs/console-fonts.html
- kbd (setfont) is used to set console fonts

- PC Screen Font (PSF) is a bitmap font format currently employed by the Linux kernel for console fonts.
- A console-setup/vconsole service should check `/etc/default/console-setup` and `/etc/vconsole.conf`

- To change console fonts use setfont from kbd, the font must be in psf or psfu:
  - https://wiki.archlinux.org/title/Linux_console
  - https://www.linuxfromscratch.org/blfs/view/svn/postlfs/console-fonts.html
  - https://www.linuxfromscratch.org/lfs/view/development/chapter09/usage.html

## Best terminal fonts
- Terminus (https://terminus-font.sourceforge.net/)
- [YES] Spleen (https://www.cambus.net/spleen-monospaced-bitmap-fonts/)
- Fira Code Mono (no psf available) (https://github.com/mozilla/Fira/issues/216)
- Iosevka (huge and uses javascript, so don't use it)
- JetBrains Mono (no psf available)

- cool old fonts, but no psf variant:
  - https://int10h.org/oldschool-pc-fonts/fontlist/?2
  - https://int10h.org/oldschool-pc-fonts/download/
