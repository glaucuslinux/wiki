---
title: libudev-zero
description: An opinionated Linux® distribution based on musl libc and toybox
---

- There is no test suite
- Might have to add the following to `/etc/mdev.conf`:
```
SUBSYSTEM=drm;.*   root:video 660 *libudev-zero-helper
SUBSYSTEM=input;.* root:input 660 *libudev-zero-helper
```
- OpenWrt switched from `libudev-fbsd` to `libudev-zero`

## References
- https://github.com/eweOS/packages/blob/libudev/sound-initialized.patch
- https://github.com/illiliti/libudev-zero/pull/31
- https://github.com/illiliti/libudev-zero/pull/69
- https://github.com/illiliti/libudev-zero/pull/70
- https://github.com/illiliti/libudev-zero/pull/71
- https://github.com/openwrt/packages/issues/12844
- https://github.com/openwrt/packages/pull/13720
- https://github.com/sabotage-linux/sabotage/blob/master/KEEP/libudev-zero-inputprops.patch
