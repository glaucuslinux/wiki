---
title: limine
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- Does it require LLVM now?
- There is no test suite in release tarballs
- For live environments, use `boot()`, `label()` or `uuid()`
- For installed systems, use `odd()` and `hdd()` for granular control of installed loaders
- `fslabel` refers to file system labels, not GPT labels `PARTLABEL`, and it is generally used for `.efi` stuff and won't work for finding kernel and initramfs
