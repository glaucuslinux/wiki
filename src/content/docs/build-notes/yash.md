---
title: yash
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Depends on `asciidoc` and `a2x`?
- Patch to clear until last forward slash `/` and not entire argument?
- Patch to correctly color relative symbolic links as available even if not in the same directory
- Patch to prevent warning when overwriting files (cp, mv...)
- Can now be cross compiled rendering `dash` unnecessary for `cross`

## References
- https://github.com/magicant/yash/issues/48
- https://github.com/magicant/yash/pull/203
- https://yash.osdn.jp/doc/params.html
