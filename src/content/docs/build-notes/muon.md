---
title: muon
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Does it depend on `libedit` with `bestline`?
- Set `default_library` to `shared` to prevent static libraries from being built (`wayland` and `libxkbcommon`)
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
