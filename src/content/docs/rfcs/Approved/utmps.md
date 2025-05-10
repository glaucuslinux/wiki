---
title: utmps
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- Solves 32bit time_t problem; however, all applications need to be reviewed for 64bit time_t
- `w` will not work in future versions of `shadow` due to `login` not recording any utmp entries: https://github.com/shadow-maint/shadow/issues/945

- Either link or preload using `LD_PRELOAD=libutmps`
- We can rely on musl's `utmp.h` (after patching) and only remove its `utmpx.h`
- `lh-bootstrap` also has instructions on how to improve linking to utmps and skarnet (try it for toybox)

skarnet: "All in all, I believe the flexibility it offers overweighs the inconvenience of having to run services before providing utmp/wtmp."

utmps is a solution to systems using s6, and won't work for systemd, and it implements utmpx safely using a daemon

- https://www.thkukuk.de/blog/Y2038_glibc_utmp_64bit/
- https://www.thkukuk.de/blog/Y2038_glibc_wtmp_64bit/
- https://www.thkukuk.de/blog/Y2038_glibc_lastlog_64bit/
- https://github.com/thkukuk/lastlog2
- https://github.com/thkukuk/wtmpdb
- https://github.com/thkukuk/utmpx/blob/main/Y2038.md
- https://www.reddit.com/r/voidlinux/comments/g2wyon/musl_people_how_do_you_do_user_accounting_without/
- https://unix.stackexchange.com/questions/567012/how-can-i-add-lastlog-support-to-alpine-linux
- https://github.com/util-linux/util-linux/issues/2088
- https://wiki.musl-libc.org/roadmap.html
- https://en.wikipedia.org/wiki/Utmp

* utmp.h has been deprecated in 2001 in favor of utmpx.h
* On Glibc systems the former utmp.h is just an alias (or a symlink) for the latter utmpx.h
* On musl libc, utmps can be used to provide utmpx functionality - but not utmp (This means that applications like procps-ng either don't work properly (w shows nothing under musl with default no-op implementation), or fails to build (utmps provides utmpx.h but no utmp.h)
* utmps also uses a daemon as the only authority to manage the utmp and wtmp data, which is an extra service to consider
* we also need to remove the stub header utmpx.h (and maybe even utmp.h) provided by musl if you plan on using skarnet's utmps
* we also need to patch multiple software to support utmpx.h instead of utmp.h since utmps only provides the latter. Here's a list of packages using utmp h (that might require patching) that I compiled based on my experiments in [glaucus](https://glaucuslinux.org/):

  - autoconf
  - gcc (in libsanitizer)
  - musl
  - procps-ng (for w and whattime)
  - shadow
  - toybox (some pending tools)
  - util-linux (for agetty)

From the [musl wiki FAQ](https://wiki.musl-libc.org/faq.html):

> Q: Why is the utmp/wtmp functionality only implemented as stubs?
> * if the feature is implemented, you need to take additional measures to protect your user’s privacy
> * in order to use the utmp/wtmp feature, you need a suid/sgid binary to modify the database, which opens the door for security issues:
> * if you compromise those binaries, you can inject arbitrary data into the db, that other programs might interpret in exploitable ways
> * that’s a HUGE risk to pay for the sake of a basically-useless and possibly-harmful “feature”

The only distribution (other than glaucus) that has a working utmps with s6, musl and other packages is [Adélie Linux](https://code.foxkit.us/adelie/packages/-/tree/master)

For further reading:
* https://gitlab.com/procps-ng/procps/-/merge_requests/67
* https://code.foxkit.us/adelie/packages/blob/master/system/procps/use-utmpx.patch
* https://irclogs.alpinelinux.org/%23alpine-linux-2019-03.log

 https://github.com/dslm4515/Musl-LFS/issues/33

- w, getty, tmux, libutempter, shadow, util-linux, procps-ng all use utmp/utmpx (For utmps)

## DEPRECATE UTMP, UTMPX, UTMPS, WTMP, BTMP AND LASTLOG
- https://github.com/glaucuslinux/cerata/commit/2173b4c9944027ba69dc5b31b22b6955307c112a
- https://www.tenable.com/audits/items/CIS_Ubuntu_12.04_LTS_Server_v1.0.0_L2.audit:aba64ea9780bd411ca0074d3730917d8
- https://github.com/util-linux/util-linux/issues/2088
- https://github.com/thkukuk/utmpx/blob/main/Y2038.md

When these are removed, distros are using systemd journal and logind to replace them:
https://gitlab.archlinux.org/archlinux/packaging/packages/procps-ng/-/commit/749fd577af6fe8ca6218822039078a0c75e3d459
