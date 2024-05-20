---
title: LFS64
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- musl 1.2.4 is removing LFS64 symbols (glibc only?)

## Resources
- https://github.com/NixOS/nixpkgs/pull/229439
- https://git.alpinelinux.org/aports/log/?qt=grep&q=lfs64
- https://git.alpinelinux.org/aports/tree/main/acl
- https://github.com/NixOS/nixpkgs/pull/229440

## Packages That Might Complain
1. acl
2. binutils
3. btop
4. cmake
5. dash
6. e2fsprogs
7. efivar
8. findutils
9. gcc
10. libarchive
11. libpciaccess
12. linux
13. m4
14. make
15. mawk
16. musl
17. nginx
18. perl
19. perl-module-build-tiny
20. python
21. rust (exist PR https://github.com/rust-lang/libc/pull/2935)
22. vim
23. wget2
