---
title: bzip2
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `bzip2` only provides the header file and shared library on glaucus
- `lbzip2` and `lbzip2-utils` provide the binaries on glaucus
- Check the new `bzip2` ver `1.1+`:
  - https://gitlab.com/bzip2/bzip2
  - https://gitweb.gentoo.org/repo/gentoo.git/tree/app-arch/bzip2/bzip2-9999.ebuild
- The newer version `1.1+` does not allow for isolating binaries from libraries at build time
