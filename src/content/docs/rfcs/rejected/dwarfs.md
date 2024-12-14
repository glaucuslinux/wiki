---
title: DwarFS
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- DwarFS is better than squashfs:
  - https://github.com/mhx/dwarfs#comparison
  - uses zstd by default
  - lighter on the CPU
- No initramfs tool supports DwarFS because of accessibility at boot time or in embedded environments as it depends on a lot of advanced C++ libraries (e.g. boost and Polly)
