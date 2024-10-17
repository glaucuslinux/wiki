---
title: Upcoming Release
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- glaucus now runs on real hardware!
- This is a stage 3 release (native compilation after cross compilation)! Previous releases were only at stage 2 (cross compilation only).
- [`limine`](https://limine-bootloader.org/) is now the default boot loader and manager!
- [`reflex`](https://invisible-island.net/reflex/) is now the default lex implementation!
- `faillog`, `last`, `lastb`, `lastlog` and `w` are now all running securely under `musl` libc thanks to `utmps`!
- `DT_RELR` support was enabled, and has resulted in further size reduction!
- `rad` (glaucus package manager) has been improved with more functionality being fleshed out.

- To silence `login` messages, simply run `touch ~/.hushlogin`
