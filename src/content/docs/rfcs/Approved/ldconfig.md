---
title: ldconfig
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- `musl` does not need an `ldconfig` as it uses its own search mechanism
- Do not symlink to `true` because `true` is a symlink to `toybox` on glaucus
- Implement `ldconfig` as a stub instead

## Implementations
- smaeul (most complete, uses scanelf, requires PAX):
  - https://github.com/smaeul/musl-utils
  - https://git.adelielinux.org/adelie/packages/-/merge_requests/57/diffs?commit_id=c631e4fc5ab64a9ad668ed5f753348ce8eae5219
- alpine (uses scanelf, requires PAX): https://github.com/libertine-linux-packages/musl_ldconfig
- libertine (identical to alpine, uses scanelf, requires PAX): https://github.com/libertine-linux-packages/musl_ldconfig
- gentoo (does not use scanelf from PAX, but has BASHisms): https://gitweb.gentoo.org/repo/gentoo.git/tree/sys-libs/musl/files/
- Debian `ld-musl-config` is for appending paths to `/etc/ld-musl-x86_64.path` and not an `ldconfig` replacement
- Noname uses a shebang only `#!/bin/sh` inside `ldconfig`
- `scanelf` is part of `pax-utils` on Arch
- smaeul's ldconfig was added to Adelie because alpine's ldconfig was limited and depended on scanelf, and smaeul's ldconfig still does not check for scanelf, but maybe they'll check in the future: https://git.adelielinux.org/adelie/packages/-/merge_requests/57/commits

## Packages that complain
- gmp
- isl
- libffi
- libtool
- mpc
- mpfr

## References
- https://github.com/dslm4515/Musl-LFS/discussions/85
- https://wiki.gentoo.org/wiki/Hardened/PaX_Utilities
