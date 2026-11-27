---
title: python
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Build
- Check if it builds with `--pack-dyn-relocs=relr`
- Check if we need to specify stack size in flags using `LDFLAGS="-Wl,-z,stack-size=$size"` and `CPPFLAGS="-DTHREAD_STACK_SIZE=$size"` where `size=0x200000` (2 MB)

---

## Prepare
- `autoreconf` breaks build
- `Modules/_ssl.c` as of version `3.14.2` requires patching to work with `libressl` version `4.2.1`
- Depends on system `expat` and `mpdecimal` as bundled version is scheduled for removal in `3.16` (see `configure.ac`)
- Depends on `which` in `$PATH`
- Depends on `libgcov.a` from `gcc` when `--enable-optimizations` is enabled for `pgo`
- No need to manually remove modules under `Modules/` as both `expat` and `mpdecimal` support the `--with-system` switch and `test-modules` can be explicitly disabled

## Configure
- `universalsdk` and `framework` are `macos` specific and are disabled by default on `linux` (see `configure.ac` and `Mac/README.rst`)
- `wasm-dynamic-linking` and `--enable-wasm-pthreads` are `wasm` specific and are also disabled by default (see `configure.ac` and `Mac/README.rst`)
- `--enable-shared` provides a shared `python` library `libpython.so` which comes with a performance penalty like `perl`'s `-Duseshrplib`
- `--disable-gil` enables free threading support for `python` by disabling the `gil` which improves multi-threaded performance and causes a slight overhead for single-threaded workloads (it also strictly relies on the bundled `mimalloc` and not `pymalloc` and renames `/usr/lib/python3.14` to `/usr/lib/python3.14t`) (see `configure.ac`)
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
- No need to specify `--with-wheel-pkg-dir` as it is empty by default and glaucus already disables `ensurepip` (see `configure.ac`)
- Explicitly disable the `readline` module using `--without-readline` as it defaults to `readline` and the `repl` now relies on `pyrepl` as of `3.13` (this will cause issues when `import readline` is used, but the `repl` still works, and even then `python` is only provided to satisfy some build scripts) (see `configure.ac`)
- Explicitly specify `--with-computed-gotos` as the default is to check for support which `clang` has (see `configure.ac`)
- Explicitly disable `computed-gotos` as `python` checks then enables it by default (see `configure.ac`)
- Explicitly enable the `tail-call` interpreter as `python` disables it by default (see `configure.ac`)
- `clang` supports both the older `computed-gotos` interpreter and the relatively newer `tail-call` interpreter
- Prefer the relatively newer `tail-call` interpreter over the older `computed-gotos` interpreter
- The `tail-call` interpreter benefits greatly when `clang` is used and with `--enable-optimizations` which we currently disable
- Explicitly disable `remote-debug` as it is enabled by default (see `configure.ac`)
- Explicitly disable `ensurepip` as the default is to `upgrade` using bundled `pip` after `make install` (this does not prevent `ensurepip` from being installed so we'll have to manually remove it) (see `configure.ac`)
- Do not set `--with-openssl` as glaucus already installs `libressl` system-wide (which is compatible with `openssl` paths)
- `--with-openssl-rpath` is disabled by default (see `configure.ac`)
- Only set `--with-openssl=$customDir/usr` and `--with-openssl-rpath=auto` when `libressl` is installed inside `$customDir` (e.g. when building on a host machine with a different `ssl` library that we want to avoid, may also require `LDFLAGS=-L$customDir/usr/lib`)
- Explicitly specify `--with-ssl-default-suites=openssl` as it defaults to `python` which is a curated set of strict selections and while that is generally better than untouched defaults on systems that use regular `openssl`, it is not necessarily the better option on glaucus as we use `libressl` and trust its defaults (see `configure.ac`)
- No need to specify `--with-builtin-hashlib-hashes` as it defaults to `md5,sha1,sha2,sha3,blake2` which is good (see `configure.ac`)
- `--with-system-ffi` was removed (see `Misc/HISTORY` and `Misc/NEWS`)

## Build
- Do not build `python` out-of-tree as it attempts to clean the directory `./build` and errors out doing so
- No need to specify `CFLAGS_NODIST`, `CXXFLAGS_NODIST` and `LDFLAGS_NODIST` as build system automatically picks up global `$CFLAGS`, `$CXXFLAGS` and `$LDFLAGS`

## Package
- All `install` targets use `all` target as synchronization point to prevent race conditions with `pgo` builds (see `Makefile.pre.in`)
- `installapps`, `installunixtools`, `altinstallunixtools` and `installextras` targets are `macos` specific
- `commoninstall` target includes `altbininstall`, `libinstall`, `inclinstall`, `libainstall`, `sharedinstall` and `altmaninstall`
- `altinstall` calls `commoninstall`
- `bininstall` also calls `commoninstall`
- Either manually strip `/usr/lib/libpython3.14t.so.1.0` using `--strip-unneeded` (as `STRIPFLAGS=-s` only strips binaries) or rely on `--strip-all` in our global `$LDFLAGS` to do so (see `Makefile.pre.in`)
- We manually remove `ensurepip/`, `idlelib/`, `pydoc*`, `tkinter/` and `turtle*` as we have no use for `gui` and `ide` packages
- No need to manually remove `readme`, `changelog`, `todo` or `news` files as they are mostly under `$dir/usr/lib/python3.14t/idlelib/` which we explicitly remove
- No need to provide an `EXTERNALLY-MANAGED` marker file as we disable `ensurepip` post `make install` then manually remove the module

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
- https://blog.nelhage.com/post/cpython-tail-call/
- https://docs.python.org/3/howto/free-threading-python.html
- https://docs.python.org/3/using/configure.html
- https://packaging.python.org/en/latest/specifications/externally-managed-environments/
- https://peps.python.org/pep-0456/
- https://peps.python.org/pep-0644/
- https://peps.python.org/pep-0668/
- https://rfc.archlinux.page/0010-adopt-pep517-tooling/
- https://rfc.archlinux.page/0020-sources-for-python-packaging/
