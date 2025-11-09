---
title: glslang
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `glslang`, `spirv-headers` and `spirv-tools` must have the same version to prevent ABI breakages
- Shouldn't the `glslangValidator` symlink be created automatically after install?
- Test suite depends on `bash`
- Do we need to pass `-DCMAKE_SYSTEM_NAME=Linux -DCMAKE_HOST_SYSTEM_NAME=Linux`?
- Do we need a static version?
- `ENABLE_PCH=OFF` is a workaround for cmake on macos (see `CMakeLists.txt`)
- Consider `SPIRV_HEADERS_ENABLE_INSTALL=ON` in case it is not detected as `ON` (it should default to `ON` though)

## References
- https://archlinux.org/todo/glslang-1510-rebuild/
- https://gitlab.archlinux.org/archlinux/packaging/packages/glslang/-/blob/main/README.md
