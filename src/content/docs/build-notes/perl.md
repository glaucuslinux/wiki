---
title: perl
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Depends on `mawk`
- Depends on `gdbm` or `db` on Alpine and Arch
- Do not specify `scriptdir` or other dirs that might change where binaries are being installed (perl binaries and scripts are expected to be in `/usr/bin`)
- `-Ud_fpos64_t` and `-Ud_off64_t` undefine symbols in configure on Alpine and Clear (musl defines them; it is better to let the build system decide)
- `Z_SOLO` on Alpine is used to compile and use zlib without external libraries
- Check large file and usenm support
- Check `installman1dir` and `installman3dir`
- Modules manpages are being removed on Adelie
- `PERL_MM_USE_DEFAULT=1` uses default values when answering questions
- Unable to use upstream binaries; requires signing up with a third party vendor?

## Resources
- https://perldoc.perl.org/Config
- https://wiki.archlinux.org/title/Perl_package_guidelines
