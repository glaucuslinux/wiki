---
title: Prelink
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- After Spectre/Meltdown, it's probably a bad idea to use Prelink at all as it makes memory mapping attacks easier.
- PIE interferes with prelink

## Resources
- http://www.linuxfromscratch.org/hints/downloads/files/prelink.txt
- http://www.linuxfromscratch.org/hints/downloads/files/OLD/prelink.txt
- https://wiki.gentoo.org/wiki/Prelink
- https://forums.gentoo.org/viewtopic-t-1074192-start-0.html

Apparently there's something new called prelink-cross:
- https://wiki.yoctoproject.org/wiki/Cross-Prelink
- https://www.yoctoproject.org/software-item/cross-prelink/
- https://github.com/sjnewbury/prelink-cross/blob/master/README
- https://voidlinux.org/news/2019/02/cross-gobject.html

- cross-prelink can be used to cross compile gobject packages like GNOME, which we won't need since we will be building everything as native from within glaucus
