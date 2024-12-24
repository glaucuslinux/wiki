---
title: toybox
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `toybox`'s `cpio` defaults to `newc`
- Do we need to run `scripts/genconfig.sh` before `make`?
- `scripts/genconfig.sh` and tests depend on `bash`

## Additional binaries provided by `coreutils`
1. `b2sum`
2. `basenc`
3. `chcon`
4. `csplit`
5. `dir`
6. `dircolors` (provided by `ls`)
7. `join`
8. `numfmt`
9. `pathchk`
10. `pinky`
11. `pr`
12. `ptx`
13. `stdbuf`
14. `sum`
15. `tsort`
16. `unexpand`
17. `users` (provided by `shadow`)
18. `vdir`

## Resources
- https://landley.net/toybox/index.html
- https://landley.net/toybox/roadmap.html
- https://landley.net/toybox/status.html
