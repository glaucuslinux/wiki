---
title: ccache
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Prepare
- `man` pages might require `ruby` for generation

## Other
- minimizes false positives as much as possible by default
- sloppiness may help at the expense of correct compilation (false positives)
- it's hard to guarantee that source files are free of the macros `file_macro,locale,time_macros`
- `ccache max_files = 0` is the default?
- caches the compilation of a single file (multi-file compilation and linking will fallback)
- some compiler flags are not supported (will fallback)
- mozilla recommends using `ccache`
- disable configure flags that fetch stuff from the internet during build
- cross uses host's `ccache`
- native uses cross's `ccache`
- `cachecc1` is similar to ccache but only for gcc and it speeds up compilation considerably
