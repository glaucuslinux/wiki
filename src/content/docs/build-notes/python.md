---
title: python
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Depends on `libgcov.a` from `gcc`
- Use bundled `mpdecimal`
- Add `gdbm` as a build-time dependency: https://docs.python.org/3/using/configure.html
- Test suite for Berkeley DB requires `tcl`
- `--with-pymalloc` provides better performance
- Remove the `pip` symlinks in install if it is not being installed
- Check `--disable-test-modules`
- Alpine and Arch provide "Externally Managed" python
- `--enable-optimizations` runs a suite of tests, and then uses collected profiling data to improve the performance of the installation itself, and some tests might hang in cross which is why a native rebuild is better with optimizations, once the system is complete
- Unable to use upstream binaries
