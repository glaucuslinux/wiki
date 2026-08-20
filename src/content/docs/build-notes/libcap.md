---
title: libcap
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Depends on `linux-headers`
- `RAISE_SETFCAP` is set to `no` by default (`yes` is not recommended)
- `progs/mkcapshdoc.sh` depends on `bash`
- `INDENT` is set to empty if not found
- Does not support parallel build; complains about missing `cap_names.h` when it exists (a race condition probably..)
- `kernel_headers` should point to `uapi` instead of `$cross/usr/include`?
- Do we need to set `GOPKGDIR` if `GOLANG=no` is already set?
- Are `pam_cap.so`, `libcap.so` and `libpsx.so` runnable as standalone binaries (`chmod +x`)?
