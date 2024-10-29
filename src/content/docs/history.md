---
title: History
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- glaucus started as a personal research project in early 2018.
- glaucus was previously known as "snail".

## snail
- snail was an Automated Linux From Scratch distribution with alternatives (PCC, TCC, ELF Tool Chain, elfutils, musl, sbase, ubase, sinit, svc and dash).
- snail had a read-only file system.
- snail was only bootable under QEMU.
- snail lacked a proper service manager.
- snail had a subpar unix user space.
- snail was not able to bootstrap.
- snail was not able to self-host.

## Design Changes
- Cross-compiling vs native chroot
- "/usr" merge, without "sbin"
- Switch to libarchive as the default archive and compression library.
- Switch to LibreSSL as the default TLS library.
- Switch to NetBSD's Editline Library and curses.
- Switch to toybox as the default unix user space.
- Switch to s6 as the default init system.
- Switch to s6-rc as the default service manager.
- Switch to yash as the default unix shell.

## First Release
- First release was in August 31st, 2019.
