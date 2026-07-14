---
title: Variables
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Reconsider
- `ARFLAGS`
- `CCLD`: overriden internally in autotools?
- `CPATH=$cross/usr/include`
- `CPPFLAGS`: for skarnet packages?
- `LD_LIBRARY_PATH=$cross/usr/lib`
- `LFLAGS`: lex flags
- `LIBRARY_PATH=$cross/usr/lib`
- `SFLAGS`
- `STRIPPROG`
- `YFLAGS`: yacc flags

## Rejected
- Do we need any LD variables as glaucus now defaults to `lld`?

```sh
# To cross-compile mawk we can pass `--with-build-cc` and others, but it is better to let the build system decide
BUILD_CC
BUILD_CPP
BUILD_CFLAGS
BUILD_CPPFLAGS
BUILD_LDFLAGS

# For Meson
CC_LD
CXX_LD

# For the kernel, not required (they are set correctly by default)
HOSTAR
HOSTCPP
HOSTCXX
HOSTLD

HOSTNM # This means HOSTNAME and not Host's NM so don't use it

# For the kernel, currently not required
HOSTCFLAGS
HOSTCXXFLAGS
HOSTLDFLAGS

# Similar to HOSTCFLAGS and HOSTLDFLAGS, also nothing appears to use them
HOST_CFLAGS
HOST_LDFLAGS

# This might be needed for packages that fail to build with `mold`
# LD=$LDBFD \
LDBFD=x86_64-glaucus-linux-musl-ld.bfd

# We are using GNU libtoolize
LIBTOOLIZE=slibtoolize

# Better have a file stub
MAKEINFO=true

# No need to overset variables
MKDIR
MKDIR_P
MV

# Nothing uses it
STRINGS
```
