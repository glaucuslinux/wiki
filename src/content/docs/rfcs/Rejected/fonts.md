---
title: Fonts
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `setfont` from `kbd` is used to set console fonts (`psf` or `psfu`)
- `spleen` has better punctuation marks, symbols and brackets/braces compared to `terminus`
- PC Screen Font (PSF) is a bitmap font format currently employed by the Linux kernel for console fonts
- A `console-setup`/`vconsole` service should check `/etc/default/console-setup` and `/etc/vconsole.conf`

## Best Fonts
- Spleen (`spleen-8x16`): https://www.cambus.net/spleen-monospaced-bitmap-fonts/
- Terminus: https://terminus-font.sourceforge.net/
- Fira Code Mono (no `psf`): https://github.com/mozilla/Fira/issues/216
- JetBrains Mono (no `psf`)
- Iosevka (huge, uses javascript)
- cool old fonts (no `psf`): https://int10h.org/oldschool-pc-fonts/

## References
- https://en.wikipedia.org/wiki/List_of_monospaced_typefaces
- https://www.linuxfromscratch.org/blfs/view/svn/postlfs/console-fonts.html
- https://wiki.archlinux.org/title/Linux_console
- https://www.linuxfromscratch.org/blfs/view/svn/postlfs/console-fonts.html
- https://www.linuxfromscratch.org/lfs/view/development/chapter09/usage.html
