---
title: limine
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Other
- May replace `limine` with something else

## Prepare
- `mtools` is needed for `limine-uefi-cd.bin`

## `limine.conf`
- For live environments, use `boot()`, `label()` or `uuid()`
- For installed systems, use `odd()` and `hdd()` for granular control of installed loaders
- `fslabel` refers to file system labels, not GPT labels `PARTLABEL`, and it is generally used for `.efi` stuff and won't work for finding kernel and initramfs

## Other
- Project moved to Codeberg

## References
- https://codeberg.org/Limine/Limine/src/branch/trunk/CONFIG.md
- https://codeberg.org/Limine/Limine/src/branch/trunk/INSTALL.md
- https://codeberg.org/Limine/Limine/src/branch/trunk/USAGE.md
- https://iglunix.xyz/docs/boot/
