---
title: IMG
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- https://roscopeco.com/2013/08/12/creating-a-bootable-hard-disk-image-with-grub2/

- `dd` vs `fallocate` vs `qemu-img` for creating .img file:
  - https://askubuntu.com/questions/1017309/fallocate-vs-dd-for-swapfile
  - `dd` does not leave holes (use `bs=4M` for faster copying)
  - `fallocate` is much faster, but leaves holes
- Prefer `partx` to `kpartx` as the latter is more complicated and relies on device mapper to support stuff, while all the former does is tell the kernel about some partitions
