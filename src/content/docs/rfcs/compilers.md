---
title: Compilers
description: An opinionated Linux® distribution based on musl libc and toybox
---

- We are constantly evaluating the use of new or alternative C compiler implementations in an attempt to further reduce the time required to bootstrap earlier stages of glaucus (stages that are temporary and do not require optimizations)
- Important notes to consider is that this "alternative" compiler should be able to compile (and/or cross compile) modern versions of `gcc` as it is what glaucus uses to optimize later stages of the bootstrap
- A basic test was attempted at the time of writing this article (attempt to compile a modern version of the GNU `grep` implementation) and compilers were sorted into categories accordingly
- Currently only clang and gcc are capable of building modern versions of gcc, so it appears the better approach would be to either leverage clang's cross compilation capabilities or keep the current gcc cross compilation toolchain but utilize `-O0` or `-O1` to speed up build times early on; an important consideration to be made is that the time saved from early stages of the bootstrap process (stages 1 and 2) should exceed the time wasted by an unoptimized stage 2 gcc that will attempt to compile the rest of the bootstrap stages with optimizations (quality of the final stages will not be affected, but compilation time will be)

## Compilers that can build `grep`
- clang
- gcc
- cproc (QBE):
  - https://git.sr.ht/~mcf/cproc
  - https://man.sr.ht/~mcf/cproc/doc/software.md
  - https://github.com/oasislinux/oasis/issues/13
  - capable of building gcc-4.7 and binutils
- kefir: https://git.sr.ht/~jprotopopov/kefir
- slimcc: https://github.com/fuhsnn/slimcc
- tcc:
  - https://github.com/TinyCC/tinycc
  - https://repo.or.cz/w/tinycc.git

## Compilers that can't build `grep`
### Active
- cake: https://github.com/thradams/cake
- cuik: https://github.com/RealNeGate/Cuik
- cparser (libfirm): https://pp.ipd.kit.edu/firm/index.html
- neatcc: https://github.com/aligrudi/neatcc
- scc (QBE): https://git.simple-cc.org/scc/
- ucc:
  - https://github.com/bobrippling/ucc-c-compiler
  - https://github.com/bobrippling/ucc-c-compiler/tree/feature/asm
- xcc: https://github.com/tyfkda/xcc
- zig: uses clang and musl under the hood, has its own compiler-rt port from LLVM

### Inactive (ordered by personal preference)
- pcc-revived:
  - https://github.com/arnoldrobbins/pcc-revived
  - https://briancallahan.net/blog/20230723.html
- chibicc:
  - https://github.com/rui314/chibicc
  - https://briancallahan.net/blog/20220629.html
  - https://sr.ht/~ach/minias/
- ucc162.3:
  - https://github.com/sheisc/ucc162.3
  - part of a book "The Dissection of C Compiler"
- qcc:
  - https://c9x.me/qcc/
  - written in ocaml
- lcc:
  - https://github.com/drh/lcc
  - part of a book "A Retargetable C Compiler: Design and Implementation"
- wgtcc: https://github.com/wgtdkp/wgtcc
- cc3: https://github.com/kukrimate/cc3

## Preprocessors
- fcpp: https://github.com/bagder/fcpp
- gpp: https://logological.org/gpp
- mcpp: https://mcpp.sourceforge.net/
- simplecpp: https://github.com/danmar/simplecpp
- tinycpp: https://github.com/rofl0r/tinycpp
- ucpp: https://github.com/lpsantil/ucpp
