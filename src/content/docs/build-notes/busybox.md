---
title: busybox
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- Patch `tools/kconfig/lxdialog/check-lxdialog.sh` with `int main()` to fix `make menuconfig`
- Pipe binary keymaps from `bkeymaps` to `loadkmap` to load them: `loadkmap < /usr/share/bkeymaps/...`
- Do we need to link with `-lutmps` as well?
- Can busybox `sh` (ash) replace `bash` in cross; `dash`, `loksh`, `mksh`, `oksh`, toybox `sh` (toysh) and `yash` all failed, so I doubt this will work

## Replaces
- `kbd`
- `procps-ng`: `hugetop`, `pidwait`, `slabtop`, `tload`
- `psmisc`: `fuser`, `pstree`
