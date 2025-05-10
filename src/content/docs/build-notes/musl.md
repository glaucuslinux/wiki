---
title: musl
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- Depends on `mawk`
- `install-tools` is for the wrapper `musl-gcc`
- Do not set the prefix to `/usr`, `/usr/local`, or `/` unless upgrading libc on an existing musl-based system (this will break your existing system after running `make install` making it difficult to recover)
- The dynamic linker searches for shared libraries at run time under directories listed in `/etc/ld-musl-$ARCH.path` separated by colons or newlines
- If the dynamic linker has been installed in a non-default location, the path needs to reside at that location (`../etc` relative to the chosen `syslibdir`)
- `DT_RELR` support (`-z pack-relative-relocs`) has been upstreamed, and reduces size by 5 - 8%
- Does `musl` conflict/replace `libssp` (the standalone package)
- `gencat` requires `queue.h`
- Alpaquita statically links against `glibc-string`; a library that provides extra performance optimizations for string manipulation and memory functions
- Alpaquita has patches to fix `ldd` output for `static-pie` executables
- Chimera surgically removes `musl`'s `malloc-ng` and replaces it with `mimalloc`
- `LC_ALL` overrides category-specific variables, and `LANG` provides a default for any category not set
- `MUSL_LOCPATH` - Colon-separated list of paths that will be searched for locale definitions. The requested locale name string will used as a filename and searched in each path component. If unset, locale files are not loaded and only the "C" locale is available. This variable is completely ignored in programs invoked setuid, setgid, or with other elevated capabilities
- musl provides empty `crti.o` and `crtn.o` for legacy `.init` and `.fini` support; use `.init_array` and `.fini_array` instead as they are the modern implementation (this means that `gcc` and `binutils` should be configured with `--enable-initfini-array`)
- Log messages will be discarded if `/dev/log` is absent

## References
- https://github.com/AppImage/type2-runtime/issues/116
- https://github.com/bell-sw/alpaquita-aports/blob/stream/core/musl-perf
- https://github.com/chimera-linux/cports/tree/master/main/musl
- https://github.com/orgs/chimera-linux/discussions/2480
- https://gitlab.alpinelinux.org/alpine/tsc/-/issues/58
- https://maskray.me/blog/2021-11-07-init-ctors-init-array
- https://musl.libc.org/manual.html
- https://rfc.archlinux.page/0023-pack-relative-relocs/
- https://wiki.gentoo.org/wiki/Musl_porting_notes
