---
title: Bootstrap
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

Arch, Fedora and Linux From Scratch (LFS) can be used to bootstrap glaucus. It
is recommended to have a minimum of 4 GB of memory and 10 GB of storage space.

## Required Packages
1. `autoconf`
2. `automake`
3. `bash`
4. `bc`
5. `binutils`
6. `bison` (or `byacc`)
7. `bzip2`
8. `coreutils` (or `toybox`)
9. `diffutils` (or `toybox`)
10. `dosfstools`
11. `erofs-utils`
12. `findutils` (or `toybox`)
13. `flex` (or `reflex`)
14. `gawk` (or `mawk`)
15. `gcc`
16. `gettext` (or `gettext-tiny`)
17. `git`
18. `grep` (or `toybox`)
19. `gzip` (or `pigz`)
20. `libcap`
21. `libtool` (or `slibtool`)
22. `m4`
23. `make`
24. `patch` (or `toybox`)
25. `perl`
26. `pkg-config` (or `pkgconf`)
27. `sed` (or `toybox`)
28. `tar` (or `libarchive`)
29. `xz`
30. `zlib` (or `zlib-ng`)
31. `zstd`

## Steps
```sh
git clone --

cd rad
./rad -bt
./rad -bx

cd bubble
sudo ./img
qemu-img glaucus.img
rad -bn
```
