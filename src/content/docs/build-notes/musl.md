---
title: musl
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Depends on `mawk`
- `install-tools` is for the wrapper `musl-gcc`
- Do not set the prefix to `/usr`, `/usr/local`, or `/` unless upgrading libc on an existing musl-based system (this will break your existing system after running `make install` making it difficult to recover)
- The dynamic linker searches for shared libraries at run time under directories listed in `/etc/ld-musl-$ARCH.path` separated by colons or newlines
- If the dynamic linker has been installed in a non-default location, the path needs to reside at that location (`../etc` relative to the chosen `syslibdir`)
- `DT_RELR` support (`-z pack-relative-relocs`) has been upstreamed, and reduces size by 5 - 8%
- Does `musl` conflict/replace `libssp` (the standalone package)
- `gencat` requires `queue.h`

## Resources
- https://gitlab.alpinelinux.org/alpine/tsc/-/issues/58
- https://rfc.archlinux.page/0023-pack-relative-relocs/
- https://wiki.gentoo.org/wiki/Musl_porting_notes
