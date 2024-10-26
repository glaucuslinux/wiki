---
title: Bootstrap
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Both Arch and Fedora Linux can be used to bootstrap glaucus.
- It is recommended to have 4 GB of memory and 10 GB of storage space to bootstrap glaucus.

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
10. dosfstools
11. elfutils ??
12. findutils
13. flex ??
14. g++
15. gawk ?? (mussel)
16. gcc
17. gdbm ??
18. gettext-tiny
19. git
20. grep
21. groff ??
22. grub
23. gzip ?? (mussel)
24. help2man (requires perl as build time dependency, requires perl-locale-gettext?) (required for libtool in cross)
25. hostname (or inetutils required by autoconf and libtool)
26. ldconfig (gcc)
27. libarchive (gcc requires tar for the make target "install-headers-tar")
28. libcap (requires bash inside progs/mkcapshdoc.sh)
29. libtool
30. m4
31. make
32. makeinfo (binutils)
33. meson/muon (required by muon to cross compile it on a glibc host) (muon does not support cross compilation)
34. patch (requires automake as build-time dependency)
35. perl / pod2man (gcc)
36. pkgconf
37. pod2man (required for manual pages)
38. procps-ng (requires autopoint from gettext-tiny and autoconf and automake for autogen.sh)
39. psmisc (requires autopoint from gettext-tiny and autoconf and automake for autogen.sh)
40. rsync
41. sed
42. texinfo
43. toybox (requires bash for scripts/genconfig.sh and tests)
44. wget2
45. xz ?? (mussel)
46. zlib-ng (or zlib) (requires bash for configure script, this can be patched easily)
47. zstd
