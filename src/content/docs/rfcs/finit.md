---
title: Finit
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Replaces `s6` and `s6-rc`
- `finit` version `4` is different and not compatible with `3.2`
- Long-run services are in `finit.conf`
- Oneshots are in `rc.local`
- `finit` probes all installed device managers so never have two installed
- Fallback shell shouldn't be used in production systems
- It is recommended to enable auto reload
- There are usually six levels that usually represent specific states of the system:
```
0 shutdown/halt
S/s/1 single-user, possibly all the same, possibly all mildly different, possibly only 1 exists
(s is n't a runlevel internally; it tells init "go to 1 but also do this specific thing")
used as a "everyone keep out while I fix low-level stuff" mode
2 multi-user mode, no networking (or same as 3)
3 graphical multi-user mode
4 not used (or same as 3)
5 multi-user mode graphical interface (or same as 3)
6 reboot
everything else is aliased to 3
```
- In systemd you may find:
```
runlevel0.target is a link to poweroff.target
runlevel1.target is a link to rescue.target
runlevel2.target is a link to multi-user.target
runlevel3.target is a link to multi-user.target
runlevel4.target is a link to multi-user.target
runlevel5.target is a link to graphical.target
runlevel6.target is a link to reboot.target
```
- Instructions for install on Alpine:
```
echo "/sbin/finit           - PID 1"
echo "/lib/finit/plugins/*  - All enabled Finit plugins"
echo "/etc/finit.conf       - Finit configuration file"
echo "/etc/finit.d/         - Finit services"
```
- `/bin/sh` is run if no ttys are configured in `/etc/finit.conf`
- By default all services, tasks, run commands and TTYs listed without a set of runlevels get a default set [234] assigned

# References
- https://finit-project.github.io/
- https://gitea.artixlinux.org/konimex/finit
- https://github.com/finit-project/finit/tree/master/contrib/alpine
- https://github.com/fszontagh/gl-recipes/blob/master/finit.sh
- https://github.com/glaucuslinux/glaucus/releases/tag/30092020
- https://github.com/kernelkit/infix
- https://github.com/medvid/make-rootfs/blob/master/pkg/files/finit/finit.conf
- https://github.com/troglobit/finit/blob/master/doc/bootstrap.md#bootstrap
- https://github.com/xhebox/noname-linux/blob/master/archived/finit/finit.conf
- https://troglobit.com/projects/finit/
