---
title: fribidi
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Prefer the release `.xz` tarball over the `.gz` archive; the latter has a broken `autotools` build system, might switch to the latter if I consider using `muon`
- Arch fixes compilation with `gcc` 15 using:
````
echo "cc='gcc -fpermissive -std=gnu17'" > c2man/config.sh`
```
