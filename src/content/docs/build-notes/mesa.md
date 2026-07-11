---
title: mesa
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Depends on `mako`
- The `vulkan` driver for `nouveau` requires `rust`
- These `llvm` subprojects mention `mesa`:
  - `clang`
  - `libclc`
  - `lld`
  - `llvm`
  - `mlir`
- Does not build with `reflex`; requires `bison-bridge` and `extra-type` support which `flex` provides
- To build without `llvm`; this is not the case anymore as glaucus now provides llvm libraries and tools:
```
# amd
-Dplatforms=wayland \
-Dgallium-drivers=radeonsi \
-Dvulkan-drivers=amd \
-Dllvm=disabled \
-Dglx=disabled \
-Dglvnd=enabled \
-Dgallium-va=disabled

# qemu
 -Dplatforms=wayland \
-Dgallium-drivers=virgl \
-Dvulkan-drivers=virtio \
-Dllvm=disabled \
-Dglx=disabled \
-Dglvnd=enabled \
-Dgallium-va=disabled
```

## References
- https://docs.mesa3d.org/install.html
- https://docs.mesa3d.org/meson.html
- https://en.wikipedia.org/wiki/Mesa_(computer_graphics)
- https://gist.github.com/Venemo/a9483106565df3a83fc67a411191edbd
- https://github.com/rswinkle/PortableGL
- https://github.com/rswinkle/PortableGL?tab=readme-ov-file#similarrelated-projects
- https://github.com/ska80/tinygl
- https://github.com/tinycorelinux/tinyx
- https://wiki.archlinux.org/title/OpenGL
- https://www.mikeserv.com/support/viewtopic.php?t=168
