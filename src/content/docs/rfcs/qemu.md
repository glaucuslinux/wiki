---
title: qemu
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Consider the following options:
```
# `-drive file=disk.img,if=virtio,format=raw` to use `disk.img` as install medium
# `-drive file=glaucus.iso,media=cdrom` vs `-cdrom glaucus.iso`
# `-drive if=pflash,format=raw,readonly=on,file=/usr/share/OVMF/OVMF_CODE.fd`

# `-device qemu-xhci,id=xhci`
# `-device usb-kbd,bus=xhci.0`
# `-device usb-tablet,bus=xhci.0`

# `-device virtio-net,netdev=glaucus -netdev user,id=glaucus`
# `-device virtio-rng-pci`
# `-device virtio-sound-pci,audiodev=glaucusaudio -audiodev alsa,id=glaucusaudio`
# `-device virtio-vga-gl`

# `-netdev user,id=glaucus,hostname=glaucus`
# `-nic model=e1000` if e1000 does not show
```
