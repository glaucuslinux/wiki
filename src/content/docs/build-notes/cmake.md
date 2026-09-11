---
title: cmake
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Configure
- `./bootstrap` accepts `cmake` variables after `--`
- `-DBUILD_CursesDialog=OFF` prevents `ccmake` from being built
- There is no configure option to prevent `cpack` and `ctest` from being built
- Use bundled versions of `librhash` and `libuv`; no other package depends on them to justify providing them system-wide
- `./bootstrap` passes the following by default:
```
--no-system-libs
--no-system-cppdap
--no-system-curl
--no-system-expat
--no-system-jsoncpp
--no-system-zlib
--no-system-bzip2
--no-system-liblzma
--no-system-nghttp2
--no-system-zstd
--no-system-libarchive
--no-system-librhash
--no-system-libuv
--no-qt-gui
--debugger
```
- glaucus passes `--system-libs` then turns off `cppdap`, `jsoncpp`, `nghttp2`, `librhash` and `libuv`
- `--no-qt-gui` is equal to `-DBUILD_QtDialog=OFF`
- These options allow the early bootstrapped version `Bootstrap.cmk/cmake` to link against system installed libaries (glaucus already passes `--no-system-` for all of them in the final version of `cmake`):
```
--bootstrap-system-libuv
--bootstrap-system-jsoncpp
--bootstrap-system-librhash
```
- `BUILD_SHARED_LIBS` is forced `OFF` internally; do not change it
- It does not make sense to use `CMake_TEST_NO_NETWORK` and `CMAKE_RUN_LONG_TESTS` when `-DBUILD_TESTING=OFF` is already set
- It also does not make sense to use `CMAKE_USE_SYSTEM_FORM` when `-DBUILD_CursesDialog=OFF` is already set
- There's no need to use `CMAKE_SKIP_BUILD_RPATH` and `CMAKE_SKIP_INSTALL_RPATH` when `-DCMAKE_SKIP_RPATH=ON` is already set as it omits `rpath` in both build and install targets
- If a project breaks with `-DCMAKE_SKIP_RPATH=ON` downgrade to `-DCMAKE_SKIP_INSTALL_RPATH=ON`
- `CMake_BUILD_LTO` is only effective when bootstrapping the `cmake` executable; use `-DCMAKE_INTERPROCEDURAL_OPTIMIZATION=ON` to enable `lto` for `glaucus-cmake`
- There is no need to set `CMAKE_C_COMPILER`, `CMAKE_CXX_COMPILER`, `CMAKE_C_FLAGS`, `CMAKE_CXX_FLAGS` and `CMAKE_EXE_LINKER_FLAGS` as `cmake` automatically reads `CC`, `CXX`, `CFLAGS`, `CXXFLAGS` and `LDFLAGS` from the environment

## Build
- `cmake` can be built with `make` without requiring `ninja`,`samu` or `muon`

## Package
- Absolute paths are allowed for `CMAKE_INSTALL_<dir>`, but are not recommended

## Other
- `cmake` interprets `1/ON/YES/TRUE/Y` as `true`; glaucus recommends using `ON`
- `cmake` interprets `0/OFF/NO/FALSE/N/IGNORE/NOTFOUND` as `false`; glaucus recommends using `OFF`

## Old
- Bootstrapping used to fail when `$MAKE` was set as it expects `cmake_make_processor=$MAKE` which is `make` on glaucus

## References
- https://cmake.org/cmake/help/latest/command/install.html
- https://cmake.org/cmake/help/latest/manual/cmake-variables.7.html
- https://cmake.org/cmake/help/latest/module/GNUInstallDirs.html
- https://cmake.org/cmake/help/latest/policy/CMP0192.html
- https://linuxfromscratch.org/blfs/view/svn/kde/extra-cmake-modules.html
