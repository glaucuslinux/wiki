---
title: Package Management Policy
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

Package management is dependent on limited web servers, making parallelization
harder. glaucus uses the filesystem tree as its database to store package
metadata and recipes.

## Cerata
### ceras
- Avoid versions in `nom`
### prepare
- Updating `config.guess`, `config.sub` and `config.rpath` is not enough; use `autoreconf -vfis` instead
- Packages that use `autoreconf`, need `runstatedir` (copied from the system)
- Patches are typically applied in prepare
- Patches should use `-p0`
- Packages should not deal with `$SRCD`, only with `$TMPD`
- Do not store commands inside variables
### configure
#### Disable
- Disable assert
- Disable audit
- Disable dbus
- Disable debug
- Disable doc
- Disable examples
- Disable logind
- Disable man
- Disable nls
- Disable pam
- Disable rpath
- Disable selinux
- Disable static
- Disable symvers
- Disable systemd
- Disable tests
- Disable x11
#### Enable
- Enable acl
- Enable ipv6
- Enable lto
- Enable pic
- Enable pie
- Enable shared
- Enable threads=posix
- Enable tls
- Enable xattr
### check
- Report packages without a test suite
- Report tests that fail for every package
- Try `VERBOSE=1 V=1` for `make check`
- If tests fail in parallel, try `-j1`
- Compare failing tests with Alpine and LFS
### package
- Do not install to the following directories: `/boot`, `/dev`, `/mnt`, `/run`, `/sys`, `/tmp`
- Brace expansion is not POSIX
- Use `mkdir -pv` over `install -dv`
- `cp -a` implies `-R/-r/--recursive`
- Do not use `ln -r`; not POSIX
- `touch` is faster than `:>`
- Group commands that deal with multiple arguments into one (e.g. `cp`, `rm`, `mkdir` (if same permissions)...)
- Group commands that are repeated 3 or more times into `for` loops
- Everything related to `s6` should reside under `/etc/s6`
- All text files must end with a newline (POSIX)

## Repository Layout
- `/var/cache/rad/pkg` (binary packages, contains sac (DESTDIR) + tarball + sum)
- `/var/cache/rad/src` (source tarballs, read-only, equals SRCD)
- `/var/lib/rad/clusters/cerata` (official cluster, equals CERD)
- `/var/lib/rad/clusters/custom` (custom cluster)
- `/var/lib/rad/pkg` (track installed packages using another form of metadata, with checksums and files)
- `/var/log/rad` (log files, equals LOGD)
- `/var/tmp/rad` (temporary build files)

## Local
Remove additional files:
  - .a (static libraries)
  - .alias
  - .bs (perl files)
  - .dbg
  - .la (libtool archives)
  - .packlist (perl files) (alpine)
  - .pod (perl files) (void)
  - .py (python files)
  - .pyc (python files) (ewe)
  - .pyo (python files) (ewe)
  - alias
  - application (kiss)
  - charset
  - consolekit (kiss)
  - completion
  - dbus
  - doc (kiss)
  - extralibs.ld (perl files)
  - gettext (kiss)
  - gtk-doc (kiss)
  - icon (kiss)
  - info (kiss)
  - intl (kiss)
  - locale
  - logind (kiss)
  - man (kiss)
  - pam
  - polkit (kiss)
  - pulse (kiss)
  - sound (kiss)
  - systemd
  - test (ewe)
  - zsh (kiss)

## Out of Tree Builds
Toolchain:
- binutils
- gcc

Cross:
- binutils
- dash (no patches applied so no need to copy src)
- e2fsprogs
- gcc
- iputils
- less
- lksh
- mksh
- musl-utils (has no package source though, as its files are in CERD)
- which

## Resources
- https://devmanual.gentoo.org/general-concepts/dependencies/
- https://devmanual.gentoo.org/general-concepts/dependencies/#implicit-system-dependency
- https://devmanual.gentoo.org/quickstart/index.html
- https://docs.voidlinux.org/xbps/index.html
- https://github.com/kreatolinux
- https://github.com/pibuxd/vanilla
- https://github.com/venomlinux/scratchpkg
- https://github.com/void-linux/void-packages/blob/master/Manual.md
- https://google.github.io/styleguide/shell.xml
- https://linux.die.net/man/8/apt-get
- https://linux.die.net/man/8/aptitude
- https://man7.org/linux/man-pages/man8/dnf.8.html
- https://man.archlinux.org/man/pacman.8.en
- https://man.voidlinux.org/xbps-install.1
- https://man.voidlinux.org/xbps-query.1
- https://man.voidlinux.org/xbps-remove.1
- https://michael.stapelberg.ch/posts/2020-05-09-distri-hermetic-packages/
- https://os-wiki.ewe.moe/dev/guide/packaging
- https://wiki.archlinux.org/title/Arch_package_guidelines
- https://wiki.archlinux.org/title/creating_packages
- https://wiki.archlinux.org/title/Makepkg#Building_optimized_binaries
- https://wiki.archlinux.org/title/Meta_package_and_package_group
- https://wiki.archlinux.org/title/Pacman/Rosetta
- https://wiki.archlinux.org/title/PKGBUILD
- https://www.tldp.org/LDP/abs/html/unofficialst.html
- https://www.unix.com/unix-for-dummies-questions-and-answers/247059-run-command-stored-variable.html
