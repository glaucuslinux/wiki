---
title: libiberty
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- `libiberty` is not needed as it acts like another libc
- Does not support shared libraries, and is only available as `libiberty.a` which many distros remove post build or post install. I think it's not installed by default nowadays, because there's a certain switch `—enable-install-libiberty` that installs it
- Software that needs `libiberty` will provide it on their own to prevent version changes
- `gcc` requires `libiberty` from `binutils`:
  - alpine (for cross/system enables libiberty)
  - clear (manual install, copy to target dir)
  - dragora
  - t2
  - void (in a separate binutils-devel package)
- Sabotage disables libiberty, and has a fix for older versions of gnu packages

## References
- https://github.com/sabotage-linux/sabotage/blob/master/KEEP/libibertyfix
- https://github.com/sabotage-linux/sabotage/commit/98e5fc3ce6e7946792284ec5a937959b5ffbd0c2#commitcomment-73101387
