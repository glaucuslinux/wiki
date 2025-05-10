---
title: glslang
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- `glslang`, `spirv-headers` and `spirv-tools` must have the same version to prevent ABI breakages
- Shouldn't the `glslangValidator` symlink be created automatically after install?
- Test suite depends on `bash`
- Do we need to pass `-DCMAKE_SYSTEM_NAME=Linux -DCMAKE_HOST_SYSTEM_NAME=Linux`?

## References
- https://gitlab.archlinux.org/archlinux/packaging/packages/glslang/-/blob/main/README.md
