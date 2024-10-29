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
17. help2man (requires perl as build time dependency, requires perl-locale-gettext?) (required for libtool in cross)
18. hostname (or inetutils required by autoconf and libtool)
19. ldconfig (gcc)
20. libarchive (gcc requires tar for the make target "install-headers-tar")
21. libcap (requires bash inside progs/mkcapshdoc.sh)
22. m4
23. make
24. mawk (or gawk)
25. meson/muon (required by muon to cross compile it on a glibc host) (muon does not support cross compilation)
26. patch (or toybox)
27. perl / pod2man (gcc)
28. pkgconf
29. reflex (or flex)
30. sed (or toybox)
31. slibtool (or libtool)
32. toybox (requires bash for scripts/genconfig.sh and tests)
33. wget2
34. xz
35. zlib-ng (or zlib) (requires bash for configure script, this can be patched easily)
36. zstd
