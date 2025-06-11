---
title: IMG
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `dd` vs `fallocate` vs `qemu-img` for creating .img file:
  - `dd` does not leave holes (use `bs=4M` for faster copying)
  - `fallocate` is much faster, but leaves holes
- Prefer `partx` to `kpartx`; the latter is complicated and depends on device mapper, while the former simply notifies the kernel about partitions

## References
- https://askubuntu.com/questions/1017309/fallocate-vs-dd-for-swapfile
- https://git.adelielinux.org/adelie/bootstrap/-/blob/master/bootstrap?ref_type=heads
- https://roscopeco.com/2013/08/12/creating-a-bootable-hard-disk-image-with-grub2/
