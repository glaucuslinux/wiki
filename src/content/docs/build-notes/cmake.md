---
title: cmake
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Use bundled version of `libuv` (for now)
- Use bundled version of `rhash` (nothing depends on it)
- Unset `$MAKE` as `cmake` expects `cmake_make_processor` to be equal to `$MAKE` which is `make` on glaucus, and that does not work when bootstrapping `cmake`
- Can be built with `make` only; without requiring `ninja`,`samu` or `muon`
- Build `cmake` by itself to enable LTO (`BUILD_LTO=ON`)
- Test suite might require `LC_ALL=en_US.UTF-8` on LFS
- Builds takes a while (~10 minutes) even with jobs=2 and jobs=4; compare `make` against `samu`?

## References
- https://cmake.org/cmake/help/latest/command/install.html
- https://cmake.org/cmake/help/latest/manual/cmake-variables.7.html
- https://cmake.org/cmake/help/latest/module/GNUInstallDirs.html
- https://linuxfromscratch.org/blfs/view/svn/kde/extra-cmake-modules.html
