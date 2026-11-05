---
title: LFS64
description: An opinionated Linux® distribution based on musl libc and toybox
---

- musl 1.2.4 removed LFS64 symbols (glibc only?)

## Packages That Might Complain
- btop
- cmake
- e2fsprogs
- efivar
- libarchive
- libpciaccess
- linux
- m4
- make
- musl
- perl
- perl-module-build-tiny
- python
### Packages That Might Complain But No Longer Exist on glaucus
- acl (before 2.3.2)
- binutils
- dash
- findutils
- gcc
- mawk
- nginx
- rust (exist PR https://github.com/rust-lang/libc/pull/2935)
- vim
- wget2

## References
- https://git.alpinelinux.org/aports/log/?qt=grep&q=lfs64
- https://git.alpinelinux.org/aports/tree/main/acl
- https://github.com/NixOS/nixpkgs/pull/229439
- https://github.com/NixOS/nixpkgs/pull/229440
- https://os-wiki.ewe.moe/dev/topic/toolchain/musl
