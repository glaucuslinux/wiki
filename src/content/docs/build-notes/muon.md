---
title: muon
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Does it depend on `libedit` with `bestline`?
- muon defaults to `static` for `default_library` unlike `meson` which defaults to `shared`
- Depends on `meson` or itself to cross compile itself on a glibc host
- Does not support `cross-file`
- A circular dependency between muon and itself?
- muon replaces meson, but resulting binaries are not stripped?
- Alpine uses the following for `abuild-muon`:
```
exec muon meson setup \
  -Dauto_features=disabled \
  -Db_staticpic=true \
  -Dpython.bytecompile=0 \
  -Dwerror=false \
```
- `muon` provides their own fork of `samurai` that is enabled by default; therefore, there is no need to maintain a separate version or use `CFLAGS=-DBOOTSTRAP_NO_SAMU`
- `muon` defaults to `$prefix/com` for `sharedstatedir`, while `meson` defaults to `/var/lib` if `prefix=/usr`

## References
- https://codeberg.org/sewn/repo/src/branch/muon
- https://docs.muon.build/intro.html
- https://gitlab.alpinelinux.org/alpine/aports/-/issues/16133
- https://git.sr.ht/~lattis/muon/tree/master/item/src/meson_opts.c
- https://git.sr.ht/~lattis/muon/tree/master/item/src/script/options/global.meson
