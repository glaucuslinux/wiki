---
title: Hardening and Security
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

glaucus follows the principle of "least privilege"; each part of the system
should only be able to access what is strictly required, and nothing more.

- Address Space Layout Randomization (ASLR)
- Binding Policy NOW (BIND_NOW)
- Data Execution Prevention (DEP)
- Executable-Space Protection (ESP)
- eXecute Disable (XD)
- No eXecute (NX)
- Position Independent Code (PIC)
- Position Independent Executables (PIE)
- RELocation Read-Only (RELRO)
- Stack Clash Protection (SCP)
- Stack Smashing Protection (SSP)

## References
- https://developers.redhat.com/blog/2018/03/21/compiler-and-linker-flags-gcc
- https://dustri.org/b/security-features-of-musl.html
- https://fedoraproject.org/wiki/Changes/Harden_All_Packages
- https://fedoraproject.org/wiki/Changes/HardenedCompiler
- https://fedoraproject.org/wiki/Changes/HardeningFlags28
- https://fedoraproject.org/wiki/Toolchain/Watermark/HardeningFortify
- https://fedoraproject.org/wiki/Toolchain/Watermark/HardeningStackProtector
- https://gcc.gnu.org/onlinedocs/gcc/Object-Size-Checking.html#Object-Size-Checking-and-Source-Fortification
- https://gist.github.com/MaskRay/9fb642b7d4d903ecd2a9dd0a773fdc70
- https://github.com/hashbang/hardening/blob/master/README.md
- https://github.com/jvoisin/compiler-flags-distro
- https://github.com/k4yt3x/sysctl
- https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/C-Based_Toolchain_Hardening_Cheat_Sheet.md
- https://github.com/trimstray/the-practical-linux-hardening-guide/wiki/Bootloader-and-Partitions
- https://kernsec.org/wiki/index.php/Kernel_Self_Protection_Project/Recommended_Settings
- https://linux-audit.com/linux-server-hardening-most-important-steps-to-secure-systems/
- https://madaidans-insecurities.github.io/guides/linux-hardening.html
- https://medium.com/@n80fr1n60/linux-binary-security-hardening-1434e89a2525
- https://news.ycombinator.com/item?id=18874080
- https://superuser.com/questions/1787084/preload-a-library-on-a-system-with-musl-libc
- https://wiki.debian.org/Hardening
- https://wiki.debian.org/HardeningWalkthrough
- https://wiki.debian.org/ReleaseGoals/SecurityHardeningBuildFlags
- https://wiki.gentoo.org/wiki/Hardened_Gentoo
- https://wiki.gentoo.org/wiki/Hardened/GNU_stack_quickstart
- https://wiki.gentoo.org/wiki/Hardened/PaX_Utilities
- https://wiki.gentoo.org/wiki/Hardened/Toolchain
- https://wiki.musl-libc.org/future-ideas.html
- https://wiki.ubuntu.com/ToolChain/CompilerFlags
- http://www.stxletto.com/posts/%E6%BC%AB%E8%B0%88Linux%E7%B3%BB%E7%BB%9F%E5%AE%89%E5%85%A8%E7%BC%BA%E9%99%B7%E7%BC%93%E8%A7%A3%E6%9C%BA%E5%88%B6/

## Smash Stack Protection (SSP) (Canary)
- `libssp` has been deprecated on modern systems: https://maskray.me/blog/2022-12-18-control-flow-integrity
- musl no longer uses libssp (1877bc9d8f), it has internal support, so SSP_SUPPORT was disabled leading some packages to not use SSP: https://www.mail-archive.com/openwrt-devel@lists.openwrt.org/msg52869.html
- Alpine Linux uses the `libssp_nonshared.a` library for architectures that do not support the required symbols for stack protection. Specifically, the `__stack_chk_fail` function is needed for stack protection, and some architectures may not have this function available in the libc or may have an incompatible implementation. `libssp_nonshared.a` provides the missing symbols needed for stack protection on such architectures. It is a standalone version of the SSP library that does not require linking against the shared version. The nonshared library is usually included in the package for the GCC compiler, along with the shared version of the library: https://github.com/golang/go/issues/58385
- if `__stack_chk_fail_local` is an unresolved symbol. This is needed on i386 as GCC emits [`local` calls to `__stack_chk_fail_local` on this architecture](https://www.openwall.com/lists/musl/2018/09/11/2) but not on 64-bit architectures, hence this issue can only be reproduced on i386. Unfortunately, linking against `libc_nonshared.a` is not portable as there is no guarantee that `__stack_chk_fail_local` is defined by this library. On Alpine, the library providing this symbol is instead called `libssp_nonshared.a` but it may be named differently on other musl-based Linux distributions
- This only happens on i386 as only on i386 (and 32-bit ppc) GCC emits local calls to `__stack_chk_fail_local` and can thus not resolve these symbols via libc.so. This is not the case on amd64. Also, this does not only apply to musl but also to glibc. See the musl ML post referenced in my original issue description (https://www.openwall.com/lists/musl/2018/09/11/2)
- Final: No need to provide libssp as we are not using i386/i?86 or PPC (Sabotage and Void are smarter than alpine when it comes to this)
- No need to use Alpine's gcc patch 0008 for libssp as we no longer require it
- `-fstack-protector-strong`: Also known as stack canary. The earliest version is simply called "-fstack-protector", but the coverage was bad (only "protects" <2% functions), there was also "-fstack-protector-full", adding checks to ALL functions, but the performance overhead is unacceptable. The "-strong" variant is an upgraded version, it uses a heuristic when determining if a function needs stack protectors, provides much better code coverage and a tradeoff between security and performance. It's relatively expensive, but is considered essential to prevent attackers from smashing the stack, and is enabled in most web browser engines.

## Stack Clash Protection (SCP)
- No performance overhead, and no regressions
- https://bugzilla.mozilla.org/show_bug.cgi?id=1588710

## Control-Flow Integrity (CFI)
- `-fsanitize=shadow-call-stack`
- `-fsanitize=kcfi` vs `-fsanitize=cfi`
- `-mcet -fcf-protection` (we have `--disable-cet` passed to GCC) (Control-Flow Enforcement Technology (CET) feature in future Intel and AMD CPUs); not supported by `musl`, and gentoo also masks `cet` support with `musl`
- `LDFLAGS+=' -Wl,-z,shstk'`
- https://docs.kernel.org/next/x86/shstk.html
- https://edu.chainguard.dev/chainguard/chainguard-images/about/images-compiled-programs/glibc-vs-musl/
- https://en.wikipedia.org/wiki/Shadow_stack
- https://gcc.gnu.org/pipermail/gcc-patches/2022-December/608723.html
- https://gitlab.alpinelinux.org/alpine/tsc/-/issues/64
- https://maskray.me/blog/2022-12-18-control-flow-integrity
- https://reviews.llvm.org/D58102

## Source Fortification
- `-D_FORTIFY_SOURCE=2`
- `-Wp,-D_FORTIFY_SOURCE=3` (3 recently added to GCC 12 with glibc)
- requires passing `-I/pass/to/usr/include/fortify`
- Does not work on `musl`: https://wiki.musl-libc.org/future-ideas
- https://github.com/jvoisin/fortify-headers

## Misc
- `-z,defs` and` -Wl,-pie` break packages like `nsss`
- `fortify-headers` breaks packages like `skalibs`
- `checksec --file=/bin/gcc` to check if a binary is hardened

## PIE
- `-fpie -Wl,-pie` vs `-fPIE`
- `--enable-default-pie` in `gcc` configure means PIE is automatically enabled

## PIC
- `-fpic -shared`
- `--with-pic` by default in `binutils`
- `--with-pic` is irrelevant when used alongside `--disable-static`:
  - shared libraries are built using PIC by default
  - static archives are built using non-PIC by default
  - `--with-pic` builds static archives with PIC
  - `--without-pic` builds shared libraries with non-PIC
  - use `--with-pic` in all cases

## Format Protection (Format string checks)
- `-Wformat -Wformat-security`
- `-Werror=format-security` (this alone is enough)
- `-Wformat -Wformat-security -Werror=format-security`
- These flags with `-Werror` stop compilation instead of just warning so you can open an issue for upstream to fix it

## BIND_NOW
- RELRO is useless without BIND_NOW
