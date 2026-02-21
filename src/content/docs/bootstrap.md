---
title: Bootstrap
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Disclaimer
- It is recommended that you bootstrap glaucus at least once
- This may not always work as glaucus is a moving target
- You are not expected to start from stage 0 every time

## Introduction
- To truly bootstrap a distribution is to generate a self-hosting image file capable of rebuilding itself under itself from nothing
- Relying on an existing host does not count as a true full bootstrap as it starts from stage 1

## Stages
### Stage 0 (Nothing)
- This stage is optional
- Starts from nothing
- Does not rely on an existing host
- Not supported yet

### Stage 1 (Toolchain)
- Leverages tools from the host or stage 0 to build a cross-compilation toolchain that will build stage 2
- This stage is not optimized as it needs to be correct, fast and reproducible
- This stage is built on the host in under 15 minutes on a relatively modern system

### Stage 2 (Cross)
- Uses stage 1 toolchain to cross-compile the packages required to self-host glaucus
- This stage is optimized for `x86-64-v3` (an early sanity check)
- This stage is built on the host system in under 25 minutes on a relatively modern system
- An image file `.img` is generated after a successful build

### Stage 3 (Native)
- Uses stage 2 image file to perform a native rebuild of glaucus
- This stage is fully offline
- This stage is optimized for `x86-64-v3`
- This stage is built under QEMU in under 45 minutes on a relatively modern system
- An image file `.iso` is generated after a successful build

### Stage 4 (Real)
- This stage is optional
- Uses stage 3 image file to perform a native rebuild of glaucus after install
- This stage is optimized for `native` and will only run on your machine
- Not supported yet

## Host System Requirements
- A relatively modern `x86-64-v3` system with a minimum of 4 GB of memory and 10 GB of storage space
- Arch and Linux From Scratch (LFS) can be used to bootstrap glaucus
- It is not recommended to bootstrap glaucus in a live environment

### Required Packages (Automatically Checked)
- `autoconf`
- `automake`
- `bash`
- `binutils`
- `bison` (or `byacc`)
- `booster`
- `bzip2`
- `coreutils` (or `toybox`)
- `curl`
- `diffutils` (or `toybox`)
- `dosfstools`
- `erofs-utils`
- `findutils` (or `toybox`)
- `flex`
- `gawk` (or `mawk`)
- `gcc`
- `gettext` (or `gettext-tiny`)
- `git`
- `gperf`
- `grep`
- `gzip` (or `pigz`)
- `libcap`
- `libtool` (or `slibtool`)
- `limine`
- `m4`
- `make`
- `meson` (or `muon`)
- `ninja` (or `samurai`)
- `patch` (or `toybox`)
- `perl`
- `pkg-config` (or `pkgconf`) (not `u-config` as it does not support `PKG_CONFIG_SYSROOT_DIR`)
- `sed` (or `toybox`)
- `tar` (or `libarchive`)
- `xz`
- `zlib` (or `zlib-ng`)
- `zstd`

### Required Paths (Automatically Created)
- `/var/cache/rad`
- `/var/lib/rad`
- `/var/log/rad`
- `/var/tmp/rad`

### Required Stubs (Automatically Provided)
- `a2x`
- `asciidoc`
- `gtkdocize`
- `help2man`
- `ldconfig`
- `makeinfo`
- `po4a`
- `texi2dvi`
- `texi2pdf`
- `yodl2man`

## Steps
### Clone the `glaucus` Repository
```sh
git clone --recurse-submodules https://github.com/glaucuslinux/glaucus
git -C glaucus submodule foreach 'git checkout main'
```
### Bootstrap Stages 1 and 2 (Toolchain and Cross)
```sh
cd glaucus/live

sudo ./bootstrap
```
### Bootstrap Stage 3 (Native)
```sh
./qemu-img

rad bootstrap 3 # Under QEMU

poweroff # Under QEMU

sudo ./iso
```
