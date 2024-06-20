---
title: Package Management Policy
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- glaucus uses the filesystem tree as its database to store package metadata and recipes

## Cerata
- Patches are typically applied in prepare
- Patches to configure/makefile should be put in configure
- Packages that use autoreconf, need runstatedir (copied from the system)

- Do not store commands inside variables: https://www.unix.com/unix-for-dummies-questions-and-answers/247059-run-command-stored-variable.html

- Use `install -d` instead of `mkdir`

## Repository Layout
- `/var/cache/rad/local` (local binary packages, contains sac (DESTDIR) + tarball + sum)
- `/var/cache/rad/pkg` (fetched binary packages, signed)
- `/var/cache/rad/src` (source tarballs, read-only, equals SRCD)
- `/var/lib/rad/clusters/cerata` (official cluster, equals CERD)
- `/var/lib/rad/clusters/custom` (custom cluster)
- `/var/lib/rad/local` (track installed packages using another form of metadata, with checksums and files)
- `/var/log/rad` (log files, equals LOGD)
- `/var/tmp/rad` (temporary src and bld for native)

```sh
# glaucus repo layout

# Source packages (git repos only):

cerata/$cluster/$nom/{ceras, build.native}

# Binary packages

cerata/$cluster/$nom/{$nom-$ver.tar.zst, sum}
```

## Local
- check for additional files that need removing (vcheck already does that):
  - .a (static libraries)
  - .alias
  - .bs (perl files)
  - .la (libtool archives)
  - .packlist (perl files) (alpine removes them)
  - .pod (perl files) (void removes them)
  - .py (python files)
  - .pyc (python files) (ewe removes them)
  - .pyo (python files) (ewe removes them)
  - alias
  - charset
  - extralibs.ld (perl files)
  - locale
  - systemd
  - test (ewe removes them)

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
- https://github.com/venomlinux/scratchpkg
- https://github.com/pibuxd/vanilla
- https://man7.org/linux/man-pages/man8/dnf.8.html
- https://linux.die.net/man/8/apt-get
- https://linux.die.net/man/8/aptitude
- https://man.archlinux.org/man/pacman.8.en

- https://github.com/void-linux/void-packages/blob/master/Manual.md
- https://docs.voidlinux.org/xbps/index.html
- https://man.voidlinux.org/xbps-query.1
- https://man.voidlinux.org/xbps-install.1
- https://man.voidlinux.org/xbps-remove.1

- https://wiki.archlinux.org/title/creating_packages
- https://wiki.archlinux.org/title/Makepkg#Building_optimized_binaries
- https://wiki.archlinux.org/title/Pacman/Rosetta
- https://wiki.archlinux.org/title/PKGBUILD
- https://wiki.archlinux.org/title/Meta_package_and_package_group

- https://devmanual.gentoo.org/general-concepts/dependencies/
- https://devmanual.gentoo.org/quickstart/index.html
- https://devmanual.gentoo.org/general-concepts/dependencies/#implicit-system-dependency

- https://michael.stapelberg.ch/posts/2020-05-09-distri-hermetic-packages/
- https://github.com/kreatolinux
