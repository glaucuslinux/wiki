---
title: DwarFS
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Uses zstd by default
- Lighter on the CPU
- No initramfs generator supports DwarFS because of accessibility at boot time or in embedded environments as it depends on a lot of advanced C++ libraries (e.g. boost and Polly)

## Resources
- https://github.com/mhx/dwarfs#comparison