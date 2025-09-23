---
title: Bootstrap
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Disclaimer
- As a regular user, **you are not expected to bootstrap glaucus** from scratch
- This process is only intended for developers who are interested in building stages 0 through 3 on their systems
- It is important to understand that this process might not always work as your host system and glaucus are moving targets that are hard to pin and while it is likely to work now, it is due to the developers spending most of their time bootstrapping as we have not decided yet on what release to use a seed for future processes; what you mostly use from other distributions is at least stage 2 (see the explanation of stages below) as you are not expected to bootstrap from absolutely nothing and it is highly likely that it's been ages since anyone attempted to bootstrap a mainstream distribution (even gentoo starts you from stage 2 or 3 as they call it)

## Introduction
- To bootstrap `glaucus` is to generate a self-hosting image file capable of rebuilding itself under itself from nothing (or from a minimal seed that may or may not share software with the host system)
- `rad` (glaucus package manager) is the tool used to bootstrap glaucus; some distributions separate the bootstrap logic from the building logic from the package management logic which is understandable, but for the sake of simplicity, `rad` is responsible for all of this on `glaucus`
- The bootstrap process is divided into 4 stages:
  - **Toolchain Stage**: aka stage 0, in this stage `glaucus` leverages existing tools on the host system to build a cross-compilation toolchain that will build the next stage; **This stage is not optimized** as we want to reach the following stage as soon as possible while keeping things sane and reproducible; **This stage runs on the host machine** and typically should not take more than 15 minutes to complete on a relatively modern system
  - **Cross Stage**: aka stage 1, in this stage `glaucus` uses the toolchain built in stage 0 to cross-compile the core packages needed to build a basic self-hosting `glaucus` system; **This stage is optimized for `x86-64-v3`** as it is independant from the host system; **This stage runs on the host machine** and should typically not take more than 25 minutes to complete on a relatively modern system
  - **Native Stage**: aka stage 2, after a successful build of stage 1, an `img` file that is bootable under QEMU can be generated using the `img` script found in glaucus live system `bubble`, in this stage `glaucus` is truly on its own, it will attempt to rebuild itself under itself performing a fully offline build (as the `img` script would have copied the necessary sources needed to perform such build); **This stage is optimized for x86-64-v3** and is **not run on the host machine but instead under QEMU**, the basic packages and some other useful packages are natively build here; and should typically not take more than 45 minutes to complete on a relatively modern system
  - **Real Native Stage**: aka stage 3 (or stage 4 as some distributions that use a 1-based index call it), this stage doesn't have a full name yet, in this stage you leverage a stage 2 `rootfs` or `iso` file to perform a native rebuild of the glaucus system upon installation (think gentoo); **This stage is optimized for `native` and will only run on your machine**, it has not been implemented yet as it is closely tied to the install process which is not yet ready, also the previous 3 stages are enough to validate the sanity of the entire process and its artefacts

## Host System Requirements
- Arch, Fedora and Linux From Scratch (LFS) can be used to bootstrap glaucus
- It is recommended to have a minimum of 4 GB of memory and 10 GB of storage space
### Required Packages (will be automatically checked)
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
- `meson` (not `muon` as it does not support `--cross-file`)
- `ninja` (or `samurai`)
- `patch` (or `toybox`)
- `perl`
- `pkg-config` (or `pkgconf`) (not `u-config` as it does not support `PKG_CONFIG_SYSROOT_DIR`)
- `sed` (or `toybox`)
- `tar` (or `libarchive`)
- `xz`
- `zlib` (or `zlib-ng`)
- `zstd`

## Steps
- Clone the `glaucus` repository:
```sh
git clone --recurse-submodules https://github.com/glaucuslinux/glaucus
git -C glaucus submodule foreach 'git checkout main'
```
- Create symlinks **on your host system**:
```sh
cd glaucus

sudo mkdir -p \
  /var/cache/rad \
  /var/lib/rad/repo

sudo ln -fs $PWD/core /var/lib/rad/repo
sudo ln -fs $PWD/log /var/log/rad
sudo ln -fs $PWD/src /var/cache/rad
```
- Provide missing stubs **in case your host system does not provide them** (remove `texinfo`):
```sh
for i in a2x asciidoc gtkdocize help2man makeinfo po4a texi2dvi; do
  sudo cp -fPp core/musl/files/true /usr/bin/$i
done
```
- Bootstrap toolchain and cross:
```sh
cd rad

curl -fL -o rad -s https://github.com/glaucuslinux/rad/releases/latest/download/rad-x86-64-v3-pc-linux-gnu
curl -fLOs https://github.com/glaucuslinux/rad/releases/latest/download/rad-x86-64-v3-glaucus-linux-musl

chmod 755 rad

./rad bootstrap toolchain # stage 0
./rad bootstrap cross # stage 1, if it fails for whatever reason start again from stage 0
```
- Create the cross `img`:
```sh
cd ../bubble
sudo ./img # You can specify the img name as an argument
```
- Copy `rad` to the cross `img`:
```sh
sudo ./mount # You can specify the img name as an argument
sudo ./umount # You can specify the img name as an argument
```
- Bootstrap native **under QEMU**:
```sh
./qemu-img # You can specify the img name as an argument

rad bootstrap native # stage 2

poweroff
```
- Create the native iso:
```sh
sudo ./iso # You can specify the iso name as an argument
```
