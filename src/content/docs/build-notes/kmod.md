---
title: kmod
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Depends on `gtkdocize`
- Build system no longer uses autotools, and has switched to `meson` instead
- `depmod.d` and `modprobe.d` are now created by default with the new `meson` build system
- Disable `logging` support?
- `--without-bashcompletiondir` creates a directory called `crossno` where completion files are installed (a bug)
- Test suite requires raw sanitized kernel headers
