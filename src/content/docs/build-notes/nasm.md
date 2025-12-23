---
title: nasm
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Requires `-j1` on Sabotage as Makefile is buggy; uses `libnasm.a` while it's being written to
- Test suite requires `perl`
- The `strip` target needs to be called before `install`; ensure the reverse won't happen in parallel `-jX`
- Might require a patch for `musl` for 3.01 (now merged upstream)
- `--enable-lto` just appends `-flto` to *FLAGS; it might be better to let environment variables control it?

## References
- https://gitweb.gentoo.org/repo/gentoo.git/tree/dev-lang/nasm/files/nasm-3.01-musl.patch
