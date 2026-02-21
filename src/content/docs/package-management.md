---
title: Package Management Policy
description: An opinionated Linux® distribution based on musl libc and toybox
---

glaucus uses the filesystem tree as its database to store package information and build scripts.

## Anatomy of a Package
### The `info` file
- An `info` file is a TOML file that stores package information (aka metadata)
- `info` files are also valid POSIX shell scripts due to the way they are written; can be sourced by `.`
- To create a new package, create a directory with the package name under a repository (`core` or `extra`), then create an `info` file
- The following is a list of all the variables supported by `info` files:
  - `ver`: package version number, or commit number if `url` is a git repository
  - `url`: package source url
    - Prefer `https` over `http` and `ftp`
    - Order of tarball preference: `.zst` > `.gz` > `.xz` > `.bz2`
    - Prefer cdn mirrors when available:
      - GNU packages should use: `https://ftpmirror.gnu.org/`
      - Kernel packages should use: `https://cdn.kernel.org/pub/linux/`
      - Non GNU packages should use: `https://download.savannah.nongnu.org/releases/`
      - Packages from OpenBSD should use: `https://cdn.openbsd.org/pub/OpenBSD/`
  - `sum`: package `XXH3_128bits` checksum, **mandatory if `url` is not a git repository**; `xxhsum -H2 sourceTarball`
  - `bld`: package build time dependencies sorted alphabetically
    - Do not add common packages that are expected to exist at build time as build time dependencies (e.g. `make`, `linux-headers` and so on)
  - `run`: package run time dependencies sorted alphabetically
  - `opt`: package options and includes:
    - `bootstrap`: install package to `/`; only relevant in bootstrap stage cross
    - `no-check`: do not run `check()`; **mandatory if `build` does not have `check()`**
    - `doc`, `man`: do not remove documentation
    - `empty`: do not remove empty directories
    - `la`, `libtool`: do not remove libtool archives (`.la` files) in native; they are deleted either ways in cross
    - `no-lto`: do not use LTO
    - `no-parallel`: do not parallelize `build()`; force `-j 1` instead of the default `-j 5`
    - `no-purge`/`no-prune`: do not remove unwanted files
    - `static`: do not remove static libraries (.a files)
### The `build` file
- A `build` file is a POSIX shell script that includes the build instructions of a package
- The build process of a package is split into 5 different phases:
  - Preparation: handled by the function `prepare()`
  - Configuration: handled by the function `configure()`
  - Compilation: handled by the function `build()`; not to be confused with the `build` file itself; for further reading, if `build` is used then we are addressing the script, otherwise if `build()` is used then the intention is the function
  - Checking: handled by the function `check()`
  - Packaging: handled by the function `package()`, **mandatory**
- Some packages include special versions of the `build` file called `build-toolchain` and `build-cross`; these are only intended to be run in the bootstrap process during the `toolchain` and `cross` stages, and regular users should not bother with them
#### `prepare()` function
- glaucus package manager `rad` automatically does a `cd` into `$TMPD/$nom/$nom-$ver` if the package's `url` is not a git repository, and into `$TMPD/$nom` if it is a git repository
- If extracting the source tarball provided by `url` does not follow the `$nom-$ver` rule then you are expected to manually `cd` into whatever the directory name is (e.g. for `python` we do a `cd "$TMPD"/$nom/Python-$ver`); only interact with `$TMPD`
- If a package uses autotools, always run `autoreconf -vfis` to update its files
- If the package provides an `autogen.sh` or a `bootstrap.sh` then prefer these over manually running `autoreconf -vfis`
- This is done because updating `config.guess`, `config.sub` and `config.rpath` is usually not enough
- Disable `po4a` generation and `gtkdocize` when running `autoreconf -vfis`, `autogen.sh` or `bootstrap.sh`
- If a patch is absolutely necessary, then it is applied here in `prepare()`; otherwise, keep things vanilla
- All patches should use `-p 0`
- Prefer `patch` to `sed`
- Avoid modifications and patches to documentation and manual pages as they render `autoreconf` harder; require more stuff
- Double check if the package's build system requires that it be built out-of-tree; if so then `mkdir -p build` and `cd build`
- `meson`/`muon` and `cmake` build systems automatically create the `build` directory for you; no need to `mkdir -p build`
#### `configure()` function
- glaucus provides wrappers for various build systems that come with the required installation paths and basic configuration options
- Use `glaucus-configure` for `autotools` build system
- Use `glaucus-cmake` for `cmake` build system
- Use `glaucus-muon` for `muon` and `meson` build systems
- Use the officially supported build system by upstream; e.g. `zstd` has multiple third party build systems but the only officially maintained build system is `make`
- Use the newer build system if a package has multiple officially supported and maintained build systems and/or is in the process of moving to a newer build system (e.g. `kmod`)
- For developers who are bootstrapping the `toolchain` and `cross` stages use full paths to `glaucus-*` in `build-toolchain` and `build-cross` respectively
- Avoid substituting flag strings with variables like `nom`; e.g. `pcre2` has a flag `--enable-pcre2-32`, do not type `--enable-$nom-32`
###### Disable
- It is preferred to disable the following options:
  - assert
  - audit
  - dbus
  - debug
  - doc
  - examples
  - fuzzing
  - gettext
  - gtk-doc
  - i18n
  - iconv
  - idn
  - intltool
  - l10n
  - logind
  - man
  - nls
  - pam
  - polkit
  - rpath
  - selinux
  - static
  - symvers
  - systemd
  - tests
  - x11
  - year2038
###### Enable
- It is also preferred to enable the following options:
  - acl
  - attr
  - ipv6
  - lto
  - pic
  - pie
  - pthreads
  - shared
  - threads=posix
  - tls
  - xattr
#### `build()` function
- The general `build()` process is ran in parallel with the default number of jobs being `-j 5`
- Pass`CFLAGS`, `CXXFLAGS` and `LDFLAGS` as arguments to `make` and not as environment variables, so they are propagated correctly:
```sh
## Correct
make foo=bar

## Incorrect, might get unexported in the Makefile and not get passed to submakes
foo=bar make
```
- Prefer `make` (to `muon samu`) as `cmake` generator/build tool
#### `check()` function
- Only relevant for native `build` recipes; will not be called in `cross` and `toolchain` stages (do not add a `check()` function in `build-cross` and `build-toolchain`)
- Report packages without a test suite
- Report failing tests
- Try `VERBOSE=1 V=1` for `make check`
- Try `ulimit -n 4096` before `make check`
- Prefer `make -k check` to keep going until all tests are checked
- If tests fail in parallel, try `-j1`
- Compare failing tests with Alpine and LFS
#### `package()` function
- `package()` is the only required function to declare `build` files
- Do not install in: `/bin`, `/boot`, `/dev`,`/home`,`/lib`, `/mnt`, `/proc`, `/root`, `/run`, `/sbin`, `/sys`, `/tmp`, `/usr/sbin`
- Everything related to `s6` should reside under `/etc/s6`
- All text files must end with a newline (POSIX)
- Prefer strip targets `install-strip` (and `install/strip` for `cmake`) over manual strip
- For developers, do not create fifo files when in `cross` stage as they can't be copied
- `DESTDIR` should be:
  - passed as an argument to `make DESTDIR="$dir" install`
  - passed as an environment variable to `samu/muon`
- Consider removing the following files if unnecessary:
  - .a (static libraries whenever possible)
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

## Misc
- Avoid `-e` and `-x` in the shebang (vague behavior)
- Do not store commands inside variables
- Do not declare empty functions; if a function does nothing then it shoul not be declared
```
prepare() {
  :
}
```
- Brace expansion is not POSIX
- Use `mkdir -p` over `install -d`; using `mkdir` alone is discouraged
- `cp -a` is not POSIX; use `cp -fPp` for files and `cp -fPpR` for directories
- `cp -v` and `mv -v` are not POSIX; `rm -v` is POSIX though
- `ln -r` and `ln -n` are not POSIX; use `ln -fs` instead; prefer symbolic links to hard links, and relative links to absolute links
- `patch` only accepts one diff/patch file at a time when using `-i`; if multiple files are provided it will use the last one
- `touch` is faster than `:>`
- `command -v` is faster than `type`
- Group commands that deal with multiple arguments into one (e.g. `cp`, `rm`, `mkdir` (if same permissions)...)
- Group commands that are repeated 3 or more times into `for` loops
- Only quote shell variables with whitespace characters
- Separate options that accept arguments from ones that do not; prefer this:
```
mkdir -m 555 -p
```
to this:
```
mkdir -pm 555
```
- Use a single space character to separate arguments from their options; prefer this:
```
patch -p 0 ...
```
to this:
```
patch -p0 ...
```

## Layout
- `/var/cache/rad/build`: Persistent cache store for build artefacts
- `/var/cache/rad/src`: Persistent read-only cache store for upstream source tarballs
- `/var/lib/rad/local`: Local database of installed packages
- `/var/lib/rad/repo/core`: Core repository; `$core`
- `/var/lib/rad/repo/extra`: Extra repository; `$extra`
- `/var/log/rad`: Log directory
- `/var/tmp/rad`: Temporary store for build artefacts; `$tmp`

## References
- https://crux.nu/doc/handbook.html
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
- https://pubs.opengroup.org/onlinepubs/9799919799/
- https://superuser.com/questions/195826/bash-shebang-for-dummies
- https://tincan-linux.github.io/wiki/arc
- https://wiki.alpinelinux.org/wiki/Package_policies
- https://wiki.archlinux.org/title/Arch_package_guidelines
- https://wiki.archlinux.org/title/creating_packages
- https://wiki.archlinux.org/title/Makepkg#Building_optimized_binaries
- https://wiki.archlinux.org/title/Meta_package_and_package_group
- https://wiki.archlinux.org/title/Official_repositories
- https://wiki.archlinux.org/title/Pacman/Rosetta
- https://wiki.archlinux.org/title/PKGBUILD
- https://wiki.debian.org/ReduceDebian
- https://wiki.gentoo.org/wiki/Stage_file
- https://www.debian.org/releases/bookworm/amd64/ch03s04.en.html
- https://www.gnu.org/software/make/manual/html_node/Testing.html
- https://www.tldp.org/LDP/abs/html/unofficialst.html
- https://www.unix.com/unix-for-dummies-questions-and-answers/247059-run-command-stored-variable.html
- https://venam.nixers.net/blog/unix/2020/03/29/distro-pkgs.html
