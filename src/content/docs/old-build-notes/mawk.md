---
title: mawk
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Prepare
- `autoreconf -vfis` does not work

## Configure
- Does not support `localedir`
- To cross-compile mawk we can pass `--with-build-cc` and others, but it is better to let the build system decide
```sh
BUILD_CC
BUILD_CPP
BUILD_CFLAGS
BUILD_CPPFLAGS
BUILD_LDFLAGS
```

## Other
- Benchmarks for 100 million integers:
```sh
gawk
real    1m21.410s
user    1m20.955s
sys     0m0.245s

mawk
real    0m17.824s
user    0m17.630s
sys     0m0.146s

mawk2
real    0m18.384s
user    0m18.099s
sys     0m0.238s

# nawk is ~2 times slower than gawk
```

## References
- https://awklab.com/practical-awk-benchmarking
- https://youtube.com/watch?v=mf-_ZRUBc5g
