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
- Clone repository:
```sh
git clone --recursive https://github.com/glaucuslinux/glaucus
cd glaucus
```
- Checkout main branch:
```sh
for i in bubble cerata rad s6-boot-scripts; do
  cd $i
  git checkout main
  cd ..
done
```
- Create symlinks:
```sh
sudo mkdir -pv \
  /var/cache/rad \
  /var/lib/rad/clusters
sudo ln -fnsv cerata /var/lib/rad/clusters/cerata
sudo ln -fnsv src /var/cache/rad/src
```
- Provide missing stubs (remove `texinfo`):
```sh
for i in gtkdocize help2man makeinfo po4a texi2dvi; do
  sudo cp -af cerata/musl/true /usr/bin/$i
done
```
- Install `glaucus-configure`:
```sh
sudo cp -af cerata/autoconf/glaucus-configure /usr/bin
```
- Bootstrap toolchain and cross:
```sh
cd rad
./rad -bt
./rad -bx
```
- Create cross img:
```sh
cd bubble
sudo ./img
```
- Boot via QEMU:
```sh
qemu-system-x86_64 \
  -machine q35,accel=kvm \
  -cpu host \
  -smp 4 \
  -m 4G \
  -name glaucus \
  -drive file=glaucus-*.img,format=raw \
  -nic model=e1000 \
  -display gtk,gl=on \
  -vga qxl \
  -rtc base=localtime \
  -bios /usr/share/ovmf/x64/OVMF.4m.fd
```
- Bootstrap native:
```sh
rad -bn
```
