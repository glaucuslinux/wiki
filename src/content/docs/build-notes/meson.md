---
title: meson
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- When using `buildtype=release` in `glaucus-meson`, `debug` is automatically set to `false`
- Set `default_library` to `shared` to prevent static libraries from being built (`wayland` and `libxkbcommon`)
- `abuild-meson` uses custom cross files on Alpine
- `gettext-tiny` patch on Adelie: https://git.adelielinux.org/adelie/packages/-/blob/current/user/meson/meson-0.62.1-gettext-tiny.patch
- Does it depend on `setup-tools` from `python`?
- When the prefix is `/usr`: `sysconfdir` defaults to `/etc`, `localstatedir` defaults to `/var`, and `sharedstatedir` defaults to `/var/lib`

## References
- https://mesonbuild.com/Builtin-options.html
- https://mesonbuild.com/Commands.html
- https://mesonbuild.com/Cross-compilation.html
