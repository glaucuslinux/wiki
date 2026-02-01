---
title: python
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `autoreconf` breaks build
- Depends on `libgcov.a` from `gcc`
- Use bundled `mpdecimal`?
- Add `gdbm` as a build-time dependency: https://docs.python.org/3/using/configure.html
- Test suite for Berkeley DB requires `tcl`
- `--with-pymalloc` provides better performance
- Remove the `pip` symlinks in install if it is not being installed
- Check `--disable-test-modules`
- Alpine and Arch provide "Externally Managed" python
- `--enable-optimizations` runs a suite of tests, and then uses collected profiling data to improve the performance of the installation itself, and some tests might hang in cross which is why a native rebuild is better with optimizations, once the system is complete; these sometimes fail on musl
- Unable to use upstream binaries
- Alpine uses stack size patches to avoid segfaults with `sys.getrecursionlimit()`
- Adelie patches `posixmodule.h` to define `int login_tty(int);` as musl supports it
- `--with-system-ffi` has been deprecated
- No need to provide an `EXTERNALLY-MANAGED` file as we want users to use `pip` to manage python packages
- Should we create symlinks for `idle`, `pip` and `pydoc` to their `3` versions?
- Should we allow `pip` and other programming languages package managers to run as root alongside `rad`?; `cp externally-managed /usr/lib/python3.13/EXTERNALLY-MANAGED`
- Do we need to explicitly pass `--with-openssl=/usr`?
- Do we need to specify these?
```
ac_cv_header_bluetooth_bluetooth_h=no
ac_cv_header_bluetooth_h=no
```
- Consider adding `-DLIBEDIT_SUPPORT` to `EXTRA_CFLAGS`
- For `libedit` support, sabotage also does:
```
# Apple is not the only platform where libedit is used
sed -i 's/__APPLE__/LIBEDIT_SUPPORT/g' Modules/readline.c
# workaround readline bug by removing unnecessary strdup/setlocale calls
sed -i 's/HAVE_SETLOCALE/HAVE_SETLOCALE) \&\& !defined(LIBEDIT_SUPPORT/g' Modules/readline.c
sed -i 's@return readline@return feedline@' configure
```
- Support for `libressl` was dropped but then added again?
- Does `python` depend on `zstd`?

## References
- https://github.com/clearlinux-pkgs/python3/blob/main/README.clear
- https://packaging.python.org/en/latest/specifications/externally-managed-environments/
- https://peps.python.org/pep-0644/
- https://peps.python.org/pep-0668/
- https://rfc.archlinux.page/0010-adopt-pep517-tooling/
- https://rfc.archlinux.page/0020-sources-for-python-packaging/
