---
title: OpenPAM
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- OpenPAM is an alternative to Linux PAM (Both are approximately 20 years old)
- Linux PAM has more modules
- Provide OpenPAM and make `login` not wait for 3 seconds when mistyping a password:
- Configure the modules properly
- `SCONFIGDIR=/etc/security` for `make install` on Arch

## References
- https://git.des.dev/openpam/openpam/wiki
- https://github.com/apple-oss-distributions/OpenPAM
- https://github.com/dslm4515/BMLFS/issues/29#issuecomment-1428896779
- https://github.com/fim/openpam-modules
- https://github.com/glaucuslinux/cerata/issues/8
- https://lwn.net/Articles/992948/
- https://skarnet.org/software/pamela/
- https://sourceforge.net/projects/openpam/files/openpam/Ximenia/
- https://www.openpam.org/downloads/openpam-20230627.tar.gz
- https://www.youtube.com/watch?v=INjCiHUIjgg
