---
title: busybox
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Patch `tools/kconfig/lxdialog/check-lxdialog.sh` with `int main()` to fix `make menuconfig`
- Pipe binary keymaps from `bkeymaps` to `loadkmap` to load them: `loadkmap < /usr/share/bkeymaps/...`
