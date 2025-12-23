---
title: opendoas
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `sudo` also supports PAM-less builds and is quite configurable; Alpine no longer provides `sudo` as of 3.16
- FreeBSD provides `su` by default; `sudo` and `doas` are not preinstalled
- Owner and group of `/etc/doas.conf` should be `0`, and permissions `400`
- There is no test suite
- There exists another port called `slicer69/doas` that requires PAM

## References
- https://codeberg.org/thejessesmith/doas
- https://codeberg.org/TotallyLeGIT/doasedit
- https://codeberg.org/wezen/pdoasedit
- https://github.com/koalagang/doasedit
