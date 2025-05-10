---
title: History
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- glaucus started as a personal research project known as "snail" in February, 2018
- "snail" was succeeded by glaucus in September, 2018 and has been under development ever since

## snail
- An Automated Linux From Scratch distribution with alternatives (PCC, TCC, ELF Tool Chain, elfutils, musl, sbase, ubase, sinit, svc and dash)
- Had a read-only file system
- Only bootable under QEMU
- Lacked a proper service manager
- Lacked networking support
- Subpar unix user space
- Not able to bootstrap
- Not able to self-host

## Design Changes
- Cross-compiling vs native chroot
- "/usr" merge
- Switch to libarchive as the default archive and compression library
- Switch to LibreSSL as the default TLS library; then to AWS-LC
- Switch to NetBSD's Editline Library and curses
- Switch to toybox as the default unix user space
- Switch to s6 as the default init system
- Switch to s6-rc as the default service manager
- Switch to yash as the default unix shell

## First Release
- First release was in August 31st, 2019
