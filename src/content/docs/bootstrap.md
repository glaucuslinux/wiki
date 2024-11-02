---
title: Bootstrap
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Both Arch and Fedora Linux can be used to bootstrap glaucus.
- It is recommended to have a minimum of 4 GB of memory and 10 GB of storage space to bootstrap glaucus.

## Required Packages
1. autoconf (requries GNU m4, and perl to run autom4te on tests/wrapper.in)
2. automake
3. bash
4. bc (or toybox)
5. binutils
6. byacc (or bison)
7. bzip2
8. coreutils (or toybox)
9. diffutils (or toybox)
10. dosfstools
11. findutils (or toybox)
12. gcc
13. gettext-tiny
14. git
15. grep (or toybox)
16. gzip
17. ldconfig (gcc)
18. libarchive (gcc requires tar for the make target "install-headers-tar")
19. libcap (requires bash inside progs/mkcapshdoc.sh)
20. m4
21. make
22. mawk (or gawk)
23. muon (or meson, required by muon to cross compile it on a glibc host) (muon does not support cross compilation)
24. patch (or toybox)
25. perl
26. pkgconf
27. reflex (or flex)
28. sed (or toybox)
29. slibtool (or libtool)
30. toybox (requires bash for scripts/genconfig.sh and tests)
31. wget2
32. xz
33. zlib-ng (or zlib) (requires bash for configure script, this can be patched easily)
34. zstd
