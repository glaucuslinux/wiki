---
title: pciutils
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Configure
- Set `HWDB=no` because `libudev-zero`'s `hwdb` shim does not support `pci` name resolution
- You need to explicitly specify `CFLAGS` in `OPT` for it to get picked up
- `ZLIB=no` implicitly sets `PCI_IDS=pci.ids` and `PCI_COMPRESSED_IDS=0`

## Build
- Builds with `lto` enabled on glaucus

## Other
- `update-pciids` from `pciutils` does not update `pci.ids` from `hwdata`
- Make use of `setpci` (e.g. gentoo's `pciparm` scripts)
