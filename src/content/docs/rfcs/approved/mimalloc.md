---
title: mimalloc
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Segfaults when used in `LD_PRELOAD`
- Depends on `cmake`
- `jemalloc`, `mimalloc`, and `rpmalloc` are "modern allocators"
- `mimalloc` is more than 2.5× faster than `tcmalloc` and `jemalloc`
- `musl` allocator `malloc-ng` is based on `hardened_malloc`
- All allocators should be secure; having a secure version does not make sense
- Alpaquita, Chimera, eweOS, OpenMandriva and Void all have experimental `mimalloc` support

## Resources
- https://chimera-linux.org/docs/configuration/musl
- https://dustri.org/b/files/blackalps_2022.pdf
- https://git.alpinelinux.org/aports/tree/community/mimalloc2/APKBUILD
- https://github.com/dolthub/musl
- https://github.com/dolthub/musl/commit/8aec69db0851e6e197e69b8dca8da3344190f6dd
- https://github.com/microsoft/mimalloc/issues/923
- https://github.com/OpenMandrivaAssociation/musl
- https://github.com/OpenMandrivaAssociation/musl/blob/master/import-mimalloc.sh
- https://github.com/OpenMandrivaAssociation/musl/blob/master/musl-1.2.3-mimalloc-glue.patch
- https://github.com/OpenMandrivaAssociation/musl/blob/master/musl.spec
- https://github.com/OpenMandrivaAssociation/musl/commit/275cbeb5d0a4874610d36f92bcf66d932a0fa0ff
- https://github.com/struct/isoalloc/blob/master/SECURITY_COMPARISON.MD
- https://taesoo.kim/pubs/2021/yun:hardsheap-slides.pdf
- https://www.linkedin.com/pulse/linux-testing-alternative-c-memory-allocators-emerson-gomes/
- https://www.linkedin.com/pulse/testing-alternative-c-memory-allocators-pt-2-musl-mystery-gomes/
- https://www.openwall.com/lists/musl/2020/05/13/1
- https://www.tweag.io/blog/2023-08-10-rust-static-link-with-mimalloc/
