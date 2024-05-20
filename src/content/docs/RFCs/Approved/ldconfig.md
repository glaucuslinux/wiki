---
title: ldconfig
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Notes
- `musl` has its own search mechanism, which removes the need for an `ldconfig`
- `ldconfig` should be implemented as a stub (e.g. `true`)
- `ldconfig` can't be symlinked to `true` because `true` is a symlink to `toybox` on glaucus

Current 4 implementations of ldconfig are:
- smaeul (most complete) (uses scanelf, requires PAX):
  - https://github.com/smaeul/musl-utils
  - https://git.adelielinux.org/adelie/packages/-/merge_requests/57/diffs?commit_id=c631e4fc5ab64a9ad668ed5f753348ce8eae5219
- alpine (uses scanelf, requires PAX): https://github.com/libertine-linux-packages/musl_ldconfig
- libertine (almost identical to alpine, with stylistic changes) (uses scanelf, requires PAX): https://github.com/libertine-linux-packages/musl_ldconfig
- gentoo (doesn't use scanelf from PAX, but has BASHisms): https://gitweb.gentoo.org/repo/gentoo.git/tree/sys-libs/musl/files/
- Debian `ld-musl-config` is for appending paths to `/etc/ld-musl-x86_64.path` and not an `ldconfig` replacement
- Noname uses a shebang only `#!/bin/sh` inside `ldconfig`
- `scanelf` is part of `pax-utils` on Arch

Apparently smaeul's ldconfig was added to Adelie because alpine's ldconfig was limited and depended on scanelf, and smaeul's ldconfig still doesn't check for scanelf, but maybe they'll check in the future...
https://git.adelielinux.org/adelie/packages/-/merge_requests/57/commits

## Packages that complain
(it's basically libtool that complains when ldconfig is missing)
- gmp
- isl
- libffi
- mpc
- mpfr

## Resources
- https://github.com/dslm4515/Musl-LFS/discussions/85
- https://wiki.gentoo.org/wiki/Hardened/PaX_Utilities
