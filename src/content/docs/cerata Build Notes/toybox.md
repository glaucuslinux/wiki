---
title: toybox
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `toybox`'s `cpio` defaults to newc
- Do we need to run `scripts/genconfig.sh` before make?

- https://landley.net/toybox/roadmap.html
- https://landley.net/toybox/index.html
- https://landley.net/toybox/status.html

=== Binaries not available in toybox, and provided by coreutils:
1. b2sum
2. basenc
3. chcon
4. csplit (in nbase)
5. dir
6. dircolors (ls already has colors, so this is not needed)
7. join (in nbase)
8. numfmt
9. pathchk
10. pinky
11. pr (in nbase)
12. ptx
13. stdbuf
14. sum (in nbase)
15. tsort (in nbase)
16. unexpand (in nbase)
17. users (the other user* stuff are provided by shadow)
18. vdir
