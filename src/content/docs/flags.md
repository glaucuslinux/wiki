---
title: Flags
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Current `CFLAGS`:
```c
-pipe -O2 -fgraphite-identity -floop-nest-optimize -flto=auto -flto-compression-level=3 -fuse-linker-plugin -fstack-protector-strong -fstack-clash-protection -fno-unwind-tables -fno-asynchronous-unwind-tables -fno-plt -march=x86-64-v3 -mfpmath=sse -mabi=sysv -malign-data=cacheline -mtls-dialect=gnu2
```
- Current `CXXFLAGS` are identical to `CFLAGS`
- Current `LDFLAGS`:
```c
-Wl,-O1,-s,-z,noexecstack,-z,now,-z,pack-relative-relocs,-z,relro,-z,x86-64-v3,--as-needed,--gc-sections,--sort-common,--hash-style=gnu
```
## CFLAGS
### `-pipe`
- Use pipes rather than temporary files
- Uses more RAM but reduces disk usage
- Does it get ignored by `clang`?
### `-g0`
- Compiling with `-g0` or without `-g` at all results in no debugging information in the binaries
- Some build systems might misinterpret `-g0` as `-g`; this is a bug and should be reported to the relative upstream
### `-flto=auto`
- Will spawn N threads based on the number of threads; similar to `make -j`
- Use instead of `-flto` alone to get rid of the 128 LTRANS serial jobs
- `gcc`'s version of ThinLTO is WHOPR, previously it was enabled by using `-fwhopr`, but now it has become the default mode for LTO, and was removed from `gcc`'s options
### `-flto-compression-level=3`
- Available when using `zstd` as a backend for LTO as it results in smaller binaries
### `-fgraphite-identity`
- Graphite is not well maintained in `gcc` and will likely end up being removed entirely
- Most of its developers have moved to Polly in LLVM/Clang?
- The optimizations it was supposed to make are just being implemented via other methods
- It's not necessarily buggy, but its benefits are rather doubtful
### `-floop-nest-optimize`
- Required for `isl` to work
- Used to be known as `-floop-optimize-isl`
- A new way to implement Graphite.
- Replaces `-floop-interchange`, `-ftree-loop-linear`, `-floop-strip-mine` and `-floop-block`
- Still considered experimental?
### `-fno-plt`
- Only applies to shared libraries and when dynamic linking
- Recommended to enable it on 64-bit systems
- Alpine, Arch and OpenWRT are using it by default
- Incompatible with lazy linking which should not be relevant with `musl` as it does not support lazy linking
- Removes the ability to `prelink`; which is probably a bad idea nowadays
- https://github.com/archlinux/svntogit-packages/search?q=%22-fno-plt%22
- https://github.com/openwrt/openwrt/commit/fb713ddd4dd49fb60ee4ab732071abf2c3ad5fc5
- https://lists.alpinelinux.org/~alpine/devel/%3C1628515011.zujvcn248v.none%40localhost%3E
### `-fuse-linker-plugin`
- Enabled by default if `gcc` is built with `lto` enabled
- There is no actual guarantee that `-fuse-linker-plugin` will be used in cases where `gcc` is built without `lto` support and `binutils` is built without plugins support
- This means that not using this flag in the case above, it might resort to `-fwhole-program` which is not a good idea, so use it instead so it can rely on a linker plugin and forward the `lto` stuff to some other linker (e.g. `mold`) successfully
### `-fdevirtualize-at-ltrans`
- `gcc` disables it by default as it increases the size of streamed data
- In practice, it is buggy and really slow
### `-fipa-pta`
- Abandoned and needs a major redesign
- Does not scale, at least for now according to openSUSE
- Increases memory usage and compilation time
- Prone to having the compiler segfault with an internal compiler error which leads to all kinds of weird errors like `duplicate case value` (affected packages: `bash`, `gcc`, `inetutils`, `libarchive`, `libedit`, `netbsd-curses`, `util-linux`)
### `-fno-unwind-tables`
- `-funwind-tables` is enabled by default, but `gcc`'s documentation says that you normally do not need to enable this option; instead, a language processor that needs this handling enables it on your behalf
### `-fno-asynchronous-unwind-tables`
- Refer to `-fno-unwind-tables`; similar behavior
- `-fasynchronous-unwind-tables` is required for many debugging and performance tools to work on most architectures (armhfp, ppc, ppc64, ppc64le do not need these tables due to architectural differences in stack management)
- Even though it is necessary on aarch64, upstream gcc does not enable it by default?
- `.eh_frame` is back as of `8.1.0` and both `-fasynchronous-unwind-tables` and `-funwind-tables` were made the default for aarch64
- RHEL and Fedora patch `gcc` to enable it by default
- https://code.forksand.com/qemu/edk2/commit/cbf00651eda6818ca3c76115b8a18e3f6b23eef4?lang=zh-HK
- https://developers.redhat.com/blog/2018/03/21/compiler-and-linker-flags-gcc/
- https://gcc.gnu.org/legacy-ml/gcc-help/2016-10/msg00023.html
- https://lists.busybox.net/pipermail/busybox/2012-September/078331.html
- https://lists.busybox.net/pipermail/busybox/2012-September/078326.html
### `-O3`
- Will certainly beat `-O2` in microbenchmarks, but when you benchmark an entire distribution you will see that `-O2` beats it in terms of size and performance
- Can cause executables to run slower because it would generate more machine code than `-O2` which would then make the program bigger and unable to fit in the L1 cache causing cache misses for instructions
- openSUSE says that `cmake` using `-O3` by default is stupid
- https://sunnyflunk.github.io/2023/01/15/x86-64-v3-Mixed-Bag-of-Performance.html
- https://sunnyflunk.github.io/2023/01/29/GCCs-O3-Can-Transform-Performance.html
### `-fmerge-all-constants`
- Causes miscompilations, due to non-conforming behaviour: https://lkml.org/lkml/2018/3/20/872
### `-fmodulo-sched`, `-fmodulo-sched-allow-regmoves`, `-fgcse-sm` and `-fgcse-las`
- Aggressive common subexpression elimination (cse) and scheduling (particularly modulo scheduling) can dramatically increase register pressure leading to more loads and stores, making performance worse than it would be without them, especially on register-starved machines like x86 it makes sense to have some of these off by default
### `-fsched-pressure`
- Enabled by default when `-fschedule-insns` is used at `-O2` and higher
### `-fira-loop-pressure`
- Do not force use this flag as it is enabled by default on `-O3` for appropriate targets, also it sometimes produces slower code: https://paperswithcode.com/paper/a-collective-knowledge-workflow-for/review/
### `-fno-semantic-interposition`
- Makes code built with `-fPIC` and LTO faster, and improves performance in general, but breaks `LD_PRELOAD` which in turn breaks allocators like `mimalloc`
- Contrary to popular belief, enabling this flag globally is safe (unless interposing symbols is required, for example when using different allocators on system libraries), but the reason for it not being enabled by default is to comply with the ELF standard. In contrast, this flag is part of the default when using Clang. This option is also only for shared libraries/dynamic linking and breaks static libraries
### `-floop-parallelize-all`
- Does not get activated unless `-ftree-parallelize-loops=4` is used; where a number is specified, and it is not a good idea to use `-floop-parallelize-all` because it does not check if it is profitable to parallelize a loop or not, also it requires OMP (OpenMP and libgomp)
- https://bugs.launchpad.net/libmemcached/+bug/1232551
- https://github.com/InBetweenNames/gentooLTO/issues/158
- https://github.com/InBetweenNames/gentooLTO/issues/638
### `-fvariable-expansion-in-unroller`
- This takes a number and by default GCC only enables it for PowerPC, but disables it for other architectures, also it is not supported by clang apparently:
https://reviews.llvm.org/D4565
### `-falign-functions=32`
- Not important for AMD CPUs, but for Intel you'd have to use 64 to get the fastest performance, and it bloats by trying to resize into chunks that may be huge, and if it is not specified or is zero, then it will use a machine-dependent default (as it is enabled on O2 and O3)
- https://gcc.gnu.org/bugzilla/show_bug.cgi?id=66240
- https://lkml.org/lkml/2015/5/19/1142
- https://www.reddit.com/r/Gentoo/comments/11iv2tl/need_advice_kernel_optimization_low_latency_max/
### `-flimit-function-alignment`
- Has no use when `-falign-functions` is not used
### `-ftracer` and `-funroll-loops`
- Enabled after decisions by PGO and shouldn't be manually used everywhere; may cause regressions and produce bigger code that may or may not be fast
### `-ffunction-sections` and `-fdata-sections`
- According to GCC's optimization manual, these options affect code generation, and should only be used when there are significant benefits from doing so
- They make the assembler and linker create larger and slower objects and executables
- Prevent optimizations by the compiler and assembler using relative locations inside a translation unit since the locations are unknown until link time
- An example of such an optimization is relaxing calls to short call instructions
### `-fvisibility-inlines-hidden`
- Breaks a lot of packages (particularly C++ packages), and many suggest disabling it to allow `libstdc++` to detect its symbols
- Its behavior is already covered by `-fvisibility=hidden`
- Do not use `-fvisibility=hidden` in `CFLAGS` (only in `CXXFLAGS`) as it breaks stuff for C programs (unlike -inlines- because that is C++ only)
- https://bugs.gentoo.org/69342
- https://forums.gentoo.org/viewtopic-p-8604744.html?sid=eb649881fb22afe89b2160b9dd4f89f9
- https://gcc.gnu.org/wiki/Visibility
- https://stackoverflow.com/questions/59469822/how-fvisibility-inlines-hidden-differs-from-fvisibility-hidden-in-gcc

### `-march=x86-64-v3`
- x86-64-v3 provides better performance and battery life

### Disable LTO
- Remove `-flto=auto -flto-compression-level=3 -fuse-linker-plugin `

## LDFLAGS
### `-Wl,--gc-sections`
- Useful only when `-ffunction-sections` and `-fdata-sections` are used
- Removes unused code sections in libraries that enable the flags above
- https://community.nxp.com/t5/Kinetis-Microcontrollers/Optimization-without-quot-ffunction-sections-quot-and-quot-fdata/m-p/1280268
- https://community.nxp.com/t5/LPCXpresso-IDE-FAQs/Unused-Section-Elimination/m-p/475002
- https://courses.washington.edu/cp105/GCC/Removing%20unused%20functions%20and%20dead%20code.html
- https://elinux.org/images/2/2d/ELC2010-gc-sections_Denys_Vlasenko.pdf
- https://stackoverflow.com/questions/31521326/gc-sections-discards-used-data
- https://stackoverflow.com/questions/4274804/query-on-ffunction-section-fdata-sections-options-of-gcc
### `-Wl,-z,noexectack`
- Provides "Stack Execution Protection"
- Should be the default behavior by `gcc`; does not mark the stack as executable by default, and warns when that happens
### `-Wl,-O1`
- No higher value
- Ignored by `mold`

## References
- https://documentation.suse.com/sbp/devel-tools/html/SBP-GCC-14/index.html
- https://forums.gentoo.org/viewtopic-t-1171518.html?sid=259e0b60fe8784f498bb919b83beb3fb
- https://gcc.gnu.org/install/build.html
- https://gcc.gnu.org/install/configure.html
- https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html
- https://gcc.gnu.org/onlinedocs/gcc/Option-Summary.html
- https://gcc.gnu.org/onlinedocs/gcc/x86-Options.html
- https://gcc.gnu.org/onlinedocs/libstdc++/manual/configure.html
- https://serpentos.com/blog/2024/01/19/january-updates/
- https://www.gentoo.org/news/2024/02/04/x86-64-v3.html
- https://www.phoronix.com/news/Gentoo-x86-64-v3-Binaries
- https://www.youtube.com/watch?v=c6csK4Z_U98&list=PL2saaWTUEfabOcP1xKb64KHNn9vKKPfef
