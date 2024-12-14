---
title: Variables
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- We don't need any LD variables as we default to bfd

```sh
# To cross-compile mawk we can pass `--with-build-cc` and the rest, but it is generally better to let the build system figure things out
BUILD_CC
BUILD_CPP
BUILD_CFLAGS
BUILD_CPPFLAGS
BUILD_LDFLAGS

# These are for Meson
CC_LD
CXX_LD

# These are mainly used by the kernel, and we don't need them
HOSTCFLAGS
HOSTCXXFLAGS
HOSTLDFLAGS

# Similar to HOSTCFLAGS and HOSTLDFLAGS, also nothing appears to use them
HOST_CFLAGS
HOST_LDFLAGS

# These are mainly used by the kernel, and we don't need them (they are set correctly by default)
HOSTAR
HOSTCPP
HOSTCXX
HOSTLD

HOSTNM # This means HOSTNAME and not Host's NM so don't use it

# This might be needed for packages that fail to build with `mold`
# LD=$LDBFD \
LDBFD=x86_64-glaucus-linux-musl-ld.bfd

# What to do with this?
MAKEINFO="true" ??

# No need to overset variables
MKDIR
MKDIR_P
MV

# Nothing uses it
STRINGS
```
