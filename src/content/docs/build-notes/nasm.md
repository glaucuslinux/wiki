---
title: nasm
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Requires `-j1` on Sabotage as Makefile is buggy; uses `libnasm.a` while it's being written to
- Test suite requires `perl`
- The `strip` target needs to be called before `install`; ensure the reverse won't happen in parallel `-jX`
