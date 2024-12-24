---
title: mimalloc
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Segfaults when used in `LD_PRELOAD`
- Depends on `cmake`
- `jemalloc`, `mimalloc`, and `rpmalloc` are "modern allocators"
- `mimalloc` is more than 2.5× faster than `tcmalloc` and `jemalloc`
- `musl` allocator `malloc-ng` is based on `hardened_malloc`: https://www.openwall.com/lists/musl/2020/05/13/1
- All allocators should be secure (having a secure version does not make sense): https://github.com/struct/isoalloc/blob/master/SECURITY_COMPARISON.MD
- openmandriva is the only distribution that uses `mimalloc` by default: https://github.com/OpenMandrivaAssociation/musl/commit/275cbeb5d0a4874610d36f92bcf66d932a0fa0ff

## Resources
- https://git.alpinelinux.org/aports/tree/community/mimalloc2/APKBUILD
- https://github.com/OpenMandrivaAssociation/musl
- https://github.com/OpenMandrivaAssociation/musl/blob/master/musl-1.2.3-mimalloc-glue.patch
- https://github.com/OpenMandrivaAssociation/musl/blob/master/import-mimalloc.sh
- https://github.com/OpenMandrivaAssociation/musl/blob/master/musl.spec
