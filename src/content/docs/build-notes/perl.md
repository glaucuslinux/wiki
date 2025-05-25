---
title: perl
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Depends on `mawk`
- Depends on `gdbm` or `db` on Alpine and Arch
- Do not specify `scriptdir` or other dirs that might change where binaries are being installed (perl binaries and scripts are expected to be in `/usr/bin`)
- `-Ud_fpos64_t` and `-Ud_off64_t` undefine symbols in configure on Alpine and Clear; musl defines them so it is better to let the build system decide
- `Z_SOLO` on Alpine is used to compile and use zlib without external libraries
- Check large file and usenm support
- `installman1dir` and `installman3dir` are not portable and should only be used in Makefiles
- Modules manpages are being removed on Adelie
- `PERL_MM_USE_DEFAULT=1` uses default values when answering questions
- Unable to use upstream binaries; requires signing up with a third party vendor?
- Does `perl` require a loopback `lo` network device and `/etc/hosts`?
- `Config_heavy.pl` applies compile-time flags to future builds and modules; which is also why we don't use `cf_email` as it would require patching to prevent sending reports of some broken modules to different emails
- `1p` for commands and `3pm` for modules
- `-Dusesoname` is obsolete
- It is recommended not to use `-Dusenm` on Linux
- `miniperl` is not needed as we aren't bootstrapping `perl`
- `LDFLAGS="-Wl,-z,stack-size=2097152 -pthread"` and stack size patches for musl are needed for `s390x` on Alpine and Void
- `PERL_TEST_HARNESS_ASAP=1` causes the test suite to finish somewhat earlier with less logical ordering of the tests
- `PERL_BUILD_PACKAGING` skips a small number of porting tests (those in t/porting) that assume they are in a git clone of the upstream Perl repository, or enforce irrelevant rules which are not
- musl defines `sockaddr_in6` so use `-Dd_sockaddr_in6=define`
- Void passes `export CFLAGS+="-DNO_POSIX_2008_LOCALE -D_GNU_SOURCE"` to fix build on musl
- Specify additional flags?
```
-Aappend:optimize="$CFLAGS"
-Adefine:ccflags="$CFLAGS"
-Adefine:lddflags="$LDFLAGS"
-Adefine:ldflags="$LDFLAGS"
-Dcccdlflags="-fPIC"
-Dccdlflags="-rdynamic"
-Dccflags="$CFLAGS"
-Dlddlflags="-shared $LDFLAGS"
-Dldflags="$LDFLAGS
-Doptimize="-Wall $CFLAGS"
```
- Alpine further splits the package into `dev` and `utils` each with certain binaries
- Compare `make` vs `make libperl.so && make`
- Compare `make install` target vs `make install.perl`
- `-Duse64bitint -Duselargefiles` are detected by default?
- Prefer `test_harness_notty` over `test_harness`?
- `HARNESS_OPTIONS` defaults to `j9`?
- Examine alpine's `-Dd_semctl_semun`?
- Do we need a `/usr/lib/libperl.so` symlink?
- Modify `CPAN/FirstTime.pm` for site directories?
- Might require a permission fix to `644`?
- Do we need to explicitly define `static_inline`? Or does `perl`'s build system automatically detect it?
- `musl-locale` patches are for `perl-cross` which glaucus does not use
- `siteprefix` is automatically set equal to `prefix`
- `scriptdir`, `sitescript` and `vendorscript` are automatically set to their relative `prefix/bin`

## References
- https://bugs.gentoo.org/506818
- https://cgit.freebsd.org/ports/commit/lang/perl5.40?id=06745788d4b143777aa2cb91e31a4c07af90ded3
- https://github.com/void-linux/void-packages/blob/master/srcpkgs/perl/patches/cpan_definstalldirs.diff
- https://perldoc.perl.org/Config
- https://wiki.archlinux.org/title/Perl_package_guidelines
