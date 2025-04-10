---
title: llvm
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Do not set `BUILD_SHARED_LIBS`
- Do not depend on `PyYAML`; required for `llvm-libc`
- `LLVM_ENABLE_ASSERTIONS` is `OFF` by default with `Release` builds
- Do we need `LLVM_PARALLEL_COMPILE_JOBS`?
- Do we need `LLVM_PARALLEL_TABLEGEN_JOBS`?
- Do we need `LLVM_INSTALL_UTILS` for `FileCheck` and `not`?
- Do not set `LLVM_EXTERNAL_LIT` to allow the bundled `lit` to run; needed for standalone builds of subprojects
- Do we need `LLVM_ROOT`?
- Rely on the host's compiler instead of crafting our own for the `toolchain` stage
- For list of supported targets by `LLVM_TARGETS_TO_BUILD`, check `llvm/lib/Target/`
- Enable `LLVM_OPTIMIZED_TABLEGEN` to reduce build time
- Disable `CLANG_ENABLE_STATIC_ANALYZER` for `toolchain` and `cross`
- To disable `LIBCXX_ENABLE_RTTI` disable `LIBCXX_ENABLE_EXCEPTIONS` first
- What is the default value for `LIBCXX_CXX_ABI`?
- Clang uses LLVM’s integrated assembler (llvm-as) by default on all targets where it is supported
- Enable `LIBCXX_USE_COMPILER_RT` and `LIBCXXABI_USE_COMPILER_RT` to use `compiler-rt` over `libgcc_s`
- Enable `LIBCXXABI_USE_LLVM_UNWINDER` to use `libunwind` over `libgcc_s`
- Clang defaults to gnu99 mode while GCC defaults to gnu89 mode; try passing `-std=gnu89` to clang for weird link-time errors

## References
- https://bcain-llvm.readthedocs.io/projects/libunwind/en/latest/BuildingLibunwind/
- https://clang.llvm.org/c_status.html
- https://clang.llvm.org/cxx_status.html
- https://clang.llvm.org/docs/ClangCommandLineReference.html
- https://clang.llvm.org/docs/CommandGuide/clang.html
- https://clang.llvm.org/docs/CrossCompilation.html
- https://clang.llvm.org/docs/InternalsManual.html
- https://clang.llvm.org/docs/Toolchain.html
- https://clang.llvm.org/docs/Tooling.html
- https://clang.llvm.org/docs/UsersManual.html
- https://clang.llvm.org/get_started.html
- https://cliutils.gitlab.io/modern-cmake/
- https://cmake.org/cmake/help/book/mastering-cmake/chapter/Cross%20Compiling%20With%20CMake.html
- https://cmake.org/cmake/help/latest/index.html
- https://compiler-rt.llvm.org/
- https://github.com/llvm/llvm-project/tree/main/llvm/lib/Target
- https://github.com/llvm/llvm-zorg
- https://libcxx.llvm.org/Modules.html
- https://libcxx.llvm.org/TestingLibcxx.html
- https://libcxx.llvm.org/UserDocumentation.html
- https://libcxx.llvm.org/VendorDocumentation.html
- https://llvm.org/docs/AdvancedBuilds.html
- https://llvm.org/docs/BuildingADistribution.html
- https://llvm.org/docs/CMake.html
- https://llvm.org/docs/genindex.html
- https://llvm.org/docs/GettingStarted.html
- https://llvm.org/docs/GoldPlugin.html
- https://llvm.org/docs/HowToCrossCompileBuiltinsOnArm.html
- https://llvm.org/docs/HowToCrossCompileLLVM.html
- https://llvm.org/docs/Lexicon.html
- https://llvm.org/docs/UserGuides.html
- https://mcilloni.ovh/2021/02/09/cxx-cross-clang/
- https://muxup.com/building-testing-and-distributing-llvm-clang-and-friends
- https://rocm.docs.amd.com/projects/llvm-project/en/latest/LLVM/llvm/html/CMake.html
- https://wiki.musl-libc.org/building-llvm.html
- https://www.youtube.com/watch?v=NMQrnVDf-rY
