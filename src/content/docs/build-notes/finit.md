---
title: finit
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Other
- Check if `finit` handles `devtmpfs`, `/proc` and `/sys` automatically
- Check if `finit` handles `/dev/pts` automatically with the correct permissions
- Check if `finit` handles `/dev/shm` automatically with the correct permissions `1777`
- Check if long-run services are still stored in `finit.conf` and that oneshots are in `rc.local`
- Check if `finit` falls back to `/bin/sh` if no ttys are configured in `/etc/finit.conf`
- Check if `finit` handles `efivars` automatically and mounts it at `/sys/efi/firmware/efivars` (like `booster`)
- Check if the fallback shell is good enough to be used in an initramfs and in rescue environments
- By default all services, tasks, run commands and TTYs listed without a set of runlevels get a default set [234] assigned
- Check if we need `cgroup2` to be used as older versions rely on `tmpfs` on `/sys/fs/cgroup`

## Configure
- It is recommended to enable `auto-reload` (unlike `s6` which requires an explicit database compilation)
- `kernel-cmdline`, `fastboot` and `fsckfix` are disabled by default
- It is not recommended to enable `kernel-cmdline` and `fsckfix`
- Explicitly use `--enable-fastboot` to skip `fsck` (similar to `s6-linux-init` which ignores `-f` and `-F` for compatibility)
- Explicitly use `--disable-logrotate` as we no longer provide `utmp` and `wtmp` support
- Explicitly use `--disable-dbus-plugin` even with `--disable-dbus` as it is implicitly set to `auto`

## Other
- `finit` version `4` is not compatible with version `3`
- `finit` version `5` provides its own device manager `keventd`
- `finit` probes all installed device managers (so never have `mdevd` installed alongside `keventd`)
- Prefer higher baudrates `115200` to `38400` for faster data transfer
- Check if further logging (`/var/log/{dmesg,messages,syslog}`) is required
- Do not provide `/usr/bin/modules-load` and `/etc/sysctl.d` (`systemd` stuff)
- Do not forget to check for wrong permissions `1000:1000` on `iso`
- `/dev/fd` exists on other unices and is provided under `linux` for compatibility whereas `/proc/*/fd` is specific to `linux`
- `fsck` depends on `/sys`
- `sysctl()` the syscall is officially deprecated, but the binary `sysctl` is what is recommended nowadays and uses `/proc/sys`
- `.ICE-unix` and `.X11-unix` in `/tmp` belong to `xorg` and have been removed
- Pseudo-filesystems (like `cgroups` and `tmpfs`) may fail to unmount at the end of shutdown (this usually does not result in data loss)

## References
- https://blog.tjll.net/the-systemd-revolution-has-been-a-success/
- https://finit-project.github.io/
- https://gitea.artixlinux.org/konimex/finit
- https://github.com/Andrey0189/sinit-scripts
- https://github.com/InitWare/InitWare/wiki/Dropped-components
- https://github.com/chimera-linux/dinit-chimera
- https://github.com/eweOS/dinit-services
- https://github.com/finit-project/finit/blob/master/doc/build.md
- https://github.com/finit-project/finit/blob/master/doc/distro.md
- https://github.com/finit-project/finit/tree/master/contrib/alpine
- https://github.com/finix-community/finix
- https://github.com/fszontagh/gl-recipes/blob/master/finit.sh
- https://github.com/glaucuslinux/glaucus/releases/tag/30092020
- https://github.com/kernelkit/infix
- https://github.com/medvid/make-rootfs/blob/master/pkg/files/finit/finit.conf
- https://github.com/troglobit/myLinux
- https://github.com/xhebox/noname-linux/blob/master/archived/finit/finit.conf
- https://gitlab.alpinelinux.org/PureTryOut/dinit-alpine
- https://leahneukirchen.org/blog/archive/2025/08/comparing-nitro-to-runit.html
- https://oscomp.hu/without-systemd/Alternatives_to_systemd.html
- https://ser1.net/post/systemd-really,-really-sucks/
- https://ser1.net/post/the-problem-with-the-anti-systemd-attitude/
- https://troglobit.com/projects/finit/
- https://troubleshooters.com/linux/diy/plopinst.htm
- https://troubleshooters.com/linux/diy/suckless_init_on_plop.htm
- https://wiki.alpinelinux.org/wiki/User:Sertonix/Freedom_of_choice
