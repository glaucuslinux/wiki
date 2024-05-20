---
title: mimalloc
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Apparently it causes random segfaults when used for everything as `LD_PRELOAD` in `.profile` so be careful

- openmandriva is the only distribution that uses mimalloc instead of mallocng: https://github.com/OpenMandrivaAssociation/musl/commit/275cbeb5d0a4874610d36f92bcf66d932a0fa0ff

- jemalloc, mimalloc, and rpmalloc are "modern allocators"
- mimalloc is more than 2.5× faster than tcmalloc and jemalloc
- musl's new default allocator malloc-ng is based on hardened_malloc:
  - https://www.openwall.com/lists/musl/2020/05/13/1

- No need to have a secure version? Because because all allocators should be secure:
  - https://github.com/struct/isoalloc/blob/master/SECURITY_COMPARISON.MD
- requires `cmake` to build

## TODO
* secure version: https://git.alpinelinux.org/aports/tree/community/mimalloc2/APKBUILD

* patch inside musl: https://git.alpinelinux.org/aports/tree/community/mimalloc2/APKBUILD
  - https://github.com/OpenMandrivaAssociation/musl
  - https://github.com/OpenMandrivaAssociation/musl/blob/master/musl-1.2.3-mimalloc-glue.patch
  - https://github.com/OpenMandrivaAssociation/musl/blob/master/import-mimalloc.sh
  - https://github.com/OpenMandrivaAssociation/musl/blob/master/musl.spec
