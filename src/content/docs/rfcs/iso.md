---
title: ISO
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Add `.tar.zst` packages on the install iso (rad should install to custom root, a la pacstrap)
- Add `limine`, (`mtools`?) and `parted` to install iso
- Add `dosfstools`, `efibootmgr` and `gptfdisk` to install iso
- Do not add microcode or firmware to live iso?
- Modify `/etc/issue` and add date and username and pass: https://www.linuxfromscratch.org/blfs/view/svn/postlfs/logon.html
- `makewhatis /usr/share/man` to update man-pages
- Prefer `cat` to `dd`

## Live
- sleep is essential to avoid race conditions; unfortunately `rootdelay` and `rootwait` are not available in live environments
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
- Suse removed bios support from iso
- Do not further compress the `iso` with `zstd` if the `fs` is already compressed by EROFS or SquashFS
- After mounting overlay all previous mounts need to be moved using `mount --move` to identical mountpoints inside the overlay, otherwise `switch_root` will error out with `failed to unlink` and `directory not empty`
- ISOs should be hybrid; can be written directly to CD/DVD/BD media OR to USB sticks
- Distributions with good ISOs include Arch and eweOS
- Distributions with mediocre ISOs include Chimera and Void
- Do not forget to generate the `initramfs` before generating the `iso`
- Do not forget to have `dash` installed before generating the `initramfs`
- Let the kernel use the defaults for its command-line parameters (e.g. `loglevel` and `ro`/`rw`)
- `fakeroot` can be used instead of `sudo` for generating images, managing mounts and `make install`s for `DESTDIR`s that require root

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

## fstab
- The number before last in the table structure is an outdated backup method and should not be used (kept 0)
- The last number in the table is the **File System Check Order**: (second digit).  `0` means that fsck will not check the filesystem. Numbers higher than this represent the check order. The root filesystem should be set to `1` and other partitions set to `2`.
- Consider the following fstab for EROFS/overlayfs:
```sh
/iso/fs /media/fs-ro erofs   defaults,loop                                                                        0 0
overlay /            overlay defaults,lowerdir=/media/fs-ro,upperdir=/media/fs-rw/upper,workdir=/media/fs-rw/work 0 0
```

## OverlayFS (rw)
- lower should be ro
- upper and work should be rw in a tmpfs space like `/run` and not in something like `/media` (cdrom can be kept in `/media` though)
- `switch_root` is responsible for moving `proc`, `dev` and `sys` to the new root

## Alpine
- Uses `grub` for `efi` and `isolinux` for `bios`
- SquashFS inside `boot` called `modloop` is mounted on `/.modloop` using `/dev/loop0`
- `tmpfs` mounted on `/` for `rw`
- Installs packages in `apks` directory

## Arch
- `systemd-boot` for `efi` and `isolinux` for `bios`

## Kiss
- no rootfs; either the initramfs is being used directly or packages are being extracted at boot time?
- requires at least 2 GB of RAM to boot to extract all the packages
- ram on / type tmpfs
- base install packages in pkgs

## Misc
- `perl` adds 83M to the iso if provided

## References
- Mr. Jörg Schilling (GOAT of cd tools, died 2021)
- https://bkhome.org/news/202112/why-iso-was-retired.html
- https://bkhome.org/news/202112/why-iso-was-retired-part-2.html
- https://codeberg.org/emmett1/mkinitrd
- https://en.m.wikipedia.org/wiki/Comparison_of_disc_image_software
- https://fedoraproject.org/wiki/LiveOS_image
- https://forums.gentoo.org/viewtopic-t-1110764-highlight-.html
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
- https://github.com/oasislinux/oasis/issues/11
- https://github.com/Tomas-M/linux-live
- https://github.com/venomlinux/mkinitramfs
- https://github.com/void-linux/void-mklive/blob/master/mklive.sh
- https://hacktivis.me/articles/bootstrap-initrd
- https://landley.net/writing/rootfs-howto.html
- https://landley.net/writing/rootfs-intro.html
- https://landley.net/writing/rootfs-programming.html
- https://linux-live.org/
- https://notabug.org/arsv/minibase-artix
- https://roscopeco.com/2013/08/12/creating-a-bootable-hard-disk-image-with-grub2/
- https://superuser.com/questions/130955/how-to-install-grub-into-an-img-file
- https://unix.stackexchange.com/questions/224277/is-it-better-to-use-cat-dd-pv-or-another-procedure-to-copy-a-cd-dvd/224314#224314
- https://unix.stackexchange.com/questions/364262/freeing-initramfs-ram-after-switching-root-when-using-overlayfs
- https://wiki.archlinux.org/title/Optical_disc_drive
- https://wiki.archlinux.org/title/USB_flash_installation_medium
- https://www.linuxfromscratch.org/hints/downloads/files/boot-cd_easy.txt
- https://www.linux.org.ru/forum/linux-install/10720020
- https://www.linuxquestions.org/questions/linux-from-scratch-13/create-an-iso-from-lfs-build-4175703319/
- https://www.phenix.bnl.gov/~purschke/RescueCD/
- https://www.vidarholen.net/contents/blog/?p=479
