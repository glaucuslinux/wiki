---
title: xz
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Configure
- Check if `--enable-sandbox=landlock` fails at run-time on kernels configured with `CONFIG_SECURITY_LANDLOCK=n`
- Check if `--enable-small` causes major performance regressions or not
- Check if `SKIP_WERROR_CHECK=yes ./configure` and `./configure --disable-werror` are equivalent

## Configure
- `alpine`'s patch is still needed even after `--disable-rpath`
- `--enable-external-sha256` does not work with `musl` and is slower than the internal `sha256` implementation (see `INSTALL`)
- `doxygen` is disabled by default
- `lzma2` encoder requires that `lzma1` support is also enabled
- Leave the default `decoders` and `checks` set to `all`
- Match finders are only used when encoding (`bt2` and `bt3` are effectively unused variants hidden from presets `0` through `9`)
- `lzma1` and `lzma2` encoders share the same set of match finders
- `xz` can decompress `.lz` files starting from `5.4.0` so consider removing `--disable-lzip-decoder` if `lzip` support is really needed
- `microlzma` is needed for `erofs-utils`
- `musl` does not support symbol versions which are enabled by default on `linux` so explicitly pass `--disable-symbol-versions`
- No need to pass `--enable-assume-ram`
- `--enable-path-for-scripts` prepends `PREFIX` to `PATH` in `scripts` which we disable
- `--enable-unaligned-access` is probably enabled by default

## Package
- Shipping `xzdec` and `lzmadec` without size optimizations and statically-linked `liblzma` isn't very useful (see `PACKAGERS`)

## Other
- Both `pxz` and `pixz` depend on `xz` and do not provide `liblzma` and hence are not drop-in replacements for `xz`
- `COPYING.LICENSE` files include the different licenses used by `xz` (they also switched their `Public Domain` files to `0BSD`)
- `tarlz` is faster than `lzip` in compression but is equal in decompression
- The `extra` directory contains relatively "dangerous" scripts that can cause corruption
- `toybox` plans to provide partial replacements for `xz` and utilities in its roadmap

## References
- https://github.com/tukaani-project/xz/blob/master/INSTALL
- https://github.com/tukaani-project/xz/blob/master/PACKAGERS
