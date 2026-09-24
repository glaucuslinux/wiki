---
title: grub
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `autogen.sh` (and `autoreconf -vfis`) require `autoconf-archive`
- `grub.cfg` is now the default configuration file
- `grub-install` option `--no-floppy` has been deprecated (the code returns `0` for compatibility)
- known to break if linked with `gold`
- `grub-mkimage` builds everything when needed
- `grub-mkrescue` is not being used at all for ISO creation
- `grub-mkstandalone` is a wrapper around `grub-mkimage` and is used to create EFI images and boots
- Do not use `-max-iso9660-filenames` as it may cause buffer overflows on some systems and is not iso conformant
- grub-mkrescue:
```
grub-mkrescue \
  --compress=xz \
  --disable-shim-lock \
  --themes="" \
  --core-compress=xz \
  -o glaucus.iso \
  --product-name=glaucus \
  --product-version=20230721 \
  cross
```
- grub-mkimage:
```
grub-mkimage \
  -C xz \
  -o bootx64.efi \
  -O x86_64-efi \
  -p /boot/grub
```
- grub modules for `i386-efi` target:
  - `configfile`
  - `ext2`
  - `fat`
  - `iso9660`
  - `linux`
  - `multiboot`
  - `normal`
  - `ntfs`
  - `part_apple`
  - `part_gpt`
  - `part_msdos`
  - `search`
  - `search_fs_file`
  - `search_fs_uuid`
- `grub` uses `i386-efi` modules for `i386-pc` and adds `biosdisk`
- Speed up `iso` burning with `bs=4M`
- `grub` requires free space (1-2 MB) before the 1st partition before installing it on an image file

## References
- https://unix.stackexchange.com/questions/253657/actual-usage-of-grub-mkimage-config
