---
title: Upstream Contributions
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Aalbus
- Pull Request #9: [Change `zlib` to `zlib-ng`](https://github.com/Aalbus-linux/Aalbus/pull/9)

## AerynOS
- Pull Request #711: [`pkgconf`: update canonical locations](https://github.com/AerynOS/recipes/pull/711)
- Pull Request #1122: [`binutils`: Fix typo in `gprofng` summary and description](https://github.com/AerynOS/recipes/pull/1122)
- Pull Request #1160: [`libcap`: fix wrong license](https://github.com/AerynOS/recipes/pull/1160)

## Alpine
- [Alpine Linux 3.19.0 Contributor](https://alpinelinux.org/posts/Alpine-3.19.0-released.html)
- [Alpine Linux 3.21.0 Contributor](https://alpinelinux.org/posts/Alpine-3.21.0-released.html)
- Issue #13929: [`elfutils`: strndupa patch is no longer needed](https://gitlab.alpinelinux.org/alpine/aports/-/issues/13929)
- Issue #13930: [`pciutils`: manual installation instead of using `install-lib`](https://gitlab.alpinelinux.org/alpine/aports/-/issues/13930)
- Issue #14208: [`curl`: remove unrecognized option `--without-libidn`](https://gitlab.alpinelinux.org/alpine/aports/-/issues/14208)
- Issue #14244: [`gcc`: remove obsolete configuration flags](https://gitlab.alpinelinux.org/alpine/aports/-/issues/14244)
- Issue #14807: [`rsync`: use `--with-rrsync` flag instead of manual installation](https://gitlab.alpinelinux.org/alpine/aports/-/issues/14807)
- Issue #14920: [`zlib-ng`: add `bash` as a build-time dependency for `make`](https://gitlab.alpinelinux.org/alpine/aports/-/issues/14920)
- Issue #14921: [`autoconf`: typo in `APKBUILD` file](https://gitlab.alpinelinux.org/alpine/aports/-/issues/14921)
- Issue #15336: [`libevdev`: remove unused patch](https://gitlab.alpinelinux.org/alpine/aports/-/issues/15336)
- Merge Request #48174: [`libudev-zero`: use `install-shared` make target](https://gitlab.alpinelinux.org/alpine/aports/-/merge_requests/48174)
- Merge Request #52968: [community/`libevdev`: remove stale patch](https://gitlab.alpinelinux.org/alpine/aports/-/merge_requests/52968)
- Merge Request #60171: [testing/`hardened-malloc`: do not specify `VARIANT` for default](https://gitlab.alpinelinux.org/alpine/aports/-/merge_requests/60171)
- Merge Request #68085: [main/`dbus`: update configure flags](https://gitlab.alpinelinux.org/alpine/aports/-/merge_requests/68085)
- Merge Request #71187: [main/`attr`: remove specfile specific environment variables](https://gitlab.alpinelinux.org/alpine/aports/-/merge_requests/71187)
- Merge Request #71605: [main/`libpciaccess`: remove `util-macros` as build system now uses meson](https://gitlab.alpinelinux.org/alpine/aports/-/merge_requests/71605)
- Merge Request #72339: [main/`gcc`: drop unused variable `BOOT_CXXFLAGS`](https://gitlab.alpinelinux.org/alpine/aports/-/merge_requests/72339)
- Merge Request #74573: [main/`pciutils`: remove `basename` patch](https://gitlab.alpinelinux.org/alpine/aports/-/merge_requests/74573)
- Merge Request #78720: [main/`libevent`: enable tests and rely on configure flag to skip failed regression tests](https://gitlab.alpinelinux.org/alpine/aports/-/merge_requests/78720)
- Merge Request #80593: [main/`spirv-headers`: remove irrelevant `BUILD_SHARED_LIBS`](https://gitlab.alpinelinux.org/alpine/aports/-/merge_requests/80593)
- Merge Request #81115: [main/`e2fsprogs`: use `--enable-lto` configure flag](https://gitlab.alpinelinux.org/alpine/aports/-/merge_requests/81115)
- Merge Request #81217: [main/`fontconfig`: `src/fcobjhash.h` does not exist and removing `src/fcobjshash.gperf.h` breaks build](https://gitlab.alpinelinux.org/alpine/aports/-/merge_requests/81217)
- Merge Request #81347: [main/`iproute2`: do not install `libnetlink`](https://gitlab.alpinelinux.org/alpine/aports/-/merge_requests/81347)
- Merge Request #81846: [community/`zlib-ng`: `WITH_UNALIGNED` no longer exists](https://gitlab.alpinelinux.org/alpine/aports/-/merge_requests/81846)
- Merge Request #95079: [main/`pciutils`: use the correct SPDX identifier](https://gitlab.alpinelinux.org/alpine/aports/-/merge_requests/95079)
- Merge Request #95151: [main/`spirv-headers`: use the correct SPDX identifier](https://gitlab.alpinelinux.org/alpine/aports/-/merge_requests/95151)

## Arch
- Bug #75038: [`pciutils`: `update-pciids` is being installed](https://bugs.archlinux.org/task/75038)
- Bug #75043: [`e2fsprogs`: `SS_DIR` and `ET_DIR` no longer exist](https://bugs.archlinux.org/task/75043)
- Bug #75098: [`util-linux`: use `usrsbin_execdir` when installing](https://bugs.archlinux.org/task/75098)
- Bug #75997: [`hwdata`: no need to call `make`](https://bugs.archlinux.org/task/75997)
- Bug #76673: [`hwdata`: use `--disable-blacklist`](https://bugs.archlinux.org/task/76673)

## Ataraxia
- Pull Request #127: [Remove deprecated `--enable-widec`](https://github.com/ataraxialinux/ataraxia/pull/127)
- Pull Request #133: [Remove unneeded flags from GCC](https://github.com/ataraxialinux/ataraxia/pull/133)
- Pull Request #141: [It's `plugin` not `plugins`](https://github.com/ataraxialinux/ataraxia/pull/141)
- Pull Request #146: [Remove `--prefix` flag from `iproute2` configure](https://github.com/ataraxialinux/ataraxia/pull/146)
- Pull Request #151: [Fix `pkgconf` environment variables](https://github.com/ataraxialinux/ataraxia/pull/151)

## aws-lc
- Issue #2408: [`wget2` fails to build with `aws-lc`](https://github.com/aws/aws-lc/issues/2408)

## bc
- Issue #30: [Can't find the link to the `.xz` archive in assets](https://github.com/gavinhoward/bc/issues/30)
- Issue #52: [Release tarballs in `gzip` format](https://github.com/gavinhoward/bc/issues/52)
- Issue #56: [Specifying `--prefix` when cross-compiling](https://github.com/gavinhoward/bc/issues/56)
- Issue #58: [Difference between `--localedir` and NLSPATH](https://github.com/gavinhoward/bc/issues/58)
- Pull Request #49: [Add missing newline character](https://github.com/gavinhoward/bc/pull/49)
- Pull Request #57: [Mention `MAN3DIR` in `build.md`](https://github.com/gavinhoward/bc/pull/57)

## booster
- Issue #88: [Add support for overlay root filesystem](https://github.com/anatol/booster/issues/88)
- Issue #189: [Generating images for custom built kernels](https://github.com/anatol/booster/issues/189)
- Issue #223: [Unable to detect active ESP](https://github.com/anatol/booster/issues/223)
- Issue #232: [Handle compressed root filesystem in ISO mode](https://github.com/anatol/booster/issues/232)
- Pull Request #162: [Fix typo in flag mentioned in `README.md`](https://github.com/anatol/booster/pull/162)
- Pull Request #165: [Fix wrong flag in `README`](https://github.com/anatol/booster/pull/165)
- Pull Request #215: [Update `CHANGES.md`](https://github.com/anatol/booster/pull/215)

## Buildroot
- Pull Request #113: [package/`m4`: remove `--disable-static` for host package](https://github.com/buildroot/buildroot/pull/113)

## CMLFS
- Issue #101: [`utmps` `utmpx.h` already includes `utmps/utmpx.h`](https://github.com/dslm4515/CMLFS/issues/101)

## cosmopolitan
- Issue #50: [Cosmopolitan C Library / GCC Toolchains](https://github.com/jart/cosmopolitan/issues/50)
- Issue #820: [Is cosmopolitan suitable for building a Linux distribution from scratch?](https://github.com/jart/cosmopolitan/issues/820)

## dinit
- Pull Request #55: [Fix forgotten `BUILD.txt` to `BUILD`](https://github.com/davmac314/dinit/pull/55)
- Pull Request #66: [Don't mount `devpts` and `shm` again](https://github.com/davmac314/dinit/pull/66)

## Dragora
- Pull Request #82: [`squashfs-tools`: no need to create symlinks manually](https://notabug.org/dragora/dragora/pulls/82)

## eiwd
- Pull Request #1: [`resolvconf` is being used by default](https://github.com/ioraff/eiwd/pull/1)
- Pull Request #8: [`resolvconf` is being used by default](https://github.com/illiliti/eiwd/pull/8)

## eweOS
- Pull Request #16: [`kernel_path` is now an alias to `path`](https://github.com/eweOS/iso/pull/16)

## findutils
- Bug #66418: [Typo in Leaf Optimisation](https://savannah.gnu.org/bugs/index.php?66418)
- Commit ea9288c: [doc: fix typo in Texinfo manual](https://git.savannah.gnu.org/cgit/findutils.git/commit/?id=ea9288c6beca75)

## finit
- Issue #133: [`finit` hangs at "Requesting subsystem events"](https://github.com/troglobit/finit/issues/133)

## gcc
- Bug #98400: [GCC online docs "S/390 and zSeries Options" has a typo](https://gcc.gnu.org/bugzilla/show_bug.cgi?id=98400)

## gettext-tiny
- Issue #64: [`glib` 2.78.1 complains about `iconv` and intl](https://github.com/sabotage-linux/gettext-tiny/issues/64)
- Issue #73: [`autopoint` fails to bootstrap `m4`](https://github.com/sabotage-linux/gettext-tiny/issues/73)

## Hanh Linux
- Pull Request #3: [Fix `blkid` flag for `LABEL` in `init.in`](https://github.com/hanh-linux/gen-initramfs/pull/3)

## iproute2
- [configure: Fix to minor error caused by 377a09902a57 ("configure: Minor code cleanup")](https://lists.openwall.net/netdev/2019/01/01/42)

## kbd
- Issue #121: [Unable to build with alternative lex implementation](https://github.com/legionus/kbd/issues/121)

## kmod
- Issue #55: [Import and update shell completions](https://github.com/kmod-project/kmod/issues/55#issuecomment-2439723713)

## lh-bootstrap
- Issue #2: [Fix misinformation in documentation](https://github.com/skarnet/lh-bootstrap/issues/2)
- Issue #3: [`lastb` does not work as `/var/log/btmp` does not exist](https://github.com/skarnet/lh-bootstrap/issues/3)

## LibreSSL
- Issue #916: [Regarding `CRYPTO_free_ex_index`](https://github.com/libressl/portable/issues/916)

## libucontext
- Issue #42: [Two 1.2 versions and duplicate directory name?](https://github.com/kaniini/libucontext/issues/42)

## libudev-zero
- Issue #58: [NetBSD libxdev](https://github.com/illiliti/libudev-zero/issues/58)
- Pull Request #5: [`PREFIX` has to be specified twice](https://github.com/illiliti/libudev-zero/pull/5)

## libxkbcommon
- Issue #930: [Consider supporting `byacc` again](https://github.com/xkbcommon/libxkbcommon/issues/930)

## limine
- Commit 13ae2fb: [misc: xorriso: Create Joliet info and hfsplus for ISOHYBRIDs. Fixes #372](https://github.com/limine-bootloader/limine/commit/13ae2fb9648fe6e00272269d4ba3ff4fac0c97e1)
- Pull Request #372: [Support booting on usb](https://github.com/limine-bootloader/limine/pull/372)

## llvm
- Pull Request #135546: [Update `LIBUNWIND_ENABLE_WERROR` default value in `BuildingLibunwind.rst`](https://github.com/llvm/llvm-project/pull/135546)

## mdevd
- Issue #8: [Mention `nsss` as an optional dependency](https://github.com/skarnet/mdevd/issues/8)
- Issue #10: [Default path for executing commands in `mdev.conf`](https://github.com/skarnet/mdevd/issues/10)

## mold
- Issue #1032: [Custom built GCC search paths](https://github.com/rui314/mold/issues/1032)
- Issue #1211: [`mold` randomly segfaults](https://github.com/rui314/mold/issues/1211)

## mtm
- Issue #81: [Does not build against `netbsd-curses`](https://github.com/deadpixi/mtm/issues/81)

## muon
- Issue #107: [Support for `--cross-file`](https://todo.sr.ht/~lattis/muon/107)
- Issue #139: [Does not search in `PATH` for `add_install_script()`](https://todo.sr.ht/~lattis/muon/139)

## musl-cross-make
- Issue #99: [Why isn't `musl-cross-make` on par with musl.cc's version?](https://github.com/richfelker/musl-cross-make/issues/99)
- Issue #100: [OUTPUT should be an absolute path?](https://github.com/richfelker/musl-cross-make/issues/100)
- Issue #101: [Why isn't the dynamic linker (loader) a symlink to `libc.so`?](https://github.com/richfelker/musl-cross-make/issues/101)
- Issue #102: [NATIVE inside chroot](https://github.com/richfelker/musl-cross-make/issues/102)
- Issue #105: [Outdated information in the README](https://github.com/richfelker/musl-cross-make/issues/105)
- Pull Request #94: [Remove unnecessary flags from GCC](https://github.com/richfelker/musl-cross-make/pull/94)
- Pull Request #103: [Why is `MAKEINFO` set to false?](https://github.com/richfelker/musl-cross-make/pull/103)
- Pull Request #104: [Don't install headers again](https://github.com/richfelker/musl-cross-make/pull/104)

## Musl-LFS
- Pull Request #14: [Several fixes](https://github.com/dslm4515/Musl-LFS/pull/14)
- Pull Request #15: [Several fixes](https://github.com/dslm4515/Musl-LFS/pull/15)
- Pull Request #16: [Remove unnecessary flags passed to GCC configure scripts](https://github.com/dslm4515/Musl-LFS/pull/16)
- Pull Request #18: [Disable optimizations for GCC Pass 1](https://github.com/dslm4515/Musl-LFS/pull/18)
- Pull Request #36: [`--enable-force-devr` is obsolete](https://github.com/dslm4515/Musl-LFS/pull/36)
- Pull Request #37: [`--enable-force-devr` is obsolete](https://github.com/dslm4515/Musl-LFS/pull/37)
- Pull Request #38: [Fix typo in 088-Final_System-S6_Linux_init](https://github.com/dslm4515/Musl-LFS/pull/38)
- Pull Request #39: [Fix typo](https://github.com/dslm4515/Musl-LFS/pull/39)

## musl-nscd
- Issue #34: [How does this compare against something like skarnet's `nsss`?](https://github.com/pikhq/musl-nscd/issues/34)

## musl wiki
- Pull Request #47: [Fix a typo in `ld-musl-$(ARCH).path` path](https://github.com/somasis/musl-wiki/pull/47)

## neatvi
- Pull Request #94: [Basic arrow keys support](https://github.com/aligrudi/neatvi/pull/94)

## NetBSD
- Bug #58823: [`wgetscrreg` is not defined](https://mail-index.netbsd.org/netbsd-bugs/2024/11/10/msg086293.html)

## netbsd-curses
- Issue #58: [`util-linux`: more fails with tparm](https://github.com/sabotage-linux/netbsd-curses/issues/58)
- Issue #60: [`wgetscrreg` is not defined](https://github.com/sabotage-linux/netbsd-curses/issues/60)
- Pull Request #37: [Prevent `clear.sh` from overwriting userland's clear](https://github.com/sabotage-linux/netbsd-curses/pull/37)

## nim
- Issue #95: [Size of tarballs tripled](https://github.com/nim-lang/nightlies/issues/95)
- Issue #102: [latest-devel no longer syncs](https://github.com/nim-lang/nightlies/issues/102)
- Issue #24174: [`copyDir` and `copyDirWithPermissions` do not handle FIFOs (named pipes)](https://github.com/nim-lang/Nim/issues/24174)

## nimalyzer
- Commit 992f47b: [docs: fixed typos](https://github.com/thindil/nimalyzer/commit/992f47bf7817aaa92b7d076013f9d0d93e9fda52)
- Commit 4ea2cef: [docs: updated changelog](https://github.com/thindil/nimalyzer/commit/4ea2cef757eb443e11e3a3d03fcaf69d4d6b5e56)
- Commit f37dc26: [docs: updated documentation for complexity rule](https://github.com/thindil/nimalyzer/commit/f37dc262302d77b11c12321998089e4aafc1d47b)
- Commit 1e117ad: [docs: updated changelog](https://github.com/thindil/nimalyzer/commit/1e117adaab89e557f7d7701a84ff09a8d6b1d584)
- Ticket c8c1aff8e5: [Fix typo in configuration files](https://www.laeran.pl.eu.org/repositories/nimalyzer/tktview/c8c1aff8e5)
- Ticket cac8a77a3b: [search complexity lists below or equal to the selected value](https://www.laeran.pl.eu.org/repositories/nimalyzer/tktview/cac8a77a3b)

## nimony
- Pull Request #1548: [Fix some silly typos in Nimony's documentation](https://github.com/nim-lang/nimony/pull/1548)

## noname linux
- Issue #4: [What's this musl patch for?](https://github.com/xhebox/noname-linux/issues/4)
- Issue #8: [`curl`: why enable manual after disabling it?](https://github.com/xhebox/noname-linux/issues/8)
- Pull Request #3: [Remove obsolete flags](https://github.com/xhebox/noname-linux/pull/3)
- Pull Request #5: [Remove `systemv` from `tzdata`](https://github.com/xhebox/noname-linux/pull/5)
- Pull Request #6: [Remove flags from `binutils`](https://github.com/xhebox/noname-linux/pull/6)
- Pull Request #7: [`zstdmt` symlink is automatically created](https://github.com/xhebox/noname-linux/pull/7)

## nsss
- [nsss Contributor](https://github.com/skarnet/nsss/blob/main/AUTHORS)
- Commit 0d0417f: [Doc fixes (it's `grp.h`!)](https://github.com/skarnet/nsss/commit/0d0417f3226406fd4546d550bcf188b24b6f88ce)
- Issue #3: [Implicit declarations when using `--enable-libc-includes`](https://github.com/skarnet/nsss/issues/3)
- Issue #4: [Missing define in `nsss/shadow.h`](https://github.com/skarnet/nsss/issues/4)
- Pull Request #5: [Rename `group.h` to `grp.h`](https://github.com/skarnet/nsss/pull/5)

## oksh
- Issue #45: [Does `oksh` support cross compilation?](https://github.com/ibara/oksh/issues/45)

## om4
- Pull Request #1: [Fixed unexpected ';' errors and manual's name](https://github.com/ibara/m4/pull/1)

## openresolv
- Commit 655c56f: [Remove reference to `README` for configure options](https://github.com/NetworkConfiguration/openresolv/commit/655c56fcf1e1f4a69329037917a168b6d56a39eb)
- Issue #27: [Missing explanation for available options in `README`](https://github.com/NetworkConfiguration/openresolv/issues/27)

## pam
- Pull Request #815: [`configure.ac`: fix typo in the help message for `--enable-lastlog`](https://github.com/linux-pam/linux-pam/pull/815)

## perl
- [Perl 5.38.0 Contributor](https://nntp.perl.org/group/perl.perl5.porters/2023/07/msg266602.html)
- [Perl Author](https://nntp.perl.org/group/perl.perl5.changes/2023/05/msg61675.html)
- Pull Request #21094: [Fix typo in `INSTALL`](https://github.com/Perl/perl5/pull/21094)

## procps-ng
- Merge Request #158: [`netbsd-curses` compatibility](https://gitlab.com/procps-ng/procps/-/merge_requests/158)

## reflex
- Issue #1: [Support for `--header-file`](https://github.com/ThomasDickey/reflex-snapshots/issues/1)

## s6-linux-init
- Issue #4: [The `run` file for `utmpd` isn't terminated by a newline character](https://github.com/skarnet/s6-linux-init/issues/4)

## Sabotage Linux
- Commit 90b5fe0: [`mandoc:` generate symlinks via built-in mechanism](https://github.com/sabotage-linux/sabotage/commit/90b5fe09641311d18042265ddc947eecd243e447)
- Pull Request #687: [Use `LN` Variable Instead](https://github.com/sabotage-linux/sabotage/pull/687)

## sbase
- [`ed`: Changed delimiter to fix unterminated TODO comment](https://lists.suckless.org/hackers/1809/16524.html)

## Serpent OS
- Commit affd4c2: [`slibtool`: simplify symlink](https://github.com/serpent-os/recipes/commit/affd4c2341f692e680d5cc0046058e94426663f3)
- Pull Request #407: [`slibtool`: simplify symlink](https://github.com/serpent-os/recipes/pull/407)

## shadow
- [`shadow` 4.14.6 Contributor](https://github.com/shadow-maint/shadow/releases/tag/4.14.6)
- Issue #945: [`login` and `logoutd` broken on systems with `utmps`](https://github.com/shadow-maint/shadow/issues/945)
- Issue #999: [rfc: drop everything that conflicts with `util-linux`](https://github.com/shadow-maint/shadow/issues/999#issuecomment-2379230634)
- Issue #1082: [`sulogin` is not being installed](https://github.com/shadow-maint/shadow/issues/1082)

## skabus
- Issue #3: [How does `skabus` compare to `basu`?](https://github.com/skarnet/skabus/issues/3)

## smdev
- [Include `sys/sysmacros.h` in `smdev.c` when major is not defined in `sys/types.h`](https://lists.suckless.org/hackers/2001/17078.html)

## slibtool
- Commit eba391f: [`aux/slibtool.sh`: fix typo](https://github.com/midipix-project/slibtool/commit/eba391f32ba3f2156410c7a162f89cb40b8d631a)
- Issue #53: [`cfgdefs.usage` does not exist](https://dev.midipix.org/cross/slibtool/issue/53)
- Issue #77: [configure missing `--docdir`](https://dev.midipix.org/cross/slibtool/issue/77)
- Pull Request #78: [Operate in stoolie mode when called as libtoolize](https://dev.midipix.org/cross/slibtool/pull-request/78)

## squashfs-tools
- Pull Request #275: [Fix typo in Makefile](https://github.com/plougher/squashfs-tools/pull/275)

## tinyramfs
- Issue #39: [Generate initramfs for live ISO](https://github.com/illiliti/tinyramfs/issues/39)

## toybox
- [toybox 0.8.4 Contributor](http://landley.net/toybox/news.html#24-10-2020)
- [toybox 0.8.5 Contributor](http://landley.net/toybox/news.html#19-05-2021)
- [toybox 0.8.12 Contributor](http://landley.net/toybox/news.html#18-01-2025)
- Commit 2f07d87: [Add `hwdata` path to `lsusb`/`lspci`](https://github.com/landley/toybox/commit/2f07d87b26e85ad30926d17d379463de6a4fb0c9)
- Issue #161: [`install` performs stripping regardless if files were executables or not](https://github.com/landley/toybox/issues/161)
- Issue #168: [Some commands aren't listed on the website](https://github.com/landley/toybox/issues/168)
- Issue #170: [`rm`: $directory: Directory not empty](https://github.com/landley/toybox/issues/170)
- Issue #176: [`m4`:/tmp/XXXXXXXXXX/traces.m4:XXX: ERROR: end of file in string](https://github.com/landley/toybox/issues/176)
- Issue #243: [`b2sum` is mentioned twice](https://github.com/landley/toybox/issues/243)
- Issue #429: [Why is `bash` hardcoded in scripts and tests?](https://github.com/landley/toybox/issues/429)
- Issue #486: [`install` does not handle the creation of `drwxr-s---` correctly](https://github.com/landley/toybox/issues/486)
- Issue #519: [`blkid -L` shows wrong output](https://github.com/landley/toybox/issues/519)
- Issue #523: [`grep` hangs indefinitely on FIFO files](https://github.com/landley/toybox/issues/523)
- Pull Request #182: [Convert scripts (aside from the ones used for testing) to POSIX sh](https://github.com/landley/toybox/pull/182#issuecomment-1546415805)
- Pull Request #345: [Fix typos](https://github.com/landley/toybox/pull/345)
- Pull Request #524: [Add `hwdata` path to `lsusb`/`lspci`](https://github.com/landley/toybox/pull/524)

## ugrep
- Issue #134: [Using `ugrep -w` differs from `grep -w`](https://github.com/Genivia/ugrep/issues/134)
- Issue #138: [`ugrep -rnw` is slow when binary file matches?](https://github.com/Genivia/ugrep/issues/138)
- Issue #383: [`-A` may not show the context line for this pattern](https://github.com/Genivia/ugrep/issues/383)

## util-linux
- Commit 3f37ffe: [`all_syscalls`: don't hardcode `AWK` invocation](https://github.com/util-linux/util-linux/commit/3f37ffe68790d997e7327656a169cea8e8c5b2e7)
- Commit 543f991: [`all_errnos`/`all_syscalls`: don't hardcode `AWK` invocation](https://github.com/util-linux/util-linux/commit/543f991f62659b9a3ff67f9cda3456b2a5bb3f98)
- Pull Request #2949: [Do not hardcode `gawk` in `all_syscalls`](https://github.com/util-linux/util-linux/pull/2949)
- Pull Request #3212: [Update description of `--disable-poman` in configure.ac](https://github.com/util-linux/util-linux/pull/3212)
- Pull Request #3213: [Fix typos in `TODO`](https://github.com/util-linux/util-linux/pull/3213)

## utmps
- Issue #2: [`nsss` is not mentioned as an optional dependency](https://github.com/skarnet/utmps/issues/2)

## Void
- Commit d29d187: [`squashfs-tools`: use makefile to install](https://github.com/void-linux/void-packages/commit/d29d187fda697d0c601aabeceb4ce8ebe87967db)
- Pull Request #48214: [`squashfs-tools`: do not create symlinks manually](https://github.com/void-linux/void-packages/pull/48214)

## wak
- Issue #8: [Will `wak` get added to `toybox`?](https://github.com/raygard/wak/issues/8)

## wget2
- Issue #644: [Undefined reference to `CRYPTO_free_ex_index`](https://gitlab.com/gnuwget/wget2/-/issues/644)
- Issue #644: [`wget2` | Undefined reference to `CRYPTO_free_ex_index`](https://mail.gnu.org/archive/html/wget-dev/2023-09/msg00041.html)

## xz
- [xz 5.8.1 Contributor](https://github.com/tukaani-project/xz/blob/master/THANKS)
- Commit 80ffa38: [Build: Fix a typo in `autogen.sh`](https://github.com/tukaani-project/xz/commit/80ffa38f56657257ed4d90d76f6bd2f2bcb8163c)

## yash
- Issue #48: [Support for cross compilation](https://github.com/magicant/yash/issues/48)

## zlib-ng
- Issue #565: [Is `bash` a requirement?](https://github.com/zlib-ng/zlib-ng/issues/565)

## zstd
- Issue #4004: [Why was the new release `1.5.6` removed?](https://github.com/facebook/zstd/issues/4004)
