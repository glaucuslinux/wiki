---
title: DwarFS
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Uses zstd by default
- Lighter on the CPU
- No initramfs generator supports DwarFS because of accessibility at boot time or in embedded environments as it depends on a lot of advanced C++ libraries (e.g. boost and Polly)
- Other alternatives `composefs` and `mergerfs`
- DwarFS will likely never be able to run on embedded devices
- EROFS will likely never be able to achieve the compression ratios of DwarFS
- There are user space and kernel space union file systems:
  - AUFS and Overlayfs are both in the kernel and thus have lover overhead
  - DwarFS is FUSE-only and uses the latest and greatest C++ features

## References
- https://gist.github.com/tanmyid/de3a4f1c25ade5d9d686ea8398537b6f
- https://github.com/mhx/dwarfs#comparison
- https://github.com/trapexit/mergerfs
- https://reddit.com/r/programming/comments/w76w1v/dwarfs_a_fast_high_compression_readonly_file/
- https://unix.stackexchange.com/questions/382326/unionfs-vs-aufs-vs-overlayfs-vs-mhddfs-which-one-do-i-use
