---
title: chroot
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Consider `mount --bind /dev/pts "$CHROOT/dev/pts"` to "prevent" segfaults if not enough ptys
