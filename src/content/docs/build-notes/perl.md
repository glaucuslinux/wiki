---
title: perl
description: A simple and lightweight Linux® distribution based on musl libc and toybox
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
- It is recommended to not use `-Dusenm` on Linux
- `miniperl` is not needed as we aren't bootstrapping `perl`

## Resources
- https://perldoc.perl.org/Config
- https://wiki.archlinux.org/title/Perl_package_guidelines
