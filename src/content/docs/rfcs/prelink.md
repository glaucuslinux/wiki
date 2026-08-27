---
title: Prelink
description: An opinionated Linux® distribution based on musl libc and toybox
---

- After Spectre/Meltdown, it's probably a bad idea to prelink as it makes memory mapping attacks easier.
- PIE interferes with prelink

## References
- https://forums.gentoo.org/viewtopic-t-1074192-start-0.html
- https://linuxfromscratch.org/hints/downloads/files/OLD/prelink.txt
- https://linuxfromscratch.org/hints/downloads/files/prelink.txt
- https://wiki.gentoo.org/wiki/Prelink

Apparently there's something new called prelink-cross:
- https://github.com/sjnewbury/prelink-cross/blob/master/README
- https://voidlinux.org/news/2019/02/cross-gobject.html
- https://wiki.yoctoproject.org/wiki/Cross-Prelink

- cross-prelink can be used to cross compile gobject packages like GNOME, which will not be an issue on glaucus
