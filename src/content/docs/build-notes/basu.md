---
title: basu
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Package
- Consider purging the headers under `$dir/usr/include/basu` if nothing uses them

## Prepare
- Depends on `gperf` and `python`

## Configure
- `-Dlibcap=disabled` prevents checking linux capabilities over `dbus` for services like `systemd` and maybe `wpa_supplicant` (which we both do not use)
- `nobody` user should have uid `65534`

## Other
- `basu` provides a minimal bus from `systemd` to silence software that require it
- Chimera uses `tangle` instead of `basu`

## References
- https://github.com/chimera-linux/tangle
