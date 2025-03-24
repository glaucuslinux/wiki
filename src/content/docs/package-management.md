---
title: Package Management Policy
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

glaucus uses the filesystem tree as its database to store package metadata and
recipes.

## Cerata
### ceras
- Avoid versions in `nom`
- Avoid `-e` and `-x` in the shebang (vague behavior)
- Do not add common packages that are expected to exist at build-time as build dependencies (e.g. `make`, `linux-headers` and so on)
- `nop` is short for "no operation" and includes:
  - `bootstrap`: install package to `/`; only available in cross
  - `check`: disable test suite
  - `doc`, `man`: preserve documentation
  - `empty`: preserve empty directories
  - `la`, `libtool`: preserve libtool archives (`.la` files) in native; they are deleted either ways in cross
  - `lto`: disable LTO
  - `parallel`: use -j1
  - `purge`, `prune`: do not remove unwanted files
  - `static`: preserve static libraries (.a files)
### prepare
- Updating `config.guess`, `config.sub` and `config.rpath` is not enough; use `autoreconf -vfis` instead
- Packages that use `autoreconf`, need `runstatedir` (copied from the system)
- Prefer `autogen.sh` and `bootstrap.sh` and provided `autoreconf` upstream scripts instead of manually running the command
- Disable `po4a` generation and `gtkdocize` if the `autoreconf` scripts allow that
- If patch is not absolutely necessary, we can do without it; keep things vanilla
- Patches are typically applied in prepare
- Patches should use `-p0`
- Packages should not deal with `$SRCD`, only with `$TMPD`
- Do not store commands inside variables
- Avoid modifications to manual pages as they render `autoreconf` harder; require more stuff
### configure
- Avoid substituting flag strings with variables like `nom`
- Use `glaucus-configure` for `autoconf` build systems
- Use `glaucus-cmake` for `cmake` build systems
- Use `glaucus-muon` for `muon` and `meson` build systems
- Use full paths to `glaucus-*` files in `build.cross`
#### Disable
- Disable assert
- Disable audit
- Disable dbus
- Disable debug
- Disable doc
- Disable examples
- Disable fuzzing
- Disable gettext
- Disable gtk-doc
- Disable i18n
- Disable iconv
- Disable idn
- Disable intltool
- Disable l10n
- Disable logind
- Disable man
- Disable nls
- Disable pam
- Disable polkit
- Disable rpath
- Disable selinux
- Disable static
- Disable symvers
- Disable systemd
- Disable tests
- Disable x11
- Disable year2038
#### Enable
- Enable acl
- Enable attr
- Enable ipv6
- Enable lto
- Enable pic
- Enable pie
- Enable pthreads
- Enable shared
- Enable threads=posix
- Enable tls
- Enable xattr
### build
- Pass`CFLAGS`, `CXXFLAGS` and `LDFLAGS` as arguments to `make` and not as environment variables, so they are propagated correctly:
```sh
## Correct
make foo=bar

## Incorrect, might get unexported in the Makefile and not get passed to submakes
foo=bar make
```
### check
- Report packages without a test suite
- Report failing tests
- Try `VERBOSE=1 V=1` for `make check`
- Prefer `make -k check` to keep going until all tests are checked
- If tests fail in parallel, try `-j1`
- Compare failing tests with Alpine and LFS
### package
- Do not install in: `/bin`, `/boot`, `/dev`,`/home`,`/lib`, `/mnt`, `/proc`, `/root`, `/run`, `/sbin`, `/sys`, `/tmp`, `/usr/sbin`
- Brace expansion is not POSIX
- Use `mkdir -pv` over `install -dv`
- `cp -a` implies `-R/-r/--recursive`
- `ln -r` is not POSIX
- `touch` is faster than `:>`
- Group commands that deal with multiple arguments into one (e.g. `cp`, `rm`, `mkdir` (if same permissions)...)
- Group commands that are repeated 3 or more times into `for` loops
- Everything related to `s6` should reside under `/etc/s6`
- All text files must end with a newline (POSIX)
- Prefer strip targets `install-strip` to manually running strip
- Do not create fifo files in `build.cross` as they can't be copied
- Only quote shell variables with whitespace characters

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
  - .cmd (kernel files)
  - .dbg
  - .e2x (perl files)
  - .install (kernel files)
  - .la (libtool archives)
  - .packlist (perl files)
  - .pod (perl files)
  - .py (python files)
  - .pyc (python files) (ewe)
  - .pyo (python files) (ewe)
  - alias
  - application (kiss)
  - bash
  - charset
  - cmake
  - completion
  - consolekit (kiss)
  - dbus
  - doc (kiss)
  - extralibs (perl files)
  - fish
  - gdb (kiss)
  - gettext (kiss)
  - gtk-doc (kiss)
  - i18n
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
- https://superuser.com/questions/195826/bash-shebang-for-dummies
- https://tincan-linux.github.io/wiki/arc
- https://wiki.archlinux.org/title/Arch_package_guidelines
- https://wiki.archlinux.org/title/creating_packages
- https://wiki.archlinux.org/title/Makepkg#Building_optimized_binaries
- https://wiki.archlinux.org/title/Meta_package_and_package_group
- https://wiki.archlinux.org/title/Official_repositories
- https://wiki.archlinux.org/title/Pacman/Rosetta
- https://wiki.archlinux.org/title/PKGBUILD
- https://wiki.debian.org/ReduceDebian
- https://www.debian.org/releases/bookworm/amd64/ch03s04.en.html
- https://www.gnu.org/software/make/manual/html_node/Testing.html
- https://www.tldp.org/LDP/abs/html/unofficialst.html
- https://www.unix.com/unix-for-dummies-questions-and-answers/247059-run-command-stored-variable.html
