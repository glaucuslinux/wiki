---
title: strip
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `--strip-unneeded` destroys static libraries; only use on binaries
- NEVER strip musl `crt.o`, `libstdc++`/`libc++` and `libgcc`/`compiler-rt`
- some packages use `$STRIP` for `-s` in `install -s`
