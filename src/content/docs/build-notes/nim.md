---
title: nim
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Build `csources` first
- Build `koch` in Nim source
- Run `koch` to build Nim and Nim tools
- Prefer `/usr/share` to `/opt` for nimble pkgs in glaucus
- Bootstrap `csources_v3` using `make` instead of `build.sh` as the latter requires GNU `parallel` for parallel builds
- Use `koch install` instead of `./install.sh` as the latter may not always available
- Might require `libucontext` (with `-lucontext` added to `LDFLAGS`) on `musl` based systems (e.g. Alpine)
- `nim-gdb` might have bashisms (check Alpine)
- Consider `toolsNoExternal` for fully offline bootstraps with `koch`
- These work:
```sh
# koch
./koch install \
  ../../../toolchain/lib

# install.sh
sh install.sh \
  ../../../toolchain/lib

# install.sh
DESTDIR=../../../toolchain \
sh install.sh \
  /lib
```
- This does not work:
```sh
DESTDIR=../../../toolchain \
./koch install \
  /lib
```

## References
- https://build.opensuse.org/package/view_file/openSUSE:Factory/nim/nim.spec?expand=1
- https://git.alpinelinux.org/aports/tree/community/nim/APKBUILD
- https://git.alpinelinux.org/aports/tree/community/nimble/APKBUILD
- https://github.com/nim-lang/csources_v2
- https://github.com/nim-lang/csources_v3
- https://github.com/nim-lang/Nim
- https://github.com/void-linux/void-packages/blob/master/srcpkgs/choosenim/template
- https://github.com/void-linux/void-packages/blob/master/srcpkgs/nim/template
- https://gitlab.archlinux.org/archlinux/packaging/packages/nim/-/blob/main/PKGBUILD
- https://nim-lang.org/docs/packaging.html
