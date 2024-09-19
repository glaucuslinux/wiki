---
title: libpng
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- apng support will be streamlined (previously apng was not part of the PNG specification, hence libpng did not support it without a patch, but now it is)
- `autogen.sh` will not run if `configure` is present (check `INSTALL` file if necessary)
- `--enable-intel-sse` is for the SSE instruction set (not for Intel CPUs only)
