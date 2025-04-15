---
title: Bootstrap
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

Arch, Fedora and Linux From Scratch (LFS) can be used to bootstrap glaucus. It
is recommended to have a minimum of 4 GB of memory and 10 GB of storage space.

## Required Packages
- `autoconf`
- `automake`
- `bash`
- `binutils`
- `bison` (or `byacc`)
- `booster`
- `bzip2`
- `coreutils` (or `toybox`)
- `diffutils` (or `toybox`)
- `dosfstools`
- `erofs-utils`
- `findutils` (or `toybox`)
- `flex` (or `reflex`)
- `gawk` (or `mawk`)
- `gcc`
- `gettext` (or `gettext-tiny`)
- `git`
- `grep`
- `gzip` (or `pigz`)
- `libcap`
- `libtool` (or `slibtool`)
- `limine`
- `m4`
- `make`
- `patch` (or `toybox`)
- `perl`
- `pkg-config` (or `pkgconf`)
- `sed` (or `toybox`)
- `tar` (or `libarchive`)
- `wget2`
- `xz`
- `zlib` (or `zlib-ng`)
- `zstd`

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
- Create symlinks (assuming you are in `glaucus/`):
```sh
sudo mkdir -p \
  /var/cache/rad \
  /var/lib/rad/clusters
sudo ln -fs $PWD/cerata /var/lib/rad/clusters
sudo ln -fs $PWD/src /var/cache/rad
```
- Provide missing stubs (remove `texinfo`):
```sh
for i in gtkdocize help2man makeinfo po4a texi2dvi; do
  sudo cp -fPp cerata/musl/files/true /usr/bin/$i
done
```
- Install `glaucus-configure` and `glaucus-meson`:
```sh
sudo cp -fPp \
  cerata/autoconf/files/glaucus-configure \
  cerata/muon/files/glaucus-meson \
  /usr/bin
```
- Bootstrap toolchain and cross:
```sh
cd rad
./rad bootstrap toolchain
./rad bootstrap cross
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
rad bootstrap native
```
- Create native iso:
```sh
cd bubble
sudo ./iso
```
