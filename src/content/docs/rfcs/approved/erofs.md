---
title: EROFS
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Supports `zstd` and multithreading
- Provides a comparable compression ratio with better performance and less memory overhead compared to squashfs
- Supports DEFLATE (Zlib) for better compression (check with `zlib-ng`?)
- `booster` does not support live environments, proposal: https://github.com/anatol/booster/issues/232#issuecomment-1737913983
- `mount` handles both `erofs` and `squashfs` files automatically and does not require manual usage of `losetup`

## Resources
- https://ipads.se.sjtu.edu.cn/_media/publications/gaoatc19.pdf
- https://lore.kernel.org/lkml/ZrViqMFpC6uVEoXK@debian/
