---
title: issue
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `/etc/issue` working escape code with `finit`:
```
\l: tty line                (displays tty1)
\m: arch identifier         (displays x86_64)
\n: node name               (displays glaucus)
\o: domain name             (displays "(none)")
\r: release number          (displays kernel version number e.g. "6.18.3")
\s: system name             (displays Linux)
\v: version OS - build date (displays build date in uname)
```
- The following escape codes do not work:
```
\b: baudrate
\d: date
\t: time
\u: number of logged users
\U: similar to \u
```
- Allow picking different ASCII artwork for glaucus from the repo upon install
- `/usr/lib/issue` can be used as a backup location for `/etc/issue`

## References
- https://cyberciti.biz/faq/howto-change-login-message/
