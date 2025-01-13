---
title: initramfs
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- tinycorelinux is run entirely in the initramfs (no `switch_root`)
- kiss is also run in initramfs and extracts `.tar.xz` packages (no `switch_root`)
- tinyramfs supports hardware detection at boot if all necessary modules are included; kiss-live project

- initramfs is newer compared to initrd
- The file `/init` must exist in the initramfs
- All daemons started by the initramfs must be killed, as the kernel reserves PID 1 for the init system
- `pivot_root` is older than `switch_root` and was used by the old initrd, while the latter is used by the newer initramfs
- Some init systems require proc, sys and dev to be mounted before starting up with `switch_root` in init, in this case is better to use `mount --move` instead of cleaning up with `umount` before `switch_root`, otherwise it is better overall to use `umount` to boot in a clean state.
- `cryptsetup` requires `/run`; not included in the iso
- `/mnt/root` is the accepted mountpoint for the root filesystem
- `findfs` from `util-linux` can be used to detect the label `glaucus` instead of using `/dev/sr0` directly
- No need for network or wireless drivers inside initramfs because we won't live boot over network for now
- When using `find . -print0` the option `-0` or `--null` should be used with `cpio`
- `modprobe` resolved dependencies, unlike `insmod`
- Without running `depmod` module dependencies won't be loaded
- `blkid` is better than `findfs` in terms of finding block devices; better output
- Do we need the following modules: `char/tpm`, `firewire`, `hid-generic` and `pcmcia`?

## Resources
- https://github.com/hanh-linux/gen-initramfs
- https://github.com/hanh-linux/gen-initramfs/wiki/Explanation-of-how-initramfs-mounts-the-ISO.
- https://github.com/rdbo/sigma-linux/blob/master/profile/initfs
- https://github.com/sabotage-linux/sabotage/blob/master/KEEP/initramfs.init
- https://github.com/sabotage-linux/sabotage/blob/master/KEEP/initramfs.sh
- https://github.com/venomlinux/mkinitramfs
- https://gitlab.alpinelinux.org/alpine/mkinitfs
- https://hacktivis.me/articles/bootstrap-initrd
- https://landley.net/writing/rootfs-howto.html
- https://landley.net/writing/rootfs-intro.html
- https://wiki.gentoo.org/wiki/Custom_Initramfs
- https://wiki.gentoo.org/wiki/Custom_Initramfs/Examples
- https://wiki.gentoo.org/wiki/Early_Userspace_Mounting
- https://wiki.gentoo.org/wiki/Initramfs
- https://wiki.gentoo.org/wiki/Initramfs/Guide
- https://wiki.gentoo.org/wiki/Initramfs_-_make_your_own
