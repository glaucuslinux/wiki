---
title: Texinfo
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Notes
- Do not provide it in cross as it fails to cross compile:
  `configure: error: cannot run test program while cross compiling`
- texi2html is meant to replace makeinfo from texinfo
- No need to provide `otool` and `po4a` (just warnings)

- musl-cross-make:
```c
make INFO_DEPS= infodir= ac_cv_prog_lex_root=lex.yy MAKEINFO=true
```

- oasis:
```c
TEX=false
TEXI2DVI=false
MAKEINFO=false
```

- kiss:
```sh
#!/bin/sh

echo '==makeinfo== (GNU texinfo) 5.2'
```

## TODO
- https://git.alpinelinux.org/aports/tree/main/texinfo/fix-build-without-NLS.patch
