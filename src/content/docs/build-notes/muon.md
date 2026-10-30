---
title: muon
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Package
- Check `meson.cross` and ensure its contents are valid for `muon`

## Prepare
- Depends on itself or `meson` to cross compile on a `glibc` host
- `muon` from `muon-bootstrap` is binary identical to `muon` from `muon` from `muon-bootstrap` so prefer 2 stage bootstrap instead of 3
- Rename `build-bootstrap/muon-bootstrap` to `build-bootstrap/muon` to leverage `glaucus-muon` which calls `muon` not `muon-bootstrap`

## Configure
- Prefer `builtin` (default) to `bestline` (`linenoise` fork) as `readline` implementation to prevent an additional dependency
- `muon` enables their builtin `samurai` by default removing the need to maintain a separate version or use `CFLAGS=-DBOOTSTRAP_NO_SAMU`)

## Other
- `muon` defaults to `default_library=static` unlike `meson`
- `muon`, `meson` and `cmake` do not support `exec-prefix`
- `muon` now supports `--cross-file` using `muon setup -p cross:<file>`

- Alpine uses the following for `abuild-muon`:
```
exec muon meson setup \
  -Db_staticpic=true \
  -Dpython.bytecompile=0 \
  -Dwerror=false \
```
- `muon` defaults to `$prefix/com` for `sharedstatedir`, while `meson` defaults to `/var/lib` if `prefix=/usr`
- Check the following options:
```
prefer_static (default false on meson and muon)
default_both_libraries (default shared on meson and auto on muon)
default_library (default shared on meson and static on muon)
```
- Check if we should set `$SAMUFLAGS` for `muon samu`:
  - if `SAMUFLAGS=$MAKEFLAGS` then `$MAKEFLAGS` should only contain `-j X`
  - glaucus adds an additional `-O` so this won't work
  - still glaucus provides a `samu` wrapper which passes `-j X` to `muon samu` making this unnecessary?
- Run `muon -C build` before configure options instead of providing `build` as the last argument?
- `-Dcpp_std=c++17` vs `c++23` for `muon`?

## `meson`
- `b_ndebug=true` disables assertions
- `buildtype=release` sets `debug=false`
- `default_library=shared` prevents static libraries from being built (`wayland` and `libxkbcommon`)
- `default_both_libraries=shared` controls what is used internally for linking
- Explicitly set both `default_library` and `default_both_libraries` to `shared` as projects can override them otherwise (this is needed even when `meson` defaults to `default_library=shared`)
- `abuild-meson` uses custom cross files on Alpine
- When the prefix is `/usr`: `sysconfdir` defaults to `/etc`, `localstatedir` defaults to `/var`, and `sharedstatedir` defaults to `/var/lib`
- `meson` only understands `cpu_family` and not `cpu`

## References
- https://codeberg.org/kiss-community/repo/pulls/126
- https://codeberg.org/kiss-community/repo/pulls/148
- https://codeberg.org/kiss-community/repo/pulls/51
- https://codeberg.org/sewn/repo/src/branch/muon
- https://docs.muon.build/differences.html
- https://docs.muon.build/intro.html
- https://docs.muon.build/reference
- https://git.sr.ht/~lattis/muon/tree/master/item/src/meson_opts.c
- https://git.sr.ht/~lattis/muon/tree/master/item/src/script/options/global.meson
- https://github.com/mesonbuild/meson/issues/7037
- https://gitlab.alpinelinux.org/alpine/aports/-/issues/16133
- https://mesonbuild.com/Builtin-options.html
- https://mesonbuild.com/Commands.html
- https://mesonbuild.com/Cross-compilation.html
- https://mesonbuild.com/Reference-tables.html
- https://todo.sr.ht/~lattis/muon/107
