---
title: Bootstrap
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Disclaimer
- **You are encouraged to bootstrap glaucus** from stage 0 at least once
- You are not expected to start from stage 0 every time; most distributions start from stage 2
- **This may not always work** as glaucus is a moving target
- It is not recommended to bootstrap glaucus on a live environment if starting from stage 1

## Introduction
- To truly bootstrap a distribution is to generate a self-hosting image file capable of rebuilding itself under itself **from nothing**
- Relying on an available host system does not count as a true full bootstrap as it starts from stage 1

## Stages
- **Stage 0 (Nothing)**: starts from absolutely nothing and does not rely on an available host system (not supported yet)
- **Stage 1 (Toolchain)**:
  - Leverages tools from stage 0 or the host system to build a cross-compilation toolchain that will build stage 2
  - **This stage is not optimized** as it needs to be correct, fast and reproducible
  - **This stage is built on the host machine** and should typically not take more than 15 minutes to complete on a relatively modern system
- **Stage 2 (Cross)**:
  - Leverages tools from stage 1 to cross-compile the packages required to self-host glaucus
  - **This stage is optimized for `x86-64-v3`** and is independant from the host system
  - **This stage is built on the host machine** and should typically not take more than 25 minutes to complete on a relatively modern system
  - An image file is generated after a successful build
- **Stage 3 (Native)**:
  - **This stage is fully offline**
  - **This stage is optimized for x86-64-v3** and is independant from the host system
  - **This stage is built under QEMU** and should typically not take more than 45 minutes to complete on a relatively modern system
- **Stage 4 (Real)**:
  - Leverages a stage 3 `rootfs` or `iso` file to perform a native rebuild of the glaucus system upon installation (think gentoo); **This stage is optimized for `native` and will only run on your machine**, it has not been implemented yet as it is closely tied to the install process which is not yet ready, also the previous 3 stages are enough to validate the sanity of the entire process and its artefacts

## Host System Requirements
- Arch, Fedora and Linux From Scratch (LFS) can be used to bootstrap glaucus
- It is recommended to have a minimum of 4 GB of memory and 10 GB of storage space
- It is required to have an `x86-64-v3` system

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
- Clone the `glaucus` repository:
```sh
git clone --recurse-submodules https://github.com/glaucuslinux/glaucus
git -C glaucus submodule foreach 'git checkout main'
```
- Bootstrap stages 1 and 2 (toolchain and cross):
```sh
cd glaucus

sudo ./bootstrap
```
- Bootstrap stage 3 (native) **under QEMU**:
```sh
./qemu-img

rad bootstrap 3

poweroff
```
- Create a stage 3 (native) iso:
```sh
sudo ./iso
```
