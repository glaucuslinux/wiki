---
title: lz4
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Prefer `muon` to `autotools` as it provides more `configure` options
- Depends on `python` even with `muon` as it runs `GetLz4LibraryVersion.py` (can be hardcoded but will not patch)
