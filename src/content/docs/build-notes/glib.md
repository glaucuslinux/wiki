---
title: glib
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Check if patches are needed for whatever reason
- Consider `-Dforce_posix_threads=true`
- Fails with no wrap due to `gvdb`
- We might need to provide `glib-introspection` as a separate package
- Does it link against `libatomic` on glaucus or is a patch required as on Arch

## References
- https://github.com/muon-build/muon/issues/105
- https://github.com/muon-build/muon/issues/98
- https://gitlab.gnome.org/GNOME/glib/-/issues/2677
- https://gitlab.gnome.org/GNOME/glib/-/merge_requests/2771
