---
title: apk
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Configure
- `-Dhelp=enabled` requires `lua`

## Other
- `apk` does not handle fifos correctly
- `APKBUILD` files are not POSIX compliant
- Generate valid Alpine `.tar.X` packages from glaucus build files and avoid generating binary `.apk` packages
- Prefer Alpine's `abuild` to Arch's `makepkg` as the latter stores hidden files in tarballs (e.g. `.BUILDINFO`, `.MTREE` and `.PKGINFO`)

## References
- https://blog.orhun.dev/alpine-packaging-setup/
- https://blog.packagecloud.io/packagecloud-a-well-suited-package-manager-for-alpine-linux/
- https://git.alpinelinux.org/aports/tree/main/abuild
- https://git.alpinelinux.org/aports/tree/main/apk-tools
- https://github.com/chimera-linux/cports/blob/master/main/apk-tools
- https://github.com/chimera-linux/cports/blob/master/Usage.md
- https://lists.alpinelinux.org/~alpine/apk-tools/%3CD194B900-6A60-4A2C-B520-513D8F1263D6%40msys.ch%3E
- https://man.archlinux.org/man/abuild.1
- https://man.archlinux.org/man/apk.8.en
- https://wiki.alpinelinux.org/wiki/Abuild_and_Helpers
- https://wiki.alpinelinux.org/wiki/Alpine_Package_Keeper
- https://wiki.alpinelinux.org/wiki/APKBUILD_Reference
- https://wiki.alpinelinux.org/wiki/Apk_spec
- https://wiki.alpinelinux.org/wiki/Comparison_with_other_distros
- https://wiki.alpinelinux.org/wiki/Creating_an_Alpine_package
- https://wiki.alpinelinux.org/wiki/Include:AbuildRootBld
- https://wiki.archlinux.org/title/Abuild
