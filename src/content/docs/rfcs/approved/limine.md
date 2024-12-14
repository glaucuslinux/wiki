---
title: Limine
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Notes
- limine `bios-install` can only be used for `bios` and not for UEFI
- parted `mkpart primary` only works for `msdos` (BIOS/MBR), otherwise for GPT it will be set as name/`PARTLABEL` and not `PART-TYPE`
- limine does not support booting from `ext4` directly when in BIOS/MBR mode

## IMG (BIOS/MBR) (Deprecated?)
```sh
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

## Resources
- https://wiki.archlinux.org/title/Limine
- https://limine-bootloader.org/
- https://github.com/limine-bootloader/limine/blob/trunk/CONFIG.md
- https://github.com/limine-bootloader/limine/blob/trunk/PHILOSOPHY.md
- https://github.com/limine-bootloader/limine/blob/trunk/USAGE.md
- https://github.com/limine-bootloader/limine/blob/trunk/test/limine.cfg
- https://github.com/eweOS/packages/blob/limine/limine.cfg
