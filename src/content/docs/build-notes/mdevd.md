---
title: mdevd
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Start `mdevd` with `-O4`; this will make the daemon rebroadcast kernel uevents to `libudev-zero`
- Readiness `-D` only works when `mdevd` is being called by `s6` and not manually in an `initramfs`
- A summary of what `mdevd-coldplug` and `udevadm trigger` do:
```sh
for i in $(find /sys -name uevent); do ( echo change > $i ) ; done
```
- There is no test suite

## Resources
- https://github.com/AlexRogalskiy/aports/blob/master/main/busybox-initscripts/mdev.conf
- https://github.com/fff7d1bc/mdev-like-a-boss/blob/master/mdev.conf
- https://gitlab.alpinelinux.org/alpine/mdev-conf/-/blob/master/mdev.conf
