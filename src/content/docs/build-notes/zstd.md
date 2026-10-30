---
title: zstd
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Prepare
- The `notrace` patch is only for gcc 10, and is not needed with gcc 11+ as LTO works with zstd

## Build
- `zstd` was benchmarked with `zstd -b3 -e9 -i3 $file`
- `gcc`'s `-O3` regresses both in size and performance (up to 50% performance loss)
- `-Os` also results in performance regressions
- `-O2` produces the best results for both `clang` and `gcc`
- `LDFLAGS` can be passed using `LDFLAGS_DYNLIB="$LDFLAGS" make` not `make LDFLAGS_DYNLIB="$LDFLAGS"` as the latter removes `-pthread`
- `make -C lib libzstd` only builds the dynamic library
- `make lib-mt` force enables multithreading on both dynamic and (the removed) static libraries and it is not needed
- The dynamic library is multithreaded and the static library is single-threaded by default
- `make -C programs zstd-dll` builds `zstd` as a thin wrapper around the dynamic `libzstd.so` library that was just built
- `make -C programs zstd-dll` target produces a much smaller `zstd` compared to `make zstd`
- `HASH=xxhsum` uses the faster `xxhash` instead of the default `md5sum` but introduces a build-time only dependency on `xxhash`
- `HAVE_ZLIB`, `HAVE_LZMA` and `HAVE_LZ4` are only relevant for `programs` and are enabled if detected so disable them explicitly
- `ZSTD_LIB_MINIFY=1` overrides `CFLAGS` with `-Oz` if `CC` is set to `clang` which results in performance regressions
- `ZSTD_NO_ASM=0` is set by default
- `ZSTD_NOBENCH`, `ZSTD_NODICT` and `ZSTD_NOTRACE` are preprocessor macros that shouldn't be passed as `make` variables
- Do not override `CFLAGS` to pass preprocessor macros, instead use `CPPFLAGS`
- Do not override `CFLAGS` for `lib` with `make -C lib CFLAGS="$CFLAGS"` as it removes `-fPIC` and other default flags including warnings

## Package
- Do not use the `make install` target as it builds and installs the static library as well
- `PKGCONFIGDIR` controls where the `.pc` file is installed (not `PCLIBDIR`)
- `-pthread` is included in `libzstd.pc` and is automatically passed when linking against it

## Other
- `make` is the official build system (other build systems, though compatible, are maintained by 3rd-parties)
- Level `3` is good enough; after level `19` it will regress
- Prefer `zstd -T0` to `zstdmt` and `pzstd` as it is more modern
- Static library can be disabled with `cmake`
- Support for decoding legacy formats will be disabled by default (`ZSTD_LEGACY_SUPPORT=0`) from `1.6.0`
- `zstd` is multithreaded, faster and more widely adopted compared to `brotli`

## Old
- `clear`'s `fopen` patch has an m mode (rbm) that is only for `glibc`

## References
- https://github.com/facebook/zstd/blob/dev/examples/README.md
- https://github.com/facebook/zstd/blob/dev/lib/README.md
- https://github.com/facebook/zstd/blob/dev/programs/README.md
- https://github.com/facebook/zstd/blob/dev/tests/README.md
- https://helpful.knobs-dials.com/index.php/Compression_notes
- https://peazip.github.io/fast-compression-benchmark-brotli-zstandard.html
