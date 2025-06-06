---
title: mdevd
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Check alpine's patches
- Start `mdevd` with `-O4`; this will make the daemon rebroadcast kernel uevents to `libudev-zero`
- Readiness `-D` only works when `mdevd` is being called by `s6` and not manually in an `initramfs`
- A summary of what `mdevd-coldplug` and `udevadm trigger` do:
```sh
for i in $(find /sys -name uevent); do ( echo change > $i ) ; done
```
- There is no test suite
- `yash` does not specify `PATH` in `initramfs` which causes `mdevd` to not find its `command`s; this problem seems to not exist when using `dash`
- `mdev.conf` syntax:
```
<device regex> <uid>:<gid> <permissions> [=path|>path|!] [@|$|*<command>]

- =path moves to path
- >path symlinks device to path
- ! prevents device from being created

- @ Run after creating the device.
- $ Run before removing the device.
- * Run both after creating and before removing the device.
```
- The command is executed via the system() function (which means you're giving a command to the shell), so make sure you have a shell installed at /bin/sh. You should also keep in mind that the kernel executes hotplug helpers with stdin, stdout, and stderr connected to /dev/null.
- Use libudev helper in `mdev.conf`
- Does `mdevd` work with `udev` directories and rules or should we delete them?

## mdev.conf
- `mdevd` parses `mdev.conf` when a new device event occurs
- `/dev/audio` and `/dev/dsp` have been replaced with newer drivers and naming conventions
- `/dev/core` has been deprecated
- `/dev/dsp` and `/dev/adsp` have been deprecated as modern systems don't use OSS
- `/dev/fd0` has been deprecated
- `/dev/grsec` has been deprecated since `4.14`
- `/dev/hd{a,b,c}` have been deprecated
- `/dev/hwrng` has replaced `/dev/hwrandom` and `/dev/hw_random`
- `/dev/mixer` and `/dev/sequencer` have been deprecated as modern systems don't use OSS
- `/dev/psaux` has been deprecated
- `/dev/pty` has been deprecated since `2.6.4` (https://man7.org/linux/man-pages/man7/pty.7.html)
- `/dev/snd` has replaced `/dev/sound`
- `/dev/sr0` has replaced `/dev/cdrom`
- `/dev/sda` has replaced `/dev/cciss` and `/dev/ida`

## References
- https://codeberg.org/emmett1/alicelinux/src/branch/main/repos/core/busybox/mdev.conf
- https://codeberg.org/kiss-community/repo/src/branch/master/core/busybox/files/mdev.conf
- https://codeberg.org/smj/mdevd-as-an-admin
- https://git.busybox.net/busybox/plain/docs/mdev.txt
- https://github.com/AlexRogalskiy/aports/blob/master/main/busybox-initscripts/mdev.conf
- https://github.com/eweOS/packages/blob/busybox/mdev.conf
- https://github.com/fff7d1bc/mdev-like-a-boss/blob/master/mdev.conf
- https://github.com/skarnet/mdevd/issues/10#issuecomment-2611158482
- https://gitlab.alpinelinux.org/alpine/mdev-conf/-/blob/master/mdev.conf.in
- https://wiki.archlinux.org/title/Udev
- https://wiki.gentoo.org/wiki/Mdev
- https://wiki.gentoo.org/wiki/Mdev/Automount_USB
- https://wiki.gentoo.org/wiki/Mdev/Automount_USB/automount
- https://www.linuxfromscratch.org/lfs/view/development/chapter08/udev.html
