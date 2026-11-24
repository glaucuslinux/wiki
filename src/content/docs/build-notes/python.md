---
title: python
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Prepare
- Check if `libgcov.a` from `gcc` is required
- Check if `python` still supports `libressl`
- Check if `zstd` is required
### Package
- Check if we should create symlinks for `idle`, `pip` and `pydoc` to their `3` versions

---

## Prepare
- `autoreconf` breaks build
- Depends on system `expat` and `mpdecimal` as bundled version is scheduled for removal in `3.16` (see `configure.ac`)
- Depends on `which`

## Build
- Do not build `python` out-of-tree as it attempts to clean the directory `./build` and errors out doing so

## Configure
- `universalsdk` and `framework` are `macos` specific and are disabled by default on `linux` (see `configure.ac` and `Mac/README.rst`)
- `wasm-dynamic-linking` and `--enable-wasm-pthreads` are `wasm` specific and are also disabled by default (see `configure.ac` and `Mac/README.rst`)
- `--disable-gil` enables free threading support for `python` by disabling the `gil` which improves multi-threaded performance and causes a slight overhead for single-threaded workloads (it also strictly relies on the bundled `mimalloc` and not `pymalloc`) (see `configure.ac`)
- `profiling` and `pystats` are disabled by default (see `configure.ac`)
- Do not enable `optimizations` as it enables `pgo` which runs tests (some of which may hang) and collects profiling data to improve performance and is disabled by default (it also requires `llvm-profdata`) (see `configure.ac`)
- Do not enable `bolt` as it runs the post-link optimizer `llvm-bolt` after `pgo` which requires profiling data from representative workloads and is disabled by default (see `configure.ac`)
- Explicitly enable `safety` as it adds `-fstack-protector-strong`, `-Wtrampolines`, `-Wimplicit-fallthrough`, `-Werror=format-security`, `-Wbidi-chars=any` and `-Wall` to `CFLAGS` and is disabled by default (see `configure.ac`)
- `clang` does not support `-Wtrampolines` and `-Wbidi-chars=any` as it does not implement `gcc`'s nested functions
- Explicitly enable `slower-safety` as it adds `-U_FORTIFY_SOURCE -D_FORTIFY_SOURCE=3` to `CFLAGS` and is disabled by default (see `configure.ac`) (glaucus already has `-U_FORTIFY_SOURCE -D_FORTIFY_SOURCE=3 -isystem /usr/include/fortify` in the global `CPPFLAGS`)
- `experimental-jit` is disabled by default and enabling it requires `gil` which glaucus disables in favor of a free-threaded `python` (see `.configure.ac`)
- `loadable-sqlite-extensions` are disabled by default (see `configure.ac`)
- Explicitly enable `ipv6` as the default is to check for `AF_INET6` which `musl` supports (see `configure.ac`)
- `big-digits` for `long` defaults to `30` (see `Include/pyport.h` and `Include/cpython/longintrepr.h`)
- Explicitly disable `test-modules` as they are enabled by default (see `configure.ac`)
- `--with-build-python` is only required when cross-compiling `python` and is not relevant for a native build (see `configure.ac`)
- Explicitly specify `--with-pkg-config` (or `--with-pkg-config=yes`) as it makes `$PKG_CONFIG` mandatory and `./configure` fails if `$PKG_CONFIG` is not found in path unlike the default behavior which only checks without failing (see `configure`)
- `--with-universal-archs` is `macos` specific and is meaningless on `linux` where `universalsdk` is disabled by default (see `configure.ac` and `Mac/README.rst`)
- `--with-framework-name` is `macos` specific and is meaningless on `linux` where `framework` is disabled by default (see `configure.ac` and `Mac/README.rst`)
- `--with-app-store-compliance` is `macos` specific and is meaningless on `linux` (see `configure.ac` and `Mac/README.rst`)
- Do not set executable suffix `--with-suffix` and leave the default value which is empty on `linux` (see `configure.ac`)
- Explicitly disable `static-libpython` as it is enabled by default (see `configure.ac`)
- `pydebug` and `assertions` are disabled by default (see `configure.ac`)
- `trace-refs` are disabled by default and enabling them requires `gil` which glaucus disables (see `configure.ac`)
- `lto` is disabled by default so explicitly specify `--with-lto=thin` as glaucus defaults to `clang` (this also requires `llvm-ar`) (see `configure.ac`)
- `strict-overflow` is disabled by default, this means that `-fno-strict-overflow` is passed which prevents the compiler from performing this optimization that may cause code miscompilations (see `configure.ac`)
- `dsymutil` is `macos` specific and is disabled by default on `linux` (see `configure.ac`)
- `address-sanitizer`, `memory-sanitizer`, `undefined-behavior-sanitizer` and `thread-sanitizer` are fragile on `musl` and are disabled by default, they also disable `pymalloc` (when they are enabled) as it interferes with the sanitizers (see `configure.ac`)
- `hash-algorithm` defaults to `siphash13` as `siphash24` is older and `fnv` is not as cryptographically strong (see `configure.ac`)
- `--without-tzpath` and `--with-tzpath=no` are invalid so leave the default value (see `configure.ac`)
- Do not use `--without-libs` as it does not link against any additional libs by default (see `configure.ac`)
- Explicitly use `--with-system-expat` as the bundled version is used by default (see `configure.ac`)
- `--with-system-libmpdec` is used by default as the bundled version is scheduled for removal in `3.16` (see `configure.ac`)
- `--with-decimal-contextvar` defaults to `coroutine-local` rather than `thread-local` context which is better for modern `python` and `async` code (see `configure.ac`)
- `--without-dbmliborder` and `--with-dbmliborder=no` are invalid so leave the default value `gdbm:ndbm:bdb` as it only controls the detection order for the optional `dbm.ndbm` module and does not make `python` depend on `bdb`, `gdbm`, `ndbm` (see `configure.ac`)
- Explicitly disable `doc-strings` as they are enabled by default (see `configure.ac`)
- Force enable the bundled `mimalloc` as we already disable the `gil` and the default is to check for `stdatomic.h` (see `configure.ac`)
- Explicitly disable `pymalloc` as it requires the `gil` which we disable (see `configure.ac`)
- `c-locale-coercion` is enabled by default and it prevents `python` from "misbehaving" on a `UTF-8` byte (see `configure.ac`)
- `valgrind` and `dtrace` are disabled by default (see `configure.ac`)
- No need to specify `--with-libm` as it defaults to `-lm` (see `configure.ac`)
- No need to specify `--with-libc` as the default value is empty so leave it (see `configure.ac`)
- No need to specify `--with-platlibdir` as it defaults to `lib` and glaucus does not support or provide `lib64` (see `configure.ac`)

- Remove the `pip` symlinks in install if it is not being installed
- Alpine and Arch provide "Externally Managed" python
- Unable to use upstream binaries
- Alpine uses stack size patches to avoid segfaults with `sys.getrecursionlimit()`
- Adelie patches `posixmodule.h` to define `int login_tty(int);` as musl supports it
- `--with-system-ffi` has been deprecated
- No need to provide an `EXTERNALLY-MANAGED` file as we want users to use `pip` to manage python packages
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

## References
### Offline
- configure
- configure.ac
- Makefile.pre.in
- Misc/python-config.sh.in
- Modules/config.c.in
- Modules/Setup
- Modules/Setup.bootstrap.in
- pyconfig.h.in
- README.rst
### Online
- https://docs.python.org/3/howto/free-threading-python.html
- https://docs.python.org/3/using/configure.html
- https://packaging.python.org/en/latest/specifications/externally-managed-environments/
- https://peps.python.org/pep-0456/
- https://peps.python.org/pep-0644/
- https://peps.python.org/pep-0668/
- https://rfc.archlinux.page/0010-adopt-pep517-tooling/
- https://rfc.archlinux.page/0020-sources-for-python-packaging/
