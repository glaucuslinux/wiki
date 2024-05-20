---
title: libiberty
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `libiberty` is not needed because it acts like a libc and we already have one..

- It also does not support shared libraries at all, and can only be available as `libiberty.a` which many distros remove post build or post install. I think it's not installed by default nowadays, because there's a certain switch `—enable-install-libiberty` that installs it

- Software that needs `libiberty` will provide it on their own to prevent version changes

- You can't disable `libiberty` from `binutils` because gcc needs it:
  - alpine (for cross/system enables libiberty)
  - clear (manual install, copy to target dir)
  - dragora
  - t2
  - void (in a separate binutils-devel package)

- Sabotage actually disables it using this: https://github.com/sabotage-linux/sabotage/blob/master/KEEP/libibertyfix

- Sabotage libiberty fix is intended for older versions of gnu packages: https://github.com/sabotage-linux/sabotage/commit/98e5fc3ce6e7946792284ec5a937959b5ffbd0c2#commitcomment-73101387
