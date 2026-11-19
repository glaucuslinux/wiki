---
title: perl
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Configure
- Check if we need `-Dar=llvm-ar`, `-Dld=ld.lld`, `-Dnm=llvm-nm` and `-Dranlib=llvm-ranlib` or if the regular symlinks `ar`, `nm` and `ranlib` are already provided by `llvm`
- Check if we can disable more extensions (see `cpan/`, `dist/` and `ext/`)
### Build
- Check if `perl` still does not build with `lto` enabled (particularly `-flto=thin`):
```c
generate_uudmap.o: file not recognized: file format not recognized
```
- Check if `--pack-dyn-relocs=relr` causes issues or not (the following error occurred during a native build on a `glibc` host only so check again if a native build in a `musl` chroot will complain or not):
```c
./try: error while loading shared libraries: ./try: DT_RELR without GLIBC_ABI_DT_RELR dependency
```
- Check if `$LDFLAGS` should be passed to `-Dldflags` or to `-Dlddlflags` or both
- Check whether `$LD` should be kept as `ld.lld` or set to `clang` via `-Dld=clang`
### Other
- Check if we still need to add `core_perl` to `$PATH` in bootstrap to prevent warnings about missing `pod2man` or if that was only needed for the previous `gcc` + `binutils` toolchain (we now remove `/usr/bin/pod2man` instead check if we require a `pod2man` stub if anything requires it)

---

## Prepare
- Depends on `mawk`
- Does not depend on a loopback `lo` network device or a `/etc/hosts` file (only the test suite does)
- No need to set `LDFLAGS="-Wl,-z,stack-size=2097152 -pthread"` or use stack size patches for `musl` on `x86_64` (only for `s390x`)

## Configure
- After running `Configure` a `config.sh` file containing configuration data will be generated
- Prefer `-D`/`-U` to `='define'`/`='undef'`, `='true'`/`='false'` and `='y'`/`='n'` respectively
- `-D` overrides values in `hints/linux.sh`, while `-A` appends to them
- It is better to use `-Accflags` to add preprocessor macros like `-DNO_TAINT_SUPPORT` and not optimization flags (see `INSTALL`)
- Do not use `-Dccflags` as that overrides preprocessor macros defined in `hints/linux.sh` (see `INSTALL`)
- It is better to use `-Doptimize` to completely override optimization flags for `perl`
- No need to pass `-Accflags=-D_GNU_SOURCE` as `perl` already detects `musl` and passes it (see `config.sh` after `Configure` is run and `hints/linux.sh`)
- Explicitly specify `cc` using `-Dcc=clang` as `Configure` does not honor `$CC` (see `Configure` and `INSTALL`)
- `-Dusemallocwrap` is enabled by default on `linux` (see `hints/linux.sh`)
- `-Uusemymalloc` uses system `malloc` (e.g. `musl`) instead of bundled `malloc.c` and is the default on `linux` (see `hints/linux.sh`)
- Explicitly set `-Dusethreads` as `perl` defaults to compiling without thread support (`perl` previously had two threads implementations, the current `ithreads` which is synonymous with `threads` and the deprecated `5005threads`) (see `INSTALL`)
- Large file support is enabled by default on `linux` (see `hints/linux.sh` and `INSTALL`)
- Avoid `-Duse64bitint` and `-Duse64bitall` on a 64-bit system as they are intended as workarounds on legacy 32-bit hardware (see `INSTALL`)
- Avoid `-Dusemorebits` as it enables both 64-bit support and `long double` support
- Avoid `-Dusequadmath` with `clang`
- `-Accflags=-DNO_TAINT_SUPPORT` provides a 5-10% performance improvement without compromising security unlike `-Accflags=-DSILENT_NO_TAINT_SUPPORT` (see `INSTALL`)
- Avoid changing or overriding the default hash functions used by `perl` as they are already good enough (see `INSTALL`)
- Avoid `-Duselongdouble` as it may double memory overhead and cause non-deterministic behavior on `musl`
- Avoid `-Dusesocks` as it configures `perl` to be "socksified" (linked against `libsocks`) (see `INSTALL`)
- Avoid `-Uusedl` as it forces `perl` to be compiled completely statically (see `INSTALL`)
- `-Duseshrplib` provides a shared `perl` library `libperl.so` and this comes with a performance penalty (see `INSTALL`)
- `$prefixexp` is generated from `$prefix`, with `~` expansion done to convert home directories into absolute paths (see `INSTALL`)
- `-Dman1dir=none` and `-Dman3dir=none` should "in theory" disable man pages but `installman` installs them regardless (see `INSTALL`)
- `man1dir`, `man3dir`, `siteman1dir`, `siteman3dir`, `vendorman1dir` and `vendorman3dir` all default to `/usr/man/man1` and `/usr/man/man3` respectively which is not desired but we do not care as we install `perl` using the `install.perl` target (see `Policy_sh.SH`)
- `perl` does not install `html` documentation by default (set to `none`) (see `INSTALL`)
- Avoid passing `DESTDIR` to `-Dinstallprefix=$DESTDIR` and prefer `make DESTDIR="$DESTDIR" install` instead (see `INSTALL`)
- Avoid `-Duserelocatableinc` as it is not compatible with `-Duseshrplib` (see `INSTALL`)
- Explicitly specify `-Dinc_version_list=none` to disable using older `perl` versions and modules (see `INSTALL`)
- Avoid `-DDEBUGGING` as it bloats `perl` by a factor of 2x to 3x and use `-UDEBUGGING` instead (see `INSTALL`)
- Avoid `-Dusedtrace` as `glaucus` does not provide `dtrace`
- Avoid `-Dusemultiplicity` as `glaucus` does not provide or allow multiple `perl` versions to coexist (see `Configure`)
- `Configure` will build all supported extensions by default (e.g. `GDBM_File` if the gdbm library exists) (see `INSTALL`)
- Prefer `-Dnoextensions='DB_File GDBM_File NDBM_File ODBM_File SDBM_File'` to `-Ui_db -Ui_ndbm -Ui_gdbm -Ui_odbm -Ui_sdbm` (see `INSTALL`)
- Prefer `-Dnoextensions="Archive/Tar Compress/Raw/Bzip2 Compress/Raw/Zlib IO/Compress IO/Zlib XS/APItest XS/Typemap"` to `-Dnoextensions="Archive-Tar Compress-Raw-Bzip2 Compress-Raw-Zlib DB_File GDBM_File IO-Compress IO-Zlib NDBM_File ODBM_File SDBM_File XS-APItest XS-Typemap"` as the latter does not correctly detect extensions
- Disabling `bzip2` and `zlib` via `-Dnoextensions` is enough and the following is not enough or needed after `-Dnoextensions`:
```sh
rm -fR cpan/Compress-Raw-Zlib/zlib-src
rm -fR cpan/Compress-Raw-Bzip2/bzip2-src

sed '/\(bzip2\|zlib\)-src/d' -i MANIFEST

BUILD_BZIP2=0 \
BUILD_ZLIB=0 \
USE_ZLIB_NG=0 \
./Configure \
...
```
- Avoid `-Dhostgenerate`, `-Dhostperl`, `-Dsysroot`, `-Dtargetarch`, `-Dtargetdir`, `-Dtargetenv`, `-Dtargethost`, `-Dtargetuser` and `-Dusecrosscompile` as we only plan to natively compile `perl`  as cross compiling `perl` is a major hassle (see `INSTALL`)
- `suidperl` is no longer available, use a separate privilege escalation tool (see `INSTALL`)
- `miniperl` is a small temporary version of perl built automatically during the build process with enough functionality to bootstrap the rest of the build until the final `perl` binary is fully built (see `INSTALL`)
- Explicitly specify `-Uusenm` to prevent the "faster" `nm` extraction (or `llvm-nm`) from running on `libc` during `Configure` for a more accurate symbol probing (see `INSTALL`)
- Append `-DNO_MATHOMS` to `ccflags` to stop functions from `mathoms.c` from being compiled as they are no longer used by `perl` and are only included for compatibility reasons without being completely removed (see `INSTALL`)
- Do not set `-Accflags=-DZ_SOLO` as it is only for bundled `zlib` which we disable with `BUILD_ZLIB=0` in favor of system `libz`
- `usesoname` is no longer available
- Do not unset `-Ud_fpos64_t` and `-Ud_off64_t` as `musl` defines `fpos64_t` and `off64_t` so let the build system decide
- Explicitly set `-Dd_sockaddr_in6` as musl defines `sockaddr_in6`
- `siteprefix` is automatically set to `prefix`, unlike `vendorprefix` which is not set by default (see `INSTALL`)
- `Configure -d` disables `usedevel` and an explicit `-Dusedevel` is required to enable development builds if needed (see `INSTALL`)
- Avoid `PERL_EXTERNAL_GLOB` as it is a legacy behavior retained only for `csh` (see `INSTALL`)
- `perl`'s build system automatically detects `static_inline`
- `less -is` is a simpler and saner default compared to `less -iRs`
- Relying only on `-Dprefix=/usr` and `-Dvendorprefix=/usr` (as `-Dsiteprefix=/usr` is set by default implicitly) produces the following layout (which is not desirable):
```sh
$dir/usr/lib/perl5/5.42.0/x86_64-linux-thread-multi
$dir/usr/lib/perl5/site_perl/5.42.0/x86_64-linux-thread-multi
```
- `privlib`, `sitelib` and `vendorlib` are not architecture specific and contain pure `perl` code (not compiled) and should go under `/usr/share` as recommended by `FHS`
- `archlib`, `sitearch` and `vendorarch` are architecture specific and contain compiled extensions and should go under `/usr/lib`
- Do not embed version information or host/target tuples in install paths like `perl5/5.42.0/x86_64-linux-thread-multi`
- `scriptdir`, `sitescript` and `vendorscript` are automatically set to `$prefix/bin` where binaries and scripts are stored (see `config.sh` after running `Configure`)
- `PERL_MM_USE_DEFAULT=1` uses default values when answering questions for later `cpan` and `module` builds
- `-Dinstallusrbinperl` does nothing with our configure options as it ensure `/usr/bin/perl` exists which it does given our paths
- `-Ddefault_inc_excludes_dot` is set by default and `-Udefault_inc_excludes_dot` turns on the old less secure behavior (see `INSTALL`)
- Explicitly specify `-Uusecbacktrace` to disable `backtrace` support for a slightly smaller `perl`
- Explicitly specify `-Uuselanginfo` to disable `locale` support and also pass `-Accflags=-DNO_LOCALE` to ensure `I18N/Langinfo.pm` and `I18N/Langinfo/Langinfo.so` are not getting installed in `/usr/lib/perl5/core_perl` (no need to pass `-Dnoextensions='I18N/Langinfo I18N/Collate I18N/LangTags'` as it has no effect)

## Build
- `make realclean` is equivalent to `make clean`

## Package
- Do not use `make install-strip` as it installs `man` pages and runs `installman` even when setting all `*man*` variables to `none`:
```
-Dman1dir=none
-Dman3dir=none
-Dsiteman1dir=none
-Dsiteman3dir=none
-Dvendorman1dir=none
-Dvendorman3dir=none
```
- `make install.perl` does not install `man` pages but still installs `pod` files, it also does not `strip` installed binaries by default
- `./perl installperl -p --destdir=$dir` does not install `man` pages and `pod` files (due to `-p`)
- `./perl installperl -h` shows a list of possible options that can be passed to `INSTALLFLAGS` when running `make install.perl`
- Use `make INSTALLFLAGS='-s -f -o -p' install.perl` as it strips installed binaries and does not install `man` pages and `pod` files
- No need to add additional `find` statements to remove `.bs`, `.packlist`, `Change`, `README` and `TODO` as they do not exist given the method we use to install `perl`
- `$dir/usr/bin/perl` and `$dir/usr/bin/perl$ver` are hard links meaning they are two names for the same file, so remove the latter versioned one `perl$ver`

## Other
- Even-numbered subreleases (like `5.40.x` and `5.42.x`) are stable maintenance releases (see `INSTALL`)
- Odd-numbered subreleases (like `5.41.x` and `5.43.x`) are unstable development releases (see `INSTALL`)
- With `5.36` the C compiler baseline requirement changed from "ANSI C89" to "C89 plus some specific C99 features"
- The `configure.gnu` script is a compatibility shim for `gnu` configure that may not understand `-D` symbols and is not used by default (`INSTALL` mentions it forwards options to `Configure` so use that instead)
- The `configpm` script is run using `miniperl` to regenerate `lib/Config.pm`, `lib/Config_heavy.pl` and `lib/Config.pod` from the contents of `config.sh`, `Porting/Glossary` and `myconfig.SH` and it accepts a `--no-glossary` option which stops `Porting/Glossary` from being included in `lib/Config.pod` though we do not require it as we manually remove all `pod` files post install
- The `myconfig.SH` script is a helper script that is used for bug reports
- The scripts under `hints/` are used by `Configure` to set things which `Configure` either can't or doesn't guess properly
- The `Policy_sh.SH` script is run by `Configure` to generate `Policy.sh` for repeated builds and `-D` overrides `Policy.sh` definitions
- `perl -V:config_args` shows how `perl` was configured
- `perl` manpages take 20 MB (a 1/3 of its entire install size) so remove them

## References
### Offline
- cflags.SH
- Configure
- INSTALL
- installperl
- hints/linux.sh
- hints/README.hints
- Makefile.SH
- Policy_sh.SH
- Porting/Glossary
### Online
- https://perldoc.perl.org/Config
- https://perldoc.perl.org/perlglossary
- https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch04s06.html
- https://refspecs.linuxfoundation.org/FHS_3.0/fhs/ch04s11.html
- https://wiki.archlinux.org/title/Perl_package_guidelines
