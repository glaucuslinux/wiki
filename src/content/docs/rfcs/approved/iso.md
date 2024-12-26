---
title: ISO
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Add `.tar.zst` packages on the install iso (rad should install to custom root, a la pacstrap)
- Add `limine`, (`mtools`?) and `parted` to install iso
- Do not add microcode or firmware to live iso?
- Modify `/etc/issue` and add date and username and pass: https://www.linuxfromscratch.org/blfs/view/svn/postlfs/logon.html
- `makewhatis /usr/share/man` to update man-pages

## Live
- sleep is essential to avoid race conditions
- Mounting a device `/dev/sda` is type `iso9660`
- Mounting a partition `/dev/sda3` is type `hfsplus`
- If detected as `/dev/sr0` it is type `iso9660`
- if detected as hard drive (usb) it is type `hfsplus`
- `xorriso` requires `-hfsplus -apm-block-size 2048` to work on a bootable USB (Hybrid setup) (default on `grub-mkrescue`)
- Avoid rEFInd (fork of rEFIt from macOS)
- Avoid EFI editors like efibootmgr, bcfg and kesboot (mess motherboard's NVRAM and EFI)
- `EFI/BOOT` should be under `/` and not under `/boot` (xorriso)
- Recommended size of `/boot` and ESP: https://www.rodsbooks.com/efi-bootloaders/principles.html
- `vfat` vs `fat32` vs `fat` for ESP partition: https://uefi.org/specifications
- Volume ID should be in capital letters according to ISO 9660 (`GLAUCUS`) (ECMA-119 demands ASCII characters out of `A-Z0-9_`)

## Software
- `cdrtools` (includes `mkisofs`)
- `libburnia` (includes `libisoburn`, `xorriso` and `cdrskin`)
- `mkisofs` (part of `cdrtools`, people switched to `xorriso`, license?)
- `xorrecord` (emulation of `cdrecord` by `xorriso`)
- `xorrisofs` (emulation of `mkisofs` by `xorriso`)

### Excluded
- `cdrdao` (GUI)
- `cdrecord` (deprecated version of `cdrtools`)
- `cdrkit` (deprecated fork of `cdrtools`, Mr. Schilling says it sucks, filled with bugs and license concerns)
- `cdw` (GUI)
- `dvd+rw-tools` (deprecated, aka `growisofs`, does not deal with CDs)
- `genisofs`
- `genisoimage` (deprecated, fork of `mkisofs`, from `cdrkit`)
- `wodim` (deprecated, fork of `cdrecord`, from `cdrkit`)

## ISO 9660 Extensions (relax limitations)
- Apple ISO 9660 Extensions (file characteristics specific to the classic Mac OS and macOS, such as resource forks, file backup date and more)
- El Torito (enables CDs to be bootable)
- Joliet (Unicode, allowing non-Latin scripts to be used)
- Rock Ridge (Unix-style permissions and longer names)

## Booster
- Does not support live environments
- `e1000` provides internet access inside QEMU, and has been added to the default booster configuration
- After install, booster should be rerun to generate a native non-universal build

## GRUB
- Do not use `--disable-shim-lock` to disable `shim_lock` as it would render the iso not bootable when Secure Boot is enabled
- Arch images do not support Secure Boot; disable Secure Boot to boot the install medium, and if desired, it can be set up after install
- you can't use more than 300k files on an ISO, which is why we have to disable `hfsplus` when creating ISO: `-hfsplus off` (This does not work with xorriso in grub-mkrescue)
- `-r` enables Rock Ridge and changes file ownership to `0`; using `sudo` without `-r` does not change file ownership
- `grub-mkrescue` runs `xorriso`:
```sh
xorriso \
  -as mkisofs \
  -graft-points \
  --modification-date=2024053120334500 \
  -b boot/grub/i386-pc/eltorito.img \
  -no-emul-boot \
  -boot-load-size 4 \
  -boot-info-table \
  --grub2 \
  -boot-info \
  --grub2-mbr /usr/lib/grub/i386-pc/boot_hybrid.img \
  -hfsplus -apm-block-size 2048 \
  -hfsplus-file-creator-type chrp tbxj /System/Library/CoreServices/.disk_label \
  -hfs-bless-by i /System/Library/CoreServices/boot.efi \
  --efi-boot efi.img \
  -efi-boot-part \
  --efi-boot-image \
  --protective-msdos-label \
  -o glaucus.iso \
  -r /tmp/grub.yu5TLx \
  --sort-weight 0 / \
  --sort-weight 1 \
  /boot iso $APPENDED_OPTIONS
```
- Previous `grub-mkrescue` command to generate glaucus iso
```sh
# `-boot-info-table` can only be used when an argument is passed with `-b`
# `-R` is enabled by default by `xorrisofs`
# `-pad` is enabled by default by `xorrisofs`
# `-cache-inodes` is a relic from `genisoimage`, ignored by `xorriso`
# `-hfsplus off` does not work with `grub-mkrescue`
# `-no-hfs` does not work with `grub-mkrescue`
# `-d`, `-omit-period` violates iso9660
# `-N`, `-omit-version-number` violates iso9660
# `-max-iso9660-filenames` violates iso9660
# `-relaxed-filenames` violates iso9660
# `-allow-lowercase` violates iso9660

grub-mkrescue \
  --compress=no \
  --fonts="" \
  --locales="" \
  --themes="" \
  -v \
  --core-compress=none \
  -o glaucus.iso \
  --product-name glaucus \
  --product-version glaucus \
  $1 \
  -A glaucus \
  -iso-level 3 \
  -J \
  -joliet-long \
  -l \
  -pad \
  -publisher glaucus \
  -p glaucus \
  -R \
  -r \
  -V GLAUCUS \
  -vv
```

## Resources
- Mr. Jörg Schilling (GOAT of cd tools, died 2021)
- https://en.m.wikipedia.org/wiki/Comparison_of_disc_image_software
- https://fedoraproject.org/wiki/LiveOS_image
- https://gitea.artixlinux.org/artix/iso-profiles
- https://github.com/archlinux/archiso
- https://github.com/chimera-linux/chimera-live
- https://github.com/coreos/bootengine
- https://github.com/dslm4515/mlfs-linux-live
- https://github.com/eudaldgr/kiss-live/blob/master/kiss-live
- https://github.com/eudaldgr/kiss-live/blob/master/kiss-live#L197
- https://github.com/garybgenett/gary-os
- https://github.com/hanh-linux/gen-initramfs/wiki/Explanation-of-how-initramfs-mounts-the-ISO
- https://github.com/KeithDHedger/LFSBootCD
- https://github.com/kiss-community/kiss-live
- https://github.com/laurent85v/archuseriso
- https://github.com/MX-Linux/build-iso-mx
- https://github.com/Tomas-M/linux-live
- https://github.com/venomlinux/mkinitramfs
- https://github.com/void-linux/void-mklive/blob/master/mklive.sh
- https://linux-live.org/
- https://notabug.org/arsv/minibase-artix
- https://wiki.archlinux.org/title/Optical_disc_drive
- https://www.linuxfromscratch.org/hints/downloads/files/boot-cd_easy.txt
- https://www.linuxquestions.org/questions/linux-from-scratch-13/create-an-iso-from-lfs-build-4175703319/
- https://www.phenix.bnl.gov/~purschke/RescueCD/