---
title: ugrep
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Depends on `gcc`
- Breaks when cross compiling unless `--without-pcre2` and `--without-zlib` are used
- `egrep` and `fgrep` are symlinks
- `ugrep+` replaces `rga` (`ripgrep-all`)

## Resources
- https://github.com/Genivia/ugrep?tab=readme-ov-file#using-ugrep-to-replace-gnubsd-grep
