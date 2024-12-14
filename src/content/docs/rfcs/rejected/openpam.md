---
title: OpenPAM
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- https://skarnet.org/software/pamela/
- OpenPAM is an old alternative to Linux PAM (Both are 20 approximately years old)
- Linux PAM has more modules

- Provide OpenPAM and make `login` not wait for 3 seconds when mistyping a password:
  - Get the pam modules configured properly
  - Examine `SCONFIGDIR=/etc/security` for `make install` from arch

- https://www.openpam.org/downloads/openpam-20230627.tar.gz
- https://git.des.dev/openpam/openpam/wiki

- https://sourceforge.net/projects/openpam/files/openpam/Ximenia/

- https://github.com/apple-oss-distributions/OpenPAM
- https://github.com/fim/openpam-modules
- https://github.com/dslm4515/BMLFS/issues/29#issuecomment-1428896779
- https://github.com/glaucuslinux/cerata/issues/8
- https://lwn.net/Articles/992948/
