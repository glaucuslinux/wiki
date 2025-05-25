---
title: Static Linking
description: An opinionated Linux® distribution based on musl libc and toybox
---

- glaucus removes static libraries
- In the toolchain, the only required static library before `musl` is `libgcc.a`
- glaucus's toolchain supports static linking

## References
- https://gavinhoward.com/2021/01/dynamic-linking-needs-to-die/
- https://gavinhoward.com/2021/10/static-linking-considered-harmful-considered-harmful/
- https://drewdevault.com/dynlib.html

### LFS
- The LFS editors discourage building and installing static libraries.
- Most static libraries have been made obsolete in a modern Linux system.
- Linking a static library into a program can be detrimental. If an update to the library is needed to remove a security problem, every program that uses the static library will need to be relinked with the new library.
- Since the use of static libraries is not always obvious, the relevant programs (and the procedures needed to do the linking) may not even be known.

### BLFS
- https://www.linuxfromscratch.org/blfs/view/svn/introduction/libraries.html
