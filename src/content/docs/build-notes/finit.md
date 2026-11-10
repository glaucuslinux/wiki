---
title: finit
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Configure
- Check if explicitly setting `--with-heading` and `--with-hostname` hardcodes the values into `finit` preventing it from parsing `/etc/os-release` and `/etc/hostname` at run time or if it only affects the default values
- Check if we should enable the `resolvconf` plugin for `openresolv` to work correctly (see `finit/plugins/resolvconf.c`)
### Package
- Check if we should provide a `/usr/bin/init -> finit` symlink
- Check if we should provide a minimal `/etc/finit.conf` (also prefer higher baudrates `115200` to `38400` for faster data transfer?)
```
runlevel 2

tty [12345] agetty 38400 tty1 linux
```
### Other
- Check if long-run services are still stored in `finit.conf` and that oneshots are in `rc.local`
- Check if `finit` falls back to `/bin/sh` if no ttys are configured in `/etc/finit.conf`
- Check if `finit` handles `efivars` automatically and mounts it at `/sys/efi/firmware/efivars` (like `booster`)
- Check if the fallback shell is good enough to be used in an initramfs and in rescue environments
- By default all services, tasks, run commands and TTYs listed without a set of runlevels get a default set [234] assigned
- Check if we need `cgroup2` to be used as older versions rely on `tmpfs` on `/sys/fs/cgroup`

---

## Configure
- It is recommended to enable `auto-reload` (unlike `s6` which requires a database compilation with every change)
- `kernel-cmdline`, `fastboot` and `fsckfix` are disabled by default
- It is not recommended to enable `kernel-cmdline` (pre-4.1 behavior) and `fsckfix`
- Explicitly use `--enable-fastboot` to skip `fsck` (similar to `s6-linux-init` which ignores `-f` and `-F` for compatibility)
- Explicitly use `--disable-logrotate` as we no longer provide `utmp` and `wtmp` support
- Explicitly use `--disable-all-plugins` then enable only those that are needed
- `--disable-dbus-plugin` is implicitly set to `auto` even with `--disable-dbus`, whereas `--disable-all-plugins` ensures it is disabled
- Do not change default `fstab` as it is automatically set to `$sysconfdir/fstab` which correctly resolves to `/etc/fstab`
- Explicitly specify `--with-heading="$PRETTY_NAME"` as we already export it and the default `/etc/os-release` may not exist where and when `finit` may be built
- `keventd` is enabled by default
- `random-seed` is enabled by default and defaults to `/var/lib/misc/random-seed` and with `--enable-urandom-plugin` it becomes similar to our previous `s6` service `random-seed`
- `rtc` plugin is enabled by default and it fully replaces our previous `s6` service `hwclock` without relying on  the `hwclock` binary from `util-linux`
- Both `rtc-date` and `rtc-file` are disabled by default, even when `rtc` plugin is enabled, this means that `rtc-date` will use the default value of `2000-01-01 00:00` which is reasonable enough, and that no `rtc-file` will be used as we plan to only run `finit` on systems with a physical hardware clock `/dev/rtc` (perhaps for future use inside containers `--with-rtc-file` can be used and it will default to `/var/lib/misc/rtc` but why use `finit` at all then?)
- The `resolvconf` plugin does not replace `openresolv` as it lacks any resolving logic and is only responsible for creating directories like `/etc/resolvconf`

## Other
- `finit` version `4` is not compatible with version `3`
- `finit` version `5` provides its own device manager `keventd`
- `finit` probes all installed device managers (so never have `mdevd` installed alongside `keventd`)
- `finit` handles `/dev`, `/proc` and `/sys` automatically (see `finit/src/finit.c`)
- `finit` handles `/dev/pts` automatically with the correct options and permissions (see `finit/src/finit.c`)
- `finit` handles `/dev/shm` automatically with the correct permissions `1777` (see `finit/src/finit.c`)
- `mdevd` depends on `/dev/pts` and `/dev/shm`
- Check if further logging (`/var/log/{dmesg,messages,syslog}`) is required
- Do not provide unnecessary `systemd`-like functionality like `/etc/sysctl.d` and maybe `/etc/modules-load.d` (we may make an exception for the latter and enable the `modules-load` plugin for some compatibility if necessary)
- Do not forget to check for wrong permissions `1000:1000` on `iso`
- `/dev/fd` exists on other unices and is provided under `linux` for compatibility whereas `/proc/*/fd` is specific to `linux`
- `fsck` depends on `/sys`
- `sysctl()` the syscall is officially deprecated, but the binary `sysctl` is what is recommended nowadays and uses `/proc/sys`
- `.ICE-unix` and `.X11-unix` in `/tmp` belong to `xorg` and have been removed
- Pseudo-filesystems (like `cgroups` and `tmpfs`) may fail to unmount at the end of shutdown (this usually does not result in data loss)

## References
- https://finit-project.github.io/
- https://gitea.artixlinux.org/konimex/finit
- https://github.com/Andrey0189/sinit-scripts
- https://github.com/InitWare/InitWare/wiki/Dropped-components
- https://github.com/chimera-linux/dinit-chimera
- https://github.com/eweOS/dinit-services
- https://github.com/finit-project/finit/blob/master/doc/build.md
- https://github.com/finit-project/finit/blob/master/doc/config/runlevels.md
- https://github.com/finit-project/finit/blob/master/doc/distro.md
- https://github.com/finit-project/finit/blob/master/doc/plugins.md
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
- https://troglobit.com/projects/finit/
