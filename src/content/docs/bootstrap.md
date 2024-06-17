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
4. bc?? (mussel)
5. binutils
6. byacc (or bison)
7. bzip2?? (mussel)
8. coreutils (or toybox)
9. diffutils
10. findutils
11. g++
12. gawk?? (mussel)
13. gcc
14. git
15. grep
16. grub
17. gzip?? (mussel)
18. help2man (requires perl as build time dependency, requires perl-locale-gettext?) (required for libtool in cross)
19. hostname (or inetutils required by autoconf and libtool)
20. ldconfig (gcc)
21. libarchive (gcc requires tar for the make target "install-headers-tar")
22. libcap (requires bash inside progs/mkcapshdoc.sh)
23. m4
24. make
25. makeinfo (binutils)
26. meson/muon (required by muon to cross compile it on a glibc host) (muon does not support cross compilation)
27. patch (requires automake as build-time dependency)
28. perl / pod2man (gcc)
29. pod2man (required for manual pages)
30. procps-ng (requires autopoint from gettext-tiny and autoconf and automake for autogen.sh)
31. psmisc (requires autopoint from gettext-tiny and autoconf and automake for autogen.sh)
32. rsync
33. sed
34. texinfo
35. toybox (requires bash for scripts/genconfig.sh and tests)
36. wget2
37. xz?? (mussel)
38. zlib-ng (or zlib) (requires bash for configure script, this can be patched easily)
39. zstd

## Time
The time required to bootstrap glaucus is measured in Build Units (BUs).

Building `binutils` takes 1 Build Unit, which is approximately 1 minute on my machine.

Building Stage 1 (the toolchain) takes 30 BUs.

Building Stage 2 (cross glaucus) takes 45 BUs.

Building Stage 3 (native glaucus) takes 90 BUs.
