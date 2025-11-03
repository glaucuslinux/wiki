---
title: libiberty
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `libiberty` is not needed as it acts like another libc
- Does not support shared libraries, and is only available as `libiberty.a` which many distros remove post build or post install
- It's not installed by default nowadays; use `—enable-install-libiberty` to install it
- Software that needs `libiberty` will provide it on their own to prevent version changes
- `gcc` and `gdb` require `libiberty` from `binutils` internally:
  - alpine (for cross/system enables libiberty; for toolchain it is disabled explicitly with `--disable-install-libiberty` and `.a` is manually deleted)
  - clear (manual install, copy to target dir)
  - dragora
  - t2
  - void (in a separate binutils-devel package)
- Sabotage disables libiberty, and has a fix for older versions of gnu packages
- Installing `gcc`'s internal `libiberty` will overwrite the more modern/mainstream version from `binutils` causing `gcc` to fail with `libctf` in its second pass (according to Arch)

## References
- https://github.com/sabotage-linux/sabotage/blob/master/KEEP/libibertyfix
- https://github.com/sabotage-linux/sabotage/commit/98e5fc3ce6e7946792284ec5a937959b5ffbd0c2#commitcomment-73101387
