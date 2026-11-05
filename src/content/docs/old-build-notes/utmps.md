---
title: utmps
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Configure
- `--enable-utmp` requires `--enable-libc-includes`
- We might need a `--with-include=/usr/include/utmps` in case of missing includes
- `-lutmps` automatically passes `-lskarnet` (in utmps.pc)

## Other
- Solves 32bit time_t problem; however, all applications need to be reviewed for 64bit time_t
- `w` will not work in future versions of `shadow` due to `login` not recording any utmp entries: https://github.com/shadow-maint/shadow/issues/945
- Either link or preload using `LD_PRELOAD=libutmps`
- utmp.h has been deprecated in 2001 in favor of utmpx.h
- On `glibc` systems the former `utmp.h` is just an alias (or a symlink) for the latter `utmpx.h`
- On `musl` systems `utmps` can be used to provide `utmpx` functionality - but not `utmp`
- `utmps` also uses a daemon as the only authority to manage the utmp and wtmp data, which is an extra service to consider
- we also need to remove the stub header wutmpx.hw (and even `utmp.h`) provided by `musl` and modify `_PATH_UTMP` under `include/paths.h`
- ubase's getty doesn't add an entry to utmp

## References
- https://davmac.wordpress.com/2019/05/04/bad-utmp-implementations-in-glibc-and-freebsd/
- https://en.wikipedia.org/wiki/Utmp
- https://github.com/dslm4515/Musl-LFS/issues/33
- https://github.com/thkukuk/lastlog2
- https://github.com/thkukuk/utmpx/blob/main/Y2038.md
- https://github.com/thkukuk/wtmpdb
- https://github.com/util-linux/util-linux/issues/2088
- https://gitlab.alpinelinux.org/alpine/aports/issues/3282
- https://gitlab.com/procps-ng/procps/-/merge_requests/67
- https://reddit.com/r/voidlinux/comments/g2wyon/musl_people_how_do_you_do_user_accounting_without/
- https://skarnet.org/software/utmps/utmps-utmpd.html
- https://thkukuk.de/blog/Y2038_glibc_lastlog_64bit/
- https://thkukuk.de/blog/Y2038_glibc_utmp_64bit/
- https://thkukuk.de/blog/Y2038_glibc_wtmp_64bit/
- https://unix.stackexchange.com/questions/567012/how-can-i-add-lastlog-support-to-alpine-linux
- https://wiki.musl-libc.org/faq.html
- https://wiki.musl-libc.org/roadmap.html
- https://www.tenable.com/audits/items/CIS_Ubuntu_12.04_LTS_Server_v1.0.0_L2.audit:aba64ea9780bd411ca0074d3730917d8
