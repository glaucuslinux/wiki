---
title: Errors
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Cross
### e2fsprogs
```c
ln: failed to create symbolic link 'glaucus/cross/usr/lib/libcom_err.so.2': File exists
ln: failed to create symbolic link 'glaucus/cross/usr/lib/libcom_err.so': File exists

/usr/bin/ldconfig: Can't create temporary cache file /etc/ld.so.cache~: Permission denied

/bin/sh: line 2: @echo: command not found

make[1]: [Makefile:378: libext2fs.dvi] Error 1 (ignored)
make[1]: [Makefile:466: install-shlibs] Error 1 (ignored)
make[1]: [Makefile:466: install] Error 1 (ignored)
make[1]: [Makefile:476: install-shlibs] Error 1 (ignored)
make[1]: [Makefile:476: install] Error 1 (ignored)
make[1]: [Makefile:468: install-shlibs] Error 1 (ignored)
make[1]: [Makefile:468: install] Error 1 (ignored)
make[1]: [Makefile:664: install-shlibs] Error 1 (ignored)
make[1]: [Makefile:664: install] Error 1 (ignored)
```

### gcc
```c
checking what otool to use... not found

checking for exported symbols... glaucus/tmp/src/gcc/libcc1/configure: line 15097: -T: command not found

checking for -rdynamic... glaucus/tmp/src/gcc/libcc1/configure: line 15107: -T: command not found

make[2]: [Makefile:1819: x86_64-glaucus-linux-musl/bits/largefile-config.h] Error 1 (ignored)
make[2]: [Makefile:1820: x86_64-glaucus-linux-musl/bits/largefile-config.h] Error 1 (ignored)
```

### util-linux
```c
configure: WARNING: po4a not found; not building translated man pages
configure: WARNING: building for glibc not found; not building col
```

## Toolchain
### gcc
```c
checking what otool to use... not found
```

### libstdc++-v3
```c
make[1]: [Makefile:1819: x86_64-glaucus-linux-musl/bits/largefile-config.h] Error 1 (ignored)
```

## Native
### automake
```c
configure: WARNING: Fortran compiler cannot create executables
configure: WARNING: Fortran 77 compiler cannot create executable
```

### e2fsprogs
```c
ln: cannot create symbolic link from 'libcom_err.so.2.1' to '/var/cache/rad/pkg/e2fsprogs/sac/usr/lib/libcom_err.so.2': File exists

ln: cannot create symbolic link from 'libcom_err.so.2' to '/var/cache/rad/pkg/e2fsprogs/sac/usr/lib/libcom_err.so': File exists

/bin/sh: line 2: @echo: command not found

make[1]: [Makefile:378: libext2fs.dvi] Error 1 (ignored)
```

### gcc
```c
checking what otool to use... not found

make[2]: [Makefile:1819: x86_64-pc-linux-musl/bits/largefile-config.h] Error 1 (ignored)
make[2]: [Makefile:1820: x86_64-pc-linux-musl/bits/largefile-config.h] Error 1 (ignored)
```

### iputils
```c
warn dependency ['systemd'] not found
warn library 'disabler-appears-to-disable-executable-build' not found
warn dependency ['libidn2'] not found
```

### mandoc
```c
tested noop-static: no (compilation failed)
```

### perl
```c
WARNING: You've never run 'make test' or some tests failed! (Installing anyway.)
```

### rsync
```c
checking if md2man can create manpages... no - python3 not found
```

### shadow
```c
configure: WARNING: libcmocka not found, cmocka tests will not be built
```

### util-linux
```c
configure: WARNING: po4a not found; not building translated man pages
configure: WARNING: building for glibc not found; not building col

<built-in>: fatal error: when writing output to : Broken pipe

ERROR: You must have bison version >= 2.x, but you have.
```

### wget2
```c
configure: WARNING: *** libgnutls-dane was not found.

./configure: line 72846: --version: command not found

configure: WARNING: *** liblz was not found. You will not be able to use lzip decompression
```
