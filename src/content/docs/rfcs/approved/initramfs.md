---
title: initramfs
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- https://github.com/glaucuslinux/initramfs-generator

- No need for network or wireless drivers inside initramfs because we won't live boot over network (at least for now)

- tinycorelinux is run entirely in the initramfs (no `switch_root`)
- kiss provides a minimal initramfs, and packages as .tar.xz then extracts them instead of changing root upon booting
- tinyramfs does support hardware detection at boot as long as you include all modules necessary for booting. As of how to make this all work, there is the kiss-live project which uses tinyramfs to generate initramfs for live iso.

- initramfs is newer compared to initrd
- The file `/init` must exist in an initramfs
- All daemons started by the initramfs must be killed, as the kernel reserves PID 1 for the init system
- `pivot_root` is older than `switch_root` and was used by the old initrd, while the latter is used by the newer initramfs
- Some init setups require proc, sys and dev to be mounted before starting up with `switch_root` in init, in this case is better to use `mount --move` instead of cleaning up with `umount` before `switch_root`, otherwise it is better overall to use `umount` to boot in a clean state.
- `/run` needs to exist for some applications like `cryptsetup`, but for the ISO we do not need it
- `/mnt/root` is the accepted mountpoint for the root filesystem
- We can make use of `findfs` from `util-linux` to detect the label `glaucus` instead of using `/dev/sr0` directly

- When using `find . -print0` the option `-0` or `--null` should be used with `cpio`
- `insmod` does not consider dependencies, unlike `modprobe`

## History
- https://landley.net/writing/rootfs-intro.html
- https://landley.net/writing/rootfs-howto.html

## Resources
- https://wiki.gentoo.org/wiki/Initramfs
- https://wiki.gentoo.org/wiki/Initramfs/Guide
- https://wiki.gentoo.org/wiki/Custom_Initramfs
- https://wiki.gentoo.org/wiki/Custom_Initramfs/Examples
- https://wiki.gentoo.org/wiki/Early_Userspace_Mounting
- https://wiki.gentoo.org/wiki/Initramfs_-_make_your_own

- https://github.com/hanh-linux/gen-initramfs/wiki/Explanation-of-how-initramfs-mounts-the-ISO.

## Implementations
- https://gitlab.alpinelinux.org/alpine/mkinitfs
- https://github.com/hanh-linux/gen-initramfs
- https://github.com/venomlinux/mkinitramfs
- https://github.com/sabotage-linux/sabotage/blob/master/KEEP/initramfs.init
- https://github.com/sabotage-linux/sabotage/blob/master/KEEP/initramfs.sh
- https://github.com/rdbo/sigma-linux/blob/master/profile/initfs
