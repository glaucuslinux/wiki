---
title: linux
description: An opinionated Linux® distribution based on musl libc and toybox
---

- SLOB and SLAB are deprecated; use SLUB instead
- `bsdtar` patch: https://lore.kernel.org/lkml/87wn3g2qfk.fsf@gentoo.org/T/
- `INSTALL_MOD_STRIP=1` for `make install`
- Check `linux/kernel/gen_kheaders.sh`
- Check `linux/scripts/package/buildtar`
- `modules.*.bin` and `modules.pcimap` should be automatically generated
- Check `CONFIG_UEVENT_HELPER` for `hotplug`
- Consider stripping the kernel with:
```
strip --strip-debug -o vmlinux.stripped vmlinux
```
- To strip kernel modules use `INSTALL_MOD_STRIP=1` (which does a `--strip-debug`):
```
make modules_install INSTALL_MOD_STRIP=1
```
- Do not use `INSTALL_MOD_STRIP="--strip-all"` as it breaks the modules

## References
- http://lkml.iu.edu/hypermail/linux/kernel/1408.0/03049.html
- https://docs.kernel.org/kbuild/llvm.html
- https://gist.github.com/12101111/b6978a114c9acca23a67fd064e57f040
- https://gist.github.com/kinoshita-lab/809b60e08b3d236b9e1db8978b748cda
- https://github.com/chipsalliance/rocket-chip/issues/1011
- https://github.com/geirha/shbot-initramfs/blob/master/kernel-howto.md
- https://kspp.github.io/Recommended_Settings
- https://lore.kernel.org/patchwork/patch/489972/
- https://mikrocontroller.net/attachment/413002/config-bpir2.txt
- https://odi.ch/prog/kernel-config.php
- https://phoronix.com/news/Linux-6.2-SLOB-Deprecated
- https://youtube.com/watch?v=NVWVHiLx1sU
