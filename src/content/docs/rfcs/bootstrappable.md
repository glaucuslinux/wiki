---
title: bootstrappable
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Make glaucus bootstrappable from a tiny binary seed (this means that the first boot will attempt to build from a tiny binary seed that will build a tiny c compiler in assembly then tcc then gcc 4.7 then gcc 10.5 then a full toolchain that can build stuff up to the native user space, this will only need to be done once for the first boot)
- Bootstrapping an existing distribution that is already bootstrappable up to a certain point until glaucus's toolchain is able to take over would enable for an interesting combination at least early on (e.g. Alpine); that is ofc until glaucus is fully bootstrappable from absolute nothingness

## References
- https://bootstrappable.org/
- https://codeberg.org/stagex/stagex
- https://codeberg.org/vasi/bootstrappable-distros
- https://github.com/davidar/bootsh
- https://github.com/fosslinux/live-bootstrap
- https://github.com/ironmeld/builder-hex0
- https://github.com/vasi/bootstrappable-distros
- https://github.com/vasi/bootstrappable-distros/blob/main/distros
- https://github.com/vasi/mid-kid-bootstrap
- https://hacktivis.me/articles/bootstrap-initrd
- https://stagex.tools/
- https://xorvoid.com/sectorc.html
