---
title: musl
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Notes
- `install-tools` is only intended for the wrapper `musl-gcc`
- DO NOT set the prefix to "/usr", "/usr/local", or "/" unless you're upgrading libc on an existing musl-based system. Doing so will break your existing system when you run "make install" and it may be difficult to recover.
- At runtime, the dynamic linker needs to know the paths to search for shared libraries. You should create a text file named /etc/ld-musl-$ARCH.path (where $ARCH matches the architecture name used in the dynamic linker) containing a list of directories where you want the dynamic linker to search for shared libraries, separated by colons or newlines. If the dynamic linker has been installed in a non-default location, the path file also needs to reside at that location (../etc relative to the chosen syslibdir).
- DT_RELR has been upstreamed in musl, and it reduces size by 5 - 8%, to enable it use `-z pack-relative-relocs`:
  - https://gitlab.alpinelinux.org/alpine/tsc/-/issues/58
  - https://rfc.archlinux.page/0023-pack-relative-relocs/

- Check if musl conflicts/replaces `libssp` (the standalone package)
