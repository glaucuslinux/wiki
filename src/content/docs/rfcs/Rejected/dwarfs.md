---
title: DwarFS
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Uses zstd by default
- Lighter on the CPU
- No initramfs generator supports DwarFS because of accessibility at boot time or in embedded environments as it depends on a lot of advanced C++ libraries (e.g. boost and Polly)
- Other alternatives `composefs` and `mergerfs`

## References
- https://github.com/mhx/dwarfs#comparison
