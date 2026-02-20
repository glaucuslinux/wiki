---
title: Flags
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Current `CFLAGS`:
```
-pipe -Os -fgcse-las -flto=auto -fuse-linker-plugin -ffunction-sections -fdata-sections -fstack-protector-strong -fstack-clash-protection -fno-unwind-tables -fno-asynchronous-unwind-tables -fno-ident -fno-plt -march=x86-64-v3 -mtls-dialect=gnu2
```
- Current `CXXFLAGS` are identical to `CFLAGS`
- Current `LDFLAGS` (`CFLAGS` are added for more effective LTO):
```
-Wl,-O1,-s,-z,defs,-z,noexecstack,-z,now,-z,pack-relative-relocs,-z,relro,-z,separate-code,-z,text,--as-needed,--gc-sections,--no-keep-memory,--relax,--sort-common,--enable-new-dtags,--hash-style=gnu,--build-id=none
```

## CFLAGS (Ordered based on appearance in the GCC manual)
### `-pipe`
- Use pipes over temporary files; more RAM but less disk usage
- Ignored by `clang`

### `-g0`
- Compiling with `-g0` or without `-g` at all should in theory result in no debugging information in the binaries
- Some build systems misinterpret `-g0` as `-g` leaving debugging information in the binaries; this is a bug to be reported to the relative upstream

### `-fno-var-tracking`
- Speeds up compilation time when `-g` is used
- Does not make sense when `-g` is not used

### `-O3`
- Might beat `-O2` in microbenchmarks, but in the context of a distribution `-O3` loses in terms of code size and overall performance
- Can cause executables to run slower as it would generate more machine code than `-O2` which would make programs bigger and thus unable to fit in the L1 cache causing cache misses for instructions
- openSUSE says that `cmake` enabling `-O3` "by default" is not a good idea
- https://sunnyflunk.github.io/2023/01/15/x86-64-v3-Mixed-Bag-of-Performance.html
- https://sunnyflunk.github.io/2023/01/29/GCCs-O3-Can-Transform-Performance.html

### `-foptimize-strlen`
- Enabled for `-O2` and disabled for `-Os` and `-Oz`
- `clang` does not support `-foptimize-strlen`; `clang` implicitly performs this optimization

### `-fmerge-all-constants`
- Causes miscompilations due to non-conforming behaviour: https://lkml.org/lkml/2018/3/20/872

### `-fmodulo-sched`, `-fmodulo-sched-allow-regmoves` and `-fgcse-sm`
- Aggressive common subexpression elimination (cse) and scheduling (particularly modulo scheduling) can dramatically increase register pressure
- This leads to more loads and stores, causing spills and increasing code size
- This makes performance worse than without them
- It makes sense to have these off by default on register-starved machines like `x86`

### `-fgcse-las`
- Removes redundant load instructions which can reduce register pressure by reusing loaded values
- Might reduce code size
- Ignored by `clang`

### `-fdelete-null-pointer-checks`
- Enables simple constant folding optimizations
- Enabled by default on most targets; no need to mess with it

### `-fdevirtualize-at-ltrans`
- `gcc` disables it by default as it increases the size of streamed data
- Buggy and slow in practice
- https://forums.gentoo.org/viewtopic-t-1171518.html

### `-flive-range-shrinkage`
- Can increase code size with redundant push/pop
- Might decrease register pressure
- `clang` does not support `-flive-range-shrinkage`
- https://gcc.gnu.org/bugzilla/show_bug.cgi?id=116027

### `-fira-loop-pressure`
- Do not force use this flag as it is enabled by default on `-O3` for appropriate targets, also it might produce slower code
- https://paperswithcode.com/paper/a-collective-knowledge-workflow-for/review/

### `-fdelayed-branch`
- `x86-64` does not have delay slots rendering this "legacy" optimization irrelevant

### `-fsched-pressure`
- Should in theory decrease register pressure before allocation
- Can decrease code size by preventing register pressure and subsequent spills in register allocation
- No idea if it works with `-fschedule-insns` (which is not enabled by default at `-O2` and `-Os`)
- No idea if it works with `-fschedule-insns2` (which is enabled by default at `-O2` and `-Os`)

### `-fsched-spec-load`
- Permits the speculative motion of some load instructions before register allocation to minimize execution stalls due to data dependencies
- Works with `-fschedule-insns`
- `-fschedule-insns2` is enabled by default at `-O2` and `-Os`

### `-fsched-spec-load-dangerous`
- Similar to `-fsched-spec-load`
- Avoid options with `dangerous` in the name..

### `-fsched2-use-superblocks`
- Experimental option that might produce unreliable results and increase code size

### `-fspeculatively-call-stored-functions`
- Enabled by default at `-O2`
- Do not enable manually; let PGO decide

### `-freschedule-modulo-scheduled-loops`
- Modulo scheduling is a software pipelining technique; thus it might increase code size with no proved performance gain
- Most of `x86-64-v3` have hardware pipelining

### `-fselective-scheduling`, `-fselective-scheduling2`, `-fsel-sched-pipelining` and `-fsel-sched-pipelining-outer-loops`
- IA64 is probably the only target left requiring selective scheduling
- Selective scheduling itself is in a poor state nowadays
- `-fsel-sched-pipelining` has no effect without `-fselective-scheduling` or `-fselective-scheduling2`
- `-fsel-sched-pipelining-outer-loops` has no effect without `-fsel-sched-pipelining`
- https://gcc.gnu.org/pipermail/gcc-patches/2025-August/692322.html

### `-fno-semantic-interposition`
- This option is only for shared libraries/dynamic linking and breaks static binaries and libraries
- Makes code built with `-fPIC` and LTO faster, and improves performance in general; might cause subtle ABI breakages
- Breaks `LD_PRELOAD` which in turn breaks custom memory allocators like `mimalloc`
- Contrary to popular belief, enabling this flag globally is safe (unless interposing symbols is required, for example when using different allocators on system libraries), but the reason for it not being enabled by default is to comply with the ELF standard. In contrast, this flag is part of the default when using Clang
- https://maskray.me/blog/2021-05-09-fno-semantic-interposition

### `-fipa-reorder-for-locality`
- Minimizes branch distances between frequently called functions
- Involves function cloning which might increase code size
- Not compatible with `-flto-partition`
- Let PGO decide whether to enable this option or not
- https://mirrors.git.embecosm.com/mirrors/gcc/-/commit/6d9fdf4bf57353f9260a2e0c8774854fb50f5128
- https://inbox.sourceware.org/gcc-patches/26EB1960-A1D8-45F3-9646-4DBFFD39970A@nvidia.com/
- https://developer.arm.com/community/arm-community-blogs/b/tools-software-ides-blog/posts/gcc-15-continuously-improving

### `-fipa-pta`
- Abandoned and needs a major redesign
- Does not scale, at least for now (according to openSUSE)
- Increases memory usage and compilation time
- Prone to having the compiler segfault with an internal compiler error which leads to all kinds of weird errors like `duplicate case value` (affected packages: `bash`, `gcc`, `inetutils`, `libarchive`, `libedit`, `netbsd-curses`, `util-linux`)

### `-flive-patching`
- Prevents a lot of optimizations from gcc to produce output suitable for live-patching
- Does not work with `-flto`

### `-fisolate-erroneous-paths-attribute`
- Isolates UB paths from main control and turns them into a trap
- A clever trick but still a workaround not a solution
- `gcc`'s `-O2` might enable this in the future
- Might increase code size
- https://inbox.sourceware.org/gcc-patches/5f3028ab-dae1-e8d6-772c-3dbea0885df2@suse.de/T/

### `-ftree-cselim`
- Not enabled by default on any optimization level even when the target has `cmov`; the manual claims otherwise
- Often hurts performance on modern `x86-64-v3` by creating instruction dependencies that serialize execution
- Might reduce code size?
- https://yarchive.net/comp/linux/cmov.html
- https://inbox.sourceware.org/gcc-patches/5f3028ab-dae1-e8d6-772c-3dbea0885df2@suse.de/T/

### `-ffinite-loops`
- Can incorrectly remove infinite loops used for event polling or main loops causing potential breakages in various software
- Risky assumption with minimal benefit
- Mainly intended for C++ code
- https://forum.dlang.org/thread/aejdlmkvuwgbtxktpjby@forum.dlang.org

### `-fgraphite-identity`
- Graphite is not well maintained in `gcc` and will likely end up being removed entirely
- Most of its developers moved to LLVM's Polly
- Can't effectively optimize compared to baseline gcc
- The optimizations it is supposed to perform are being implemented via other methods
- Not necessarily buggy, but its benefits are rather doubtful nowadays
- https://dl.acm.org/doi/full/10.1145/3674735

### `-floop-nest-optimize`
- Required for `isl` to work
- Previously called `-floop-optimize-isl`
- The newer way to implement Graphite
- Replaces `-floop-interchange`, `-ftree-loop-linear`, `-floop-strip-mine` and `-floop-block`
- Still considered experimental

### `-floop-parallelize-all`
- Does not get activated unless `-ftree-parallelize-loops=4` is used (fixed at compile time); where a number is specified
- It is not a good idea to use `-floop-parallelize-all` because it does not check if it is profitable to parallelize a loop or not
- Requires OMP (OpenMP and libgomp)
- https://bugs.launchpad.net/libmemcached/+bug/1232551
- https://gcc.gnu.org/wiki/Graphite/Parallelization
- https://github.com/InBetweenNames/gentooLTO/issues/158
- https://github.com/InBetweenNames/gentooLTO/issues/638

### `-ftrivial-auto-var-init=zero`
- Reduce the risk of a logic bug leading to a security vulnerability
- Increases code size considerably and degrades performance
- Only applies to variables with automatic storage duration
- Does not apply to objects with dynamic storage duration (`new` and `delete`)
- https://best.openssf.org/Compiler-Hardening-Guides/Compiler-Options-Hardening-Guide-for-C-and-C++.html
- https://gcc.gnu.org/bugzilla/show_bug.cgi?id=111523
- https://github.com/ossf/wg-best-practices-os-developers/issues/245
- https://stackoverflow.com/questions/75061576/using-ftrivial-auto-var-init-to-guarantee-the-initialization-of-padding-bytes

### `-fvariable-expansion-in-unroller`
- Increases register pressure and should not be used without `-fsched-pressure`
- This takes a number and by default GCC only enables it for PowerPC, but disables it for other architectures
- Not supported by `clang`
- https://reviews.llvm.org/D4565

### `-freorder-blocks-algorithm=simple`
- Enabled by default when using `-Os`
- `-O2` uses `stc` instead of `simple`
- `simple` does not increase code size and works well with LTO
- `stc` duplicates code to minimize the number of executed branches
- https://developers.redhat.com/blog/2015/12/07/octobernovember-2015-gnu-toolchain-update
- https://github.com/riscvarchive/riscv-gcc/issues/144

### `-falign-functions=32`
- Not important for AMD CPUs, but for Intel you'd have to use 64 to get the fastest performance, and it bloats by trying to resize into chunks that may be huge, and if it is not specified or is zero, then it will use a machine-dependent default (as it is enabled on O2 and O3)
- https://gcc.gnu.org/bugzilla/show_bug.cgi?id=66240
- https://lkml.org/lkml/2015/5/19/1142
- https://www.reddit.com/r/Gentoo/comments/11iv2tl/need_advice_kernel_optimization_low_latency_max/

### `-flimit-function-alignment`
- Has no use when `-falign-functions` is not used

### `-flto=auto`
- Without the linker plugin LTO will not happen (particularly for static libraries as you will get the same code without `-flto`)
- Will spawn `n` threads based on the number of threads; similar to `make -j`
- Use instead of `-flto` alone to get rid of the 128 LTRANS serial jobs message
- `gcc`'s version of ThinLTO is WHOPR, previously it was enabled by using `-fwhopr`, but now it has become the default mode for LTO and `-fwhopr` was removed from `gcc`'s options; `-fno-fat-lto-objects` is now the default

### `-flto-compression-level=3`
- Available when `zstd` is the backend for LTO and it should in theory result in smaller binaries
- `clang` does not support `-flto-compression-level`

### `-fuse-linker-plugin`
- Enabled by default if `gcc` is built with `lto` enabled
- There is no actual guarantee that `-fuse-linker-plugin` will be used in cases where `gcc` is built without `lto` support and `binutils` is built without plugins support
- This means that not using this flag as in the case above might cause `-fwhole-program` to be picked which is not a good idea; use `-fuse-linker-plugin` so programs can rely on a linker plugin and forward the `lto` stuff to some other linker (e.g. `mold`) successfully
- Ignored by `clang`

### `-ftracer` and `-funroll-loops`
- Enabled after decisions by PGO and shouldn't be manually used everywhere; may cause regressions and produce bigger code that may or may not be fast

### `-ffunction-sections`, `-fdata-sections` and `-Wl,--gc-sections`
- These options affect code generation, and should only be used when there are significant benefits from doing so
- They make the assembler and linker create larger and slower objects (larger `.o` and `.a` files); this is needed for the final binaries to be smaller
- Prevent optimizations by the compiler and assembler using relative locations inside a translation unit since the locations are unknown until link time (e.g. relaxing calls to short call instructions)
- Might cause subtle breakages by mistakenly removing necessary sections; use `-Wl,--no-gc-sections` when that happens
- Might help reduce attack surface by removing unused sections
- https://flameeyes.blog/2009/11/21/garbage-collecting-sections-is-not-for-production/
- https://forum.dlang.org/post/wfdjinmbaepkxxflqnxm@dfeed.kimsufi.thecybershadow.net
- https://github.com/android/ndk/issues/748
- https://lists.freebsd.org/pipermail/freebsd-current/2013-September/044561.html

### `-fsection-anchors`
- Section anchors are enabled by default with `-Os`?
- Using `-Os` with `-fdata-sections` will result in worst code size due to section anchors; you either use `-fdata-sections` with `-fno-section-anchors` or nothing at all
- `gcc -fsection-anchors` throws a not supported target error on `x86-64`
- https://forum.dlang.org/thread/yjhogkcbegpsrxjkrfmh@forum.dlang.org
- https://gcc.gnu.org/onlinedocs/gccint/Anchored-Addresses.html
- https://gcc.gnu.org/onlinedocs/gccint/Special-Accessors.html
- https://github.com/foss-for-synopsys-dwc-arc-processors/toolchain/issues/287

### `--param=min-crossjump-insns=<1,65536>`
- `-O2` uses the value `5`, while `-Os` uses `1` which is more aggressive

### `-fcf-protection=full`
- Requires Intel CET to be present
- https://maskray.me/blog/2022-12-18-control-flow-integrity

### `-fno-unwind-tables`
- `gcc` enables `-funwind-tables` by default and its documentation says that you normally do not need to enable this; instead, a language processor that needs this handling enables it on your behalf

### `-fno-asynchronous-unwind-tables`
- Refer to `-fno-unwind-tables`; similar behavior
- `-fasynchronous-unwind-tables` is required by many debugging and performance tools on most architectures (`armhfp`, `ppc`, `ppc64` and `ppc64le` do not need these tables due to architectural differences in stack management)
- `gcc` does not enable `-fasynchronous-unwind-tables` by default despite being necessary on `aarch64`?
- `.eh_frame` is back as of `8.1.0` and both `-fasynchronous-unwind-tables` and `-funwind-tables` were made the default for aarch64
- RHEL and Fedora patch `gcc` to enable it by default
- https://code.forksand.com/qemu/edk2/commit/cbf00651eda6818ca3c76115b8a18e3f6b23eef4?lang=zh-HK
- https://developers.redhat.com/blog/2018/03/21/compiler-and-linker-flags-gcc/
- https://gcc.gnu.org/legacy-ml/gcc-help/2016-10/msg00023.html
- https://lists.busybox.net/pipermail/busybox/2012-September/078331.html
- https://lists.busybox.net/pipermail/busybox/2012-September/078326.html

### `-fno-common`
- Default as of GCC 10
- https://gcc.gnu.org/gcc-10/porting_to.html

### `-pie`, `-fpie`, `-fPIE`, `-fpic` and `-fPIC`
- It is better not to explicitly specify these options globally as we don't know whether they will be passed to build an executable or a shared library (passing `-fpie`/`-fPIE` when building a shared library is not a good thing..)
- It is better to have `gcc` configured with `--enable-default-pie` so that it knows when to pass these options
- These options do not contradict with `-fno-plt`
- `-fno-pic` can only be used by executables
- `-fpic` can be used by both executables and shared objects
- `-fpie` can only be used by executables
- https://maskray.me/blog/2021-01-09-copy-relocations-canonical-plt-entries-and-protected

### `-fno-plt`
- Only applies to shared libraries and dynamic linking
- Arch and OpenWRT use it by default
- It makes sense to use `-fno-plt` as we are already disabling lazy binding using `-Wl,-z,now` which `musl` does not support in favor of immediate binding which `musl` recommends
- Removes the ability to `prelink`; `prelink`ing is bad for ASLR
- A `call *GOT` instruction is 6 bytes on `x86-64` vs a `call plt` is 5; `-fno-plt` eliminates the entire PLT stub (16+ bytes per function)
- https://gist.github.com/reveng007/b9ef8c7c7ed7a46b10a325f4dee42ac4
- https://github.com/archlinux/svntogit-packages/search?q=%22-fno-plt%22
- https://github.com/InBetweenNames/gentooLTO/issues/302
- https://github.com/openwrt/openwrt/commit/fb713ddd4dd49fb60ee4ab732071abf2c3ad5fc5
- https://lists.alpinelinux.org/~alpine/devel/%3C1628515011.zujvcn248v.none%40localhost%3E
- https://maskray.me/blog/2021-09-19-all-about-procedure-linkage-table
- https://patchwork.ozlabs.org/project/gcc/patch/alpine.LNX.2.11.1505061730460.22867@monopod.intra.ispras.ru/
- https://stackoverflow.com/questions/77197493/isnt-no-plt-always-preferrable-to-z-now

### `-fvisibility-inlines-hidden`
- Breaks a lot of packages (particularly C++ packages), and many suggest disabling it to allow `libstdc++` to detect its symbols
- Its behavior is already covered by `-fvisibility=hidden`
- Do not use `-fvisibility=hidden` in `CFLAGS` (only in `CXXFLAGS`) as it breaks stuff for C programs (unlike -inlines- because that is C++ only) (despite being somewhat useful for PIC libraries)
- https://bugs.gentoo.org/69342
- https://forums.gentoo.org/viewtopic-p-8604744.html?sid=eb649881fb22afe89b2160b9dd4f89f9
- https://gcc.gnu.org/wiki/Visibility
- https://stackoverflow.com/questions/59469822/how-fvisibility-inlines-hidden-differs-from-fvisibility-hidden-in-gcc

### `-march=x86-64-v3`
- x86-64-v3 provides better performance and battery life

### `-mfpmath=sse`
- Automatically detected on modern 64-bit hosts and Linux targets

### `-malign-data=abi`
- `compat` is the default value
- `cacheline` is bloat, but might increase performance in some cases
- `clang` does not support `-malign-data`; however, it provides `-malign-branch-boundary`, `-malign-branch` and `-malign-double`
- https://github.com/InBetweenNames/gentooLTO/issues/164

### `-mabi=sysv`
- Automatically detected on modern 64-bit hosts and Linux targets

### `-mtls-dialect=gnu2`
- `musl` supports `gnu2` for `x86-64` as of `1.1.3`
- No need to specify `-ftls-model` as `gcc` automatically picks the most efficient based on the mode being used (`-fno-pic`, `-fpie`, `-fpic`..)
- https://maskray.me/blog/2021-02-14-all-about-thread-local-storage

### `-momit-leaf-frame-pointer`
- Redundant when `-fomit-frame-pointer` is used (which is the default with `-O2` and `-Os`)
- https://phoronix.com/review/fedora-frame-pointer

### Disable LTO
- Remove `-flto=auto -fuse-linker-plugin` (and `-flto-compression-level=3` if being used)

## LDFLAGS (Ordered based on appearance in the GNU linker manual)
### `-O1`
- Enables linker optimizations which can reduce code size
- `bfd` optimizes if a non-zero value was given with no differences between the values
- `lld` has a higher level `-O2`, and it uses `-O1` by default
- Ignored by `mold`

### `-x, --discard-all` and `-X, --discard-locals`
- `-s, --strip-all` already removes everything (including `.symtab` and `.strtab`)
- for `-x` and `-X` to work, `.symtab` needs to exist, which means using them alongside `-s` is redundant
- `-X` is the default behavior for gnu ld `ld --help`
- https://maskray.me/blog/2020-11-15-explain-gnu-linker-options

### `-z,separate-code` and `--rosegment`
- Using `-z,separate-code` is good for security
- Adding `--rosegment` when `-z,separate-code` is used makes resulting binaries smaller
- Using `-z,noseparate-code` is a bad idea; remember how passing `--disable-separate-code` to `binutils` bloated every executable and shared library by at least 2 MB (for better huge page support)
- With traditional `-z,noseparate-code`, `bfd` defaults to a `RX/R/RW` program header layout
- With `-z,separate-code` (default on Linux/x86 from binutils 2.31 onwards), `bfd` defaults to a `R/RX/R/RW` program header layout
- `lld` defaults to `R/RX/RW(RELRO)/RW(non-RELRO)`
- With `--rosegment`, `lld` uses `RX/RW(RELRO)/RW(non-RELRO)`
- Placing all `R` before `RX` is preferable as it can save one program header and reduce alignment costs
- `lld`'s split of `RW` saves one maxpagesize alignment and can make the linked image smaller
- This breaks some assumptions that the (so-called) "text segment" precedes the (so-called) "data segment"
- If you use bfd's `noseparate-code` or lld's `--no-rosegment`, .rodata and .text will be placed in the same PT_LOAD segment
- `lld` defaults to `noseparate-code`
- `--no-rosegment` combines the read-only and the RX segments (output file will consume less address space at run-time)
- AArch64 and PowerPC64 have a default MAXPAGESIZE of 65536 so `-z noseparate-code` default ensures that they will not experience unnecessary size increase
- In -z noseparate-code layouts waste half a huge page on unrelated content and switching to `-z separate-code` reclaims the benefits of the half huge page but increases the file size
- ld.bfd's -z separate-code is essentially split into two options in lld: -z separate-code and --rosegment.
- GitHub actions for `rad` uses `ubuntu-latest` which does not recognize `--rosegment`:
```
Nim Output /usr/bin/ld: unrecognized option '--rosegment'
       ... /usr/bin/ld: use the --help option for usage information
       ... collect2: error: ld returned 1 exit status
```
- glaucus's toolchain uses `--rosegment` by default even if the flag was not provided in LDFLAGS
- https://maskray.me/blog/2020-11-15-explain-gnu-linker-options
- https://maskray.me/blog/2020-12-19-lld-and-gnu-linker-incompatibilities
- https://maskray.me/blog/2023-12-17-exploring-the-section-layout-in-linker-output

### `-z,noexectack`
- Provides "Stack Execution Protection"
- Should be the default behavior by `gcc`; does not mark the stack as executable by default, and warns when that happens

### `-z,pack-relative-relocs`
- https://maskray.me/blog/2021-10-31-relative-relocations-and-relr

### `-z,text`
- Enforces `Write XOR Execute (W^X)`
- `lld` defaults to `-z,text`
- `hardened_malloc` builds with `-z,text` and `-z,defs` by default

### `-z,x86-64-v3`
- `lld` does not support `-z,x86-64-v3`

### `--no-copy-dt-needed-entries`
- Stops the linker from resolving symbols in the produced binary to transitive library dependencies
- Enforces that the binary must explicitly link against all of its actual dependencies
- Enabled by default behavior in `ld.bfd` since 2.22
- https://best.openssf.org/Compiler-Hardening-Guides/Compiler-Options-Hardening-Guide-for-C-and-C++.html

### `-Wl,--gc-sections` and `-Wl,-z,start-stop-gc`
- Only useful when `-ffunction-sections` and `-fdata-sections` are used
- Removes unused code sections in libraries that enable the flags above
- `-z,start-stop-gc` makes `--gc-sections` more accurate and should in theory result in a smaller binary
- `lld` defaults to `-z,start-stop-gc`
- `mold` does not support `-z,start-stop-gc`
- https://community.nxp.com/t5/Kinetis-Microcontrollers/Optimization-without-quot-ffunction-sections-quot-and-quot-fdata/m-p/1280268
- https://community.nxp.com/t5/LPCXpresso-IDE-FAQs/Unused-Section-Elimination/m-p/475002
- https://courses.washington.edu/cp105/GCC/Removing%20unused%20functions%20and%20dead%20code.html
- https://elinux.org/images/2/2d/ELC2010-gc-sections_Denys_Vlasenko.pdf
- https://github.com/llvm/llvm-project/issues/51726
- https://github.com/rui314/mold/issues/596
- https://lld.llvm.org/ELF/start-stop-gc.html
- https://maskray.me/blog/2021-01-31-metadata-sections-comdat-and-shf-link-order
- https://stackoverflow.com/questions/31521326/gc-sections-discards-used-data
- https://stackoverflow.com/questions/4274804/query-on-ffunction-section-fdata-sections-options-of-gcc

### `--no-keep-memory` and `--reduce-memory-overheads`
- Make memory consumption reasonable especially with the optimizations we are using (mainly LTO), at the expense of a slight increase in link time
- `lld` and `mold` do not support `--reduce-memory-overheads`

### `--relax`
- Performs some optimizations (instruction relaxation) for certain targets
- `gas` from `binutils` has the configure option `--enable-x86-relax-relocations` that is on by default; unlike `tcc`'s internal assembler which does not support instruction relaxation for understandable reasons
- `gcc` also has `-mrelax-cmpxchg-loop` for x86
- This means that `x86-64` has some form of relaxable instructions that `ld.bfd` and `gas` support; enabling this until for now
- `ld.bfd` ignores both `--relax` and `--no-relax` on platforms where the feature is not supported
 - `mold` enables `--relax` by default
- https://fzakaria.com/2026/01/30/crazy-shit-linkers-do-relaxation
- https://github.com/gentoo-haskell/gentoo-haskell/issues/704
- https://inbox.sourceware.org/binutils/20160203162732.GA1545@intel.com/
- https://maskray.me/blog/2021-03-14-the-dark-side-of-riscv-linker-relaxation
- https://reviews.llvm.org/D100835
- https://reviews.llvm.org/D113615
- https://reviews.llvm.org/D157020
- https://reviews.llvm.org/D75203
- https://sourceware.org/bugzilla/show_bug.cgi?id=27837
- https://www.sifive.com/blog/all-aboard-part-3-linker-relaxation-in-riscv-toolchain

### `--sort-common`
- Sorts COMMON symbols by decreasing alignment, which saves some padding resulting in minor size benefits
- Can degrade performance if COMMON symbols in an object file have locality and `--sort-common` breaks that locality
- Ignored by `lld` and `mold`
- https://maskray.me/blog/2022-02-06-all-about-common-symbols

### `--hash-style=gnu`
- `gnu` is the more modern style
- https://maskray.me/blog/2022-08-21-glibc-and-dt-gnu-hash

### `--compress-debug-sections=zstd`
- It does not make sense to compress "nonexistant" debug sections as we're stripping everything with `-s`

### `--build-id=none`
- smaller executables and faster link time
- https://maskray.me/blog/2021-12-19-why-isnt-ld.lld-faster

## Latest Experimental Flags
- The following flags are still being studied/tested:
```sh
# CFLAGS
-fgcse-las
-fsched-pressure
-fno-ident

# LDFLAGS
-z,defs
-z,separate-code
-z,text
--no-keep-memory
--build-id=none
```

## References
- https://agner.org/optimize/optimizing_cpp.pdf
- https://aykevl.nl/2018/04/codesize
- https://documentation.suse.com/sbp/devel-tools/html/SBP-GCC-14/index.html
- https://forums.gentoo.org/viewtopic-t-1171518.html?sid=259e0b60fe8784f498bb919b83beb3fb
- https://gcc.gnu.org/install/build.html
- https://gcc.gnu.org/install/configure.html
- https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html
- https://gcc.gnu.org/onlinedocs/gcc/Option-Summary.html
- https://gcc.gnu.org/onlinedocs/gcc/x86-Options.html
- https://gcc.gnu.org/onlinedocs/libstdc++/manual/configure.html
- https://gentoo.org/news/2024/02/04/x86-64-v3.html
- https://phoronix.com/news/Gentoo-x86-64-v3-Binaries
- https://serpentos.com/blog/2024/01/19/january-updates/
- https://wiki.ubuntu.com/ToolChain/CompilerFlags
- https://youtube.com/watch?v=c6csK4Z_U98&list=PL2saaWTUEfabOcP1xKb64KHNn9vKKPfef
