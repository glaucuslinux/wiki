---
title: opendoas
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Configure
- `--without-pam` automatically sets `--with-shadow` as the auth method
- `--with-timestamp` uses timestamp files like `sudo` which allows `persist` to work on `linux`

## Package
- Owner and group of `/etc/doas.conf` should be `0`, and permissions `400`

## Other
- `thejessesmith doas` (aka `slicer69 doas`) uses `pam` for `linux`

## References
- https://codeberg.org/thejessesmith/doas
- https://codeberg.org/TotallyLeGIT/doasedit
- https://codeberg.org/wezen/pdoasedit
- https://github.com/duncaen/opendoas
- https://github.com/koalagang/doasedit
