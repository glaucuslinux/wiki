---
title: limine
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Project moved to Codeberg
- Can we still use `gcc` or does it depend on `llvm/clang` now?
- `mtools` is needed for `limine-uefi-cd.bin`
- There is no test suite in release tarballs
- For live environments, use `boot()`, `label()` or `uuid()`
- For installed systems, use `odd()` and `hdd()` for granular control of installed loaders
- `fslabel` refers to file system labels, not GPT labels `PARTLABEL`, and it is generally used for `.efi` stuff and won't work for finding kernel and initramfs

## References
- https://codeberg.org/Limine/Limine/src/branch/trunk/CONFIG.md
- https://codeberg.org/Limine/Limine/src/branch/trunk/INSTALL.md
- https://codeberg.org/Limine/Limine/src/branch/trunk/USAGE.md
