---
title: linux
description: An opinionated Linux® distribution based on musl libc and toybox
---

- SLOB and SLAB are deprecated; use SLUB instead
- `bsdtar` patch: https://lore.kernel.org/lkml/87wn3g2qfk.fsf@gentoo.org/T/
- `INSTALL_MOD_STRIP=1` for `make install`
- Check `linux/kernel/gen_kheaders.sh`
- Check `linux/scripts/package/buildtar`

## References
- http://lkml.iu.edu/hypermail/linux/kernel/1408.0/03049.html
- https://gist.github.com/12101111/b6978a114c9acca23a67fd064e57f040
- https://gist.github.com/kinoshita-lab/809b60e08b3d236b9e1db8978b748cda
- https://github.com/chipsalliance/rocket-chip/issues/1011
- https://github.com/geirha/shbot-initramfs/blob/master/kernel-howto.md
- https://lore.kernel.org/patchwork/patch/489972/
- https://odi.ch/prog/kernel-config.php
- https://mikrocontroller.net/attachment/413002/config-bpir2.txt
- https://phoronix.com/news/Linux-6.2-SLOB-Deprecated
- https://youtube.com/watch?v=NVWVHiLx1sU
