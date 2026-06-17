---
title: cosmopolitan
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Replaces `musl`
- Poor bootstrappability; requires `cosmocc` which is a zip file containing 2 GB worth of binaries to bootstrap itself
- Provides a platform independent libc (c standard library) that gets statically compiled into your app
- Fast implementations of functions (e.g. `memcpy()` and `strcpy()`) given it is very focused on `x86-64` and optimizations

## References
- https://github.com/jart/cosmopolitan
- https://github.com/jart/cosmopolitan/issues/50
- https://github.com/jart/cosmopolitan/issues/820
- https://github.com/jart/cosmopolitan/issues/1117
- https://mike.fo/blog/nim-is-actually-portable
- https://raymii.org/s/blog/Bare_Metal_Boot_to_Vi.html
