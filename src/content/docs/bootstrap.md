---
title: Bootstrap
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

Both Arch and Fedora Linux can be used to bootstrap glaucus.

It is recommended to have 4 GB of memory and 16 GB of storage space to bootstrap glaucus.

## Requirements
1. autoconf (requries GNU m4, and perl to run autom4te on tests/wrapper.in)
2. automake
3. bash
4. bc ?? (mussel)
5. binutils
6. byacc (or bison)
7. bzip2 ?? (mussel)
8. coreutils (or toybox)
9. diffutils
10. elfutils ??
11. findutils
12. flex ??
13. g++
14. gawk ?? (mussel)
15. gcc
16. gdbm ??
17. gettext-tiny
18. git
19. grep
20. groff ??
21. grub
22. gzip ?? (mussel)
23. help2man (requires perl as build time dependency, requires perl-locale-gettext?) (required for libtool in cross)
24. hostname (or inetutils required by autoconf and libtool)
25. ldconfig (gcc)
26. libarchive (gcc requires tar for the make target "install-headers-tar")
27. libcap (requires bash inside progs/mkcapshdoc.sh)
28. libtool
29. m4
30. make
31. makeinfo (binutils)
32. meson/muon (required by muon to cross compile it on a glibc host) (muon does not support cross compilation)
33. patch (requires automake as build-time dependency)
34. perl / pod2man (gcc)
35. pkgconf
36. pod2man (required for manual pages)
37. procps-ng (requires autopoint from gettext-tiny and autoconf and automake for autogen.sh)
38. psmisc (requires autopoint from gettext-tiny and autoconf and automake for autogen.sh)
39. rsync
40. sed
41. texinfo
42. toybox (requires bash for scripts/genconfig.sh and tests)
43. wget2
44. xz ?? (mussel)
45. zlib-ng (or zlib) (requires bash for configure script, this can be patched easily)
46. zstd

## Time
The time required to bootstrap glaucus is measured in Build Units (BUs).

Building `binutils` takes 1 BU.

Building Stage 1 (the toolchain) takes 30-35 BUs.

Building Stage 2 (cross glaucus) takes 45-50 BUs.

Building Stage 3 (native glaucus) takes 90 BUs.
