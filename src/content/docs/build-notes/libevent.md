---
title: libevent
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `got` and `tmux` (both from `openbsd`) depend on `libevent` (particularly `libevent_core.so` according to `llvm-readelf -d`)

## Prepare
- `cmake` is now the default build system and `autoconf` has been deprecated as of `2.2`
- `libevent` might require patching for `cmake` version `4+`, also use `-DCMAKE_POLICY_VERSION_MINIMUM=3.5`

## Configure
- `clang` is able to build `libevent` with `lto` when `-DEVENT__ENABLE_GCC_HARDENING=ON` unlike `gcc`
- Consider `-DEVENT__DISABLE_OPENSSL=ON` and `-DEVENT__DISABLE_THREAD_SUPPORT=ON` as nothing links against or loads `libevent_openssl.so` and `libevent_pthreads.so`
- `-DEVENT__DISABLE_MM_REPLACEMENT=ON` forces all memory management through `musl`'s default allocator and prevents the use of custom allocators
- Do not set `-DEVENT__FORCE_KQUEUE_CHECK=ON` as we are not cross-compiling `libevent`
- Enable `lto` for all compilers with `-DCMAKE_POLICY_DEFAULT_CMP0069=NEW`
- `EVENT__DOXYGEN` is `OFF` by default
- Use `-DEVENT__DISABLE_REGRESS=ON` to skip `regress_ssl.c` and `regress_http.c` that are known to fail due to incompatibilities
- Use `-DEVENT__LIBRARY_TYPE=SHARED` and not `-DBUILD_SHARED_LIBS=ON`
- Use `-DEVENT__LIBRARY_TYPE=SHARED` and not `-DEVENT_LIBRARY_TYPE=SHARED` as the latter is only used internally

## Package
- Remove `bin/event_rpcgen.py` as it is for development purposes only
