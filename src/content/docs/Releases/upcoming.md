---
title: Upcoming Release
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- The ISO now runs on real hardware!
- `faillog`, `last`, `lastb`, `lastlog` and `w` are now all running securely under `musl` libc thanks to `utmps`!
- This release is at stage 3 (native compilation after cross compilation)! Previous releases were at stage 2 (cross compilation only).
- `DT_RELR` support was enabled, and has resulted in further size reduction!
- `rad` (glaucus package manager) has been improved with more functionality being fleshed out.

- To silence `login` messages, simply run `touch ~/.hushlogin`
