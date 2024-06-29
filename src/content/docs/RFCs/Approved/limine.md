---
title: Limine
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Notes
- limine `bios-install` can only be used for `bios` and not for UEFI
- parted `mkpart primary` only works for `msdos` (BIOS/MBR), otherwise for GPT it will be set as name/`PARTLABEL` and not `PART-TYPE`
- limine does not support booting from `ext4` directly when in BIOS/MBR mode

## IMG (BIOS/MBR)
```Shell
#!/bin/sh

rm -f glaucus.img

dd bs=1M count=1024 if=/dev/zero of=glaucus.img

parted -s glaucus.img mklabel msdos
parted -s glaucus.img mkpart primary ext4 1 100%
parted -s glaucus.img set 1 boot on

modprobe loop

losetup -D

device="$(losetup -f)"
partition=${device}p1

losetup $device glaucus.img
partx -a $device

mke2fs -t ext4 $partition

rm -fr /mnt/glaucus
mkdir -p /mnt/glaucus

mount $partition /mnt/glaucus

rsync -aHAXx cross/ /mnt/glaucus

mkdir -p /mnt/glaucus/boot
cp -af /boot/vmlinuz-linux-cachyos /mnt/glaucus/boot/vmlinuz
booster build --force --compression=zstd --config=/var/lib/rad/clusters/cerata/booster/booster.yaml --universal --strip /mnt/glaucus/boot/initramfs

mkdir -p /mnt/glaucus/boot/limine

cp -af /home/firasuke/Downloads/Git/glaucus/cerata/limine/limine.cfg.img /mnt/glaucus/boot/limine/limine.cfg
cp -af /usr/share/limine/limine-bios.sys /mnt/glaucus/boot/limine

limine bios-install glaucus.img

chown -R 0:0 /mnt/glaucus
chown -R 20:20 /mnt/glaucus/var/log/wtmpd

umount -fqR /mnt/glaucus

partx -d $partition
losetup -d $device

chown firasuke:firasuke glaucus.img
```

## IMG (EFI/GPT)
```Shell
#!/bin/sh

rm -f glaucus.img

dd bs=1M count=1024 if=/dev/zero of=glaucus.img

parted -s glaucus.img mklabel gpt
parted -s glaucus.img mkpart ESP fat32 1 65
parted -s glaucus.img set 1 esp on
parted -s glaucus.img mkpart ext4 65 1024

modprobe loop

losetup -D

device="$(losetup -f)"
partitionOne=${device}p1
partitionTwo=${device}p2

losetup $device glaucus.img
partx -a $device

mkfs.fat -F 32 $partitionOne
mke2fs -t ext4 $partitionTwo

rm -fr /mnt/glaucus
mkdir -p /mnt/glaucus

mount $partitionTwo /mnt/glaucus

rsync -aHAXx cross/ /mnt/glaucus

mount $partitionOne /mnt/glaucus/boot

booster build --force --compression=zstd --config=/var/lib/rad/clusters/cerata/booster/booster.yaml --universal --strip /mnt/glaucus/boot/initramfs

cp -f /home/firasuke/Downloads/Git/glaucus/cerata/limine/limine.cfg.img /mnt/glaucus/boot/limine.cfg

cp -f /boot/vmlinuz-linux-cachyos /mnt/glaucus/boot/vmlinuz

mkdir -p /mnt/glaucus/boot/EFI/BOOT
cp -f /usr/share/limine/BOOTX64.EFI /mnt/glaucus/boot/EFI/BOOT

chown -R 0:0 /mnt/glaucus
chown -R 20:20 /mnt/glaucus/var/log/wtmpd

umount -fqR /mnt/glaucus/boot
umount -fqR /mnt/glaucus

partx -d $partitionOne
partx -d $partitionTwo
losetup -d $device

chown firasuke:firasuke glaucus.img
```

## ISO
```Shell
#!/bin/sh

rm -fR glaucus.iso iso

mkdir -p iso/EFI/BOOT iso/limine

cp -af /home/firasuke/Downloads/Git/glaucus/initramfs iso/initramfs
cp -af /home/firasuke/Downloads/Git/glaucus/cerata/limine/limine.cfg.iso iso/limine/limine.cfg
cp -af /boot/vmlinuz-linux-cachyos iso/vmlinuz

chown -R 0:0 cross
chown -R 20:20 cross/var/log/wtmpd

mkfs.erofs iso/rootfs cross

cp -af /usr/share/limine/BOOTX64.EFI iso/EFI/BOOT

cp -af /usr/share/limine/limine-bios-cd.bin iso/limine
cp -af /usr/share/limine/limine-bios.sys iso/limine
cp -af /usr/share/limine/limine-uefi-cd.bin iso/limine

xorriso \
  -as mkisofs \
  -o glaucus.iso \
  -iso-level 3 \
  -l \
  -r \
  -J \
  -joliet-long \
  -V GLAUCUS \
  -P glaucus \
  -A glaucus \
  -p glaucus \
  -b limine/limine-bios-cd.bin \
  -boot-load-size 4 \
  -no-emul-boot \
  -boot-info-table \
  --efi-boot limine/limine-uefi-cd.bin \
  --protective-msdos-label \
  -efi-boot-part \
  --efi-boot-image \
  -vv \
  iso

limine bios-install glaucus.iso
```

## Resources
- https://wiki.archlinux.org/title/Limine
- https://limine-bootloader.org/
- https://github.com/limine-bootloader/limine/blob/trunk/CONFIG.md
- https://github.com/limine-bootloader/limine/blob/trunk/PHILOSOPHY.md
- https://github.com/limine-bootloader/limine/blob/trunk/USAGE.md
- https://github.com/limine-bootloader/limine/blob/trunk/test/limine.cfg
- https://github.com/eweOS/packages/blob/limine/limine.cfg
