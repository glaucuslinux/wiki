---
title: python
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Depends on `libgcov.a` from `gcc`
- Add `gdbm` as a build-time dependency: https://docs.python.org/3/using/configure.html
- `--with-pymalloc` provides better performance
- Remove the `pip` symlinks in install if it is not being installed
- Check `--disable-test-modules`
- Alpine and Arch provide "Externally Managed" python
