---
title: Texinfo
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- Does not cross compile: `configure: error: cannot run test program while cross compiling`
- `texi2html` is meant to replace `makeinfo` from `texinfo`
- No need to provide `otool` and `po4a` (just warnings)
- musl-cross-make:
```sh
make INFO_DEPS= infodir= ac_cv_prog_lex_root=lex.yy MAKEINFO=true
```
- kiss:
```sh
#!/bin/sh

echo '==makeinfo== (GNU texinfo) 5.2'
```

## References
- https://git.alpinelinux.org/aports/tree/main/texinfo/fix-build-without-NLS.patch
