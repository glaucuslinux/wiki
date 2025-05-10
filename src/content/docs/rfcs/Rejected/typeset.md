---
title: typeset
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- `typeset -f` gets all function names in a shell script; useful for split packages but is not supported by `dash`
- `declare -F` is a bashism
- Rely on `contents-minimal` instead
