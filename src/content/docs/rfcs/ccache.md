---
title: ccache
description: An opinionated Linux® distribution based on musl libc and toybox
---

- by default minimizes false positives as much as possible
- sloppiness may help at the expense of correct compilation (false positives)
- it's hard to guarantee that source files are free of the macros `file_macro,locale,time_macros`
- `ccache max_files = 0` is the default?
- Caches the compilation of a single file (multi-file compilation and linking will fallback)
- Some compiler flags are not supported (will fallback)
- Mozilla recommends using `ccache`
