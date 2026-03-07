---
title: mlibc
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Replaces `musl`
- Depends on `frigg` which optionally depends on `gtest` and `mimalloc`
- `-Duse_freestnd_hdrs=enabled` is required for `frigg` to properly include its headers given that `-nostdinc` is being passed
- Requires `-Dwrap_mode=nodownload` be removed as it pulls `frigg` and the freestanding headers when building which renders the build not fully offline
- Does not support `-z,now`
- Depends on static `libgcc.a` for `__mulsc3` and `__muldc3` for `x86-64` (even with `-Dlibgcc_dependency=false`)
- `gcc` does not recognize `mlibc` without updating `config.sub`

## Experiments with `mlibc` version `6.3.1`
- The following tuple was used `x86_64-linux-mlibc` for both `host` and `target`; `mlibc` is already niche enough to drive `gcc` into thinking we are cross-compiling which did not require an `x86_64-glaucus-linux-mlibc` tuple
- Both `rad` and `meson.cross` were updated to use the above tuple
- Build order:
```sh
linux-headers # required as mlibc-headers include headers from the kernel)

mlibc-headers
  "$core"/muon/files/glaucus-meson \
  --cross-file="$core"/muon/files/meson.cross \
    -Dheaders_only=true \
    -Dlinux_kernel_headers="$cross/usr/include" \
    build-headers

binutils
gcc
  # required passing `--disable-libgomp` and disabling most of `libstdcxx` options to build
  # for static libgcc, `CFLAGS_FOR_TARGET="-pipe -O0 -I$cross/usr/include"` was passed

mlibc
  LDFLAGS="-Wl,$toolchain/lib/gcc/$host/15.2.0/libgcc.a" \
  "$core"/muon/files/glaucus-meson \
    --cross-file="$core"/muon/files/meson.cross \
    -Dno_headers=true \
    -Dlibgcc_dependency=false \
    -Dlinux_kernel_headers="$cross/usr/include" \
    -Duse_freestnd_hdrs=enabled \
    -Dld_library_name=ld-linux-$nom \
    build

libgcc
libstdc++-v3
```
- The following were patched to support `mlibc`:
```
gcc/config/linux.h
gcc/config.gcc
libstdc++-v3/config/os/gnu-linux/os_defines.h
libstdc++-v3/configure
```
- Requires updating the `config.sub`s of every project being built for now to recognize `mlibc`
- Breakages early on in `cross` with `netbsd-curses` and `skalibs`
- Large `libc.so` size `4.2 M` after `toolchain` is built (compared to `musl`)
- Very promising compared to other alternative C libraries, but not ready yet

## References
- https://github.com/LittleCodingFox/ToastOS
- https://github.com/managarm/bootstrap-managarm
- https://github.com/managarm/frigg
- https://github.com/managarm/managarm
- https://github.com/managarm/mlibc
- https://github.com/managarm/mlibc-crossers
- https://github.com/mathewnd/astral
- https://github.com/no92/linux-mlibc
