---
title: libpng
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `apng` support will be upstreamed (previously apng was not part of the PNG specification)
- `autogen.sh` will not run if `configure` is present (check `INSTALL` file if necessary)
- `--enable-intel-sse` is for the SSE instruction set (not for Intel CPUs only)
- `pngminus` depends on `libpng` itself
