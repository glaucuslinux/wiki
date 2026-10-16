---
title: Upcoming Release
description: An opinionated Linux® distribution based on musl libc and toybox
---

## What's new?
### Software
- [`clang`](https://clang.llvm.org/) is now the default c compiler!
- [`clang++`](https://clang.llvm.org/) is now the default c++ compiler!
- [`compiler-rt`](https://compiler-rt.llvm.org/) is now the default runtime compiler support libraries implementation!
- [`libc++`](https://libcxx.llvm.org/) is now the default c++ standard library!
- [`libc++abi`](https://libcxxabi.llvm.org/) is now the default c++ standard library support!
- [`lld`](https://lld.llvm.org/) is now the default linker!
- [`llvm binary utilities`](https://llvm.org/docs/CommandGuide/#gnu-binutils-replacements) are now the default binutils implementation!
- [`flex`](https://github.com/westes/flex) is now the default lex implementation!
- [`fping`](https://fping.org/) is now the default ping implementation!
- [`please`](https://codeberg.org/retucio/please) is now the default privilege escalation tool!
- [`sortix libz`](https://sortix.org/libz/) is now the default zlib implementation!
- [`u-config`](https://github.com/skeeto/u-config) is now the default pkg-config implementation!
- [`wak`](https://github.com/raygard/wak) is now the default awk implementation!
### Notes
- `clang` by design is a cross compiler; this means that glaucus bootstraps faster as it now skips the `toolchain` stage entirely!
- Updated cerata
