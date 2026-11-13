---
title: mdevd
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Prepare
- Depends on `execline` to parse `mdev.conf`'s `+`, `-` and `&` command directives

## Other
- `mdevd -n` and `mdevd -N` allow dry runs and configuration file tests without actually running `mdevd`
- `mdevd` deprecates `s6-uevent-listener` and `s6-uevent-spawner`
- Start `mdevd` with `-O4`; this will make the daemon rebroadcast kernel uevents to `libudev-zero`
- `yash` does not specify `PATH` in `initramfs` which causes `mdevd` to not find its `command`s; this weirdly isn't a problem with `dash`
- `mdevd` does not parse `udev` rules unlike `keventd` which includes a minimal parser for a curated set of rules from `eudev`

## `mdev.conf`
- Use libudev helper in `mdev.conf`
- `devices` is the default value for `udevadm trigger -t`
- with `udevadm` you have to `udevadm hwdb --update`
### syntax
```sh
# [-]<device regex>  <uid>:<gid> <permissions> [=path|>path|!] [@|$|*<command>]
# [-]$ENVVAR=regex   <uid>:<gid> <permissions> [=path|>path|!] [@|$|*<command>]
# [-]@maj,min[-min2] <uid>:<gid> <permissions> [=path|>path|!] [@|$|*<command>]

- [-] do not stop on this match and continue reading the configuration file
- =path moves to path
- >path moves to path and creates a symlink
- ! prevents device from being created

- @ run after creating the device or if $ACTION=remove
- $ run before removing the device or if $ACTION=add
- * run both after creating and before removing the device or in all cases

- The $DEVNAME variable specify the path to the device in /dev (can be used in helper scripts as well)
- The $DEVPATH variable specify the path to the device in /sys (can be used in helper scripts as well)
- The $MDEV variable represents the name of the device that triggered the rule
```
- The command is executed via the system() function (which means you're giving a command to the shell), so make sure you have a shell installed at /bin/sh. You should also keep in mind that the kernel executes hotplug helpers with stdin, stdout, and stderr connected to /dev/null.
### devices
- `mdevd` parses `mdev.conf` when a new device event occurs
- `/dev/audio` and `/dev/dsp` have been replaced with newer drivers and naming conventions
- `/dev/core` has been deprecated
- `/dev/dsp` and `/dev/adsp` have been deprecated as modern systems don't use OSS
- `/dev/fd0` has been deprecated
- `/dev/grsec` has been deprecated since `4.14`
- `/dev/hd{a,b,c}` have been deprecated
- `/dev/hwrng` has replaced `/dev/hwrandom` and `/dev/hw_random`
- `/dev/kmem` and `/dev/mem` are unsafe bsd relics that provide unwanted access to raw memory (`xorg` and `dosemu` might use them)
- `/dev/mixer` and `/dev/sequencer` have been deprecated as modern systems don't use OSS
- `/dev/psaux` has been deprecated
- `/dev/pty` has been deprecated since `2.6.4` (https://man7.org/linux/man-pages/man7/pty.7.html)
- `/dev/snd` has replaced `/dev/sound`
- `/dev/sr0` has replaced `/dev/cdrom`
- `/dev/sda` has replaced `/dev/cciss` and `/dev/ida`
### others
- set `/dev/dri/render*` in `mdev.conf` to `render` group instead of `video`?
- lsb recommends that `uid` and `gid` stay under `100`
- `devpts` `gid` should match that of `tty` group; `3` or `5` according to `/etc/group`
- Both `optical` and `cdrom` are still relevant today; `optical` is more up-to-date as it also includes dvd and bluray

## References
- https://alpine-devel.alpinelinux.narkive.com/K5nRHm3j/udev-replacement-in-alpine-linux
- https://alpine-devel.alpinelinux.narkive.com/Tto4DqlQ/udev-replacement-on-alpine-linux
- https://codeberg.org/emmett1/alicelinux/src/branch/main/repos/core/busybox/mdev.conf
- https://codeberg.org/kiss-community/repo/src/branch/master/core/busybox/files/mdev.conf
- https://codeberg.org/smj/mdevd-as-an-admin
- https://gist.github.com/capezotte/03ee5548218e819b06459819bb120b4b
- https://git.busybox.net/busybox/plain/docs/mdev.txt
- https://git.skarnet.org/cgit/mdevd/tree/examples
- https://github.com/AlexRogalskiy/aports/blob/master/main/busybox-initscripts/mdev.conf
- https://github.com/alpinelinux/mkinitfs/blob/master/nlplug-findfs/init.sh
- https://github.com/eweOS/packages/blob/busybox/mdev.conf
- https://github.com/fff7d1bc/mdev-like-a-boss/blob/master/mdev.conf
- https://github.com/illiliti/libudev-zero/blob/master/contrib/mdev.conf
- https://github.com/skarnet/mdevd/issues/10#issuecomment-2611158482
- https://gitlab.alpinelinux.org/alpine/mdev-conf/-/blob/master/mdev.conf.in
- https://linuxfromscratch.org/hints/downloads/files/eudev-alt-hint.txt
- https://linuxfromscratch.org/lfs/view/development/chapter08/udev.html
- https://manned.org/man/nlplug-findfs
- https://unix.stackexchange.com/questions/126608/kernel-disabling-dev-kmem-and-dev-mem
- https://wiki.alpinelinux.org/wiki/Mdevd
- https://wiki.alpinelinux.org/wiki/User:Sertonix/Freedom_of_choice
- https://wiki.archlinux.org/title/Udev
- https://wiki.gentoo.org/wiki/Mdev
- https://wiki.gentoo.org/wiki/Mdev/Automount_USB
- https://wiki.gentoo.org/wiki/Mdev/Automount_USB/automount
- https://youtube.com/watch?v=k_TGPNN7QY0
- https://youtube.com/watch?v=xhfEET46sGA
