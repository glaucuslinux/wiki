---
title: wak
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Package
- `make install` does not respect `DESTDIR` and instead installs to `--prefix=`
- No need to provide `gawk` or `mawk` compatibility symlinks

## Other
- Use the standalone version and not the one bundled with `toybox`
- Used to be very slow; 8-10 times slower than `mawk`
- Now it is slightly faster than `gawk` and a tad bit slower than `mawk` while being smaller

## References
- https://github.com/onetrueawk/awk
- https://github.com/raygard/wak
