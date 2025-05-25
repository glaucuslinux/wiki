---
title: pciutils
description: An opinionated Linux® distribution based on musl libc and toybox
---

- You need to explicitly specify `CFLAGS` in `OPT` for it to get picked up
- Support for compressed ids is disabled on Dragora (`PCI_IDS=pci.ids PCI_COMPRESSED_IDS=0`)
- `update-pciids` from `pciutils` does not update `pci.ids` from `hwdata`
