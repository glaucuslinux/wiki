---
title: finit
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Configure
- Check if explicitly setting `--with-heading` and `--with-hostname` hardcodes the values into `finit` preventing it from parsing `/etc/os-release` and `/etc/hostname` at run time or if it only affects the default values
- Check if we should enable the `resolvconf` plugin for `openresolv` to work correctly (see `plugins/resolvconf.c`)
### Package
- Check if we should provide a minimal `/etc/finit.conf`
### Other
- Check if long-run services are still stored in `finit.conf` and that oneshots are in `rc.local`
- Check if `finit` falls back to `/bin/sh` if no ttys are configured in `/etc/finit.conf`
- Check if `finit` handles `efivars` automatically and mounts it at `/sys/efi/firmware/efivars` (like `booster`)
- Check if the fallback shell is good enough to be used in an initramfs and in rescue environments

---

## Configure
- It is recommended to enable `auto-reload` (unlike `s6` which requires a database compilation with every change)
- `kernel-cmdline`, `fastboot` and `fsckfix` are disabled by default
- It is not recommended to enable `kernel-cmdline` (pre-4.1 behavior) and `fsckfix`
- Explicitly use `--enable-fastboot` to skip `fsck` (similar to `s6-linux-init` which ignores `-f` and `-F` for compatibility)
- `finit` supports `cgroup` version `2` only and it is enabled by default at build-time and at run time it autodetects if the kernel supports `cgroup` by checking `/sys/fs/cgroup` or if an initramfs has already mounted `cgroup2` there replacing the previous `s6` service `cgroups`
- Explicitly use `--disable-logrotate` as we no longer provide `utmp` and `wtmp` support
- Explicitly use `--disable-all-plugins` then enable only those that are needed
- `dbus` plugin is implicitly set to `auto` even with `--disable-dbus`, whereas `--disable-all-plugins` ensures it is disabled
- `tty` plugin is enabled by default and `--disable-all-plugins` ensures it is disabled as we have no use for new `tty` nodes watcher
- Do not change default `fstab` as it is automatically set to `$sysconfdir/fstab` which correctly resolves to `/etc/fstab`
- Explicitly specify `--with-heading="$PRETTY_NAME"` as we already export it and the default `/etc/os-release` may not exist where and when `finit` may be built
- `keventd` is enabled by default
- `random-seed` is enabled by default and defaults to `/var/lib/misc/random-seed` and with `--enable-urandom-plugin` replacing the previous `s6` service `random-seed`
- `rtc` plugin is enabled by default and it fully replaces the previous `s6` service `hwclock` without relying on  the `hwclock` binary from `util-linux`
- `libsystemd` is a shim for `sd_notify()` only and is disabled by default (pipewire and some wayland compositors may require it)
- Both `rtc-date` and `rtc-file` are disabled by default, even when `rtc` plugin is enabled, this means that `rtc-date` will use the default value of `2000-01-01 00:00` which is reasonable enough, and that no `rtc-file` will be used as we plan to only run `finit` on systems with a physical hardware clock `/dev/rtc` (perhaps for future use inside containers `--with-rtc-file` can be used and it will default to `/var/lib/misc/rtc` but then why use `finit` at all inside a container?)
- The `resolvconf` plugin does not replace `openresolv` as it lacks any resolving logic and is only responsible for creating directories like `/etc/resolvconf`
- Do not change the default runlevel `2` as `finit` treats runlevels `[234]` identically as multi-user mode and reserves `1` for single-user mode without networking
- Disable the built-in `watchdog` daemon as it is enabled by default on `/dev/watchdog` and glaucus does not use it
- `finit` also supports integration with `watchdogd` (an external `watchdog` daemon also from `troglobit`)
- Leave `group` set to its default value `root` as it controls ownership of `/run/finit/socket` which `initctl` uses and `/run/finit/bus` which `dbus` uses though we disable `dbus` (another logical value is `wheel`)
- Leave `sysconfig` set to its default values `/etc/default` and `/etc/conf.d` as both of them are expected (see `doc/example.md` and `src/sample.conf`)

## Other
- `finit` version `4` is not compatible with version `3`
- `finit` version `5` provides its own device manager `keventd`
- `finit` probes all installed device managers (so never have `mdevd` installed alongside `keventd`)
- `finit` handles `/dev`, `/proc` and `/sys` automatically (see `src/finit.c`)
- `finit` handles `/dev/pts` automatically with the correct options and permissions (see `src/finit.c`) replacing the previous `s6` service `devpts`
- `finit` handles `/dev/shm` automatically with the correct permissions `1777` and additionally mounts a `tmpfs` over `/dev/shm` which is something we may not need (for software like `dbus` to work which glaucus does not use) (see `src/finit.c`)
- `finit` handles `/proc/self/fd`, `/dev/fd`, `/dev/stdin`, `/dev/stdout` and `/dev/stderr` automatically with the correct symlinks (see `plugins/bootmisc.c` which runs after all filesystems have been mounted)
- `finit` creates `init` and `telinit` in `/usr/bin` automatically as correct symlinks to `finit` replacing the previous `s6` scripts under `/usr/bin` (see `INIT_LNKS` in `src/Makefile.in`)
- `finit` creates `halt`, `poweroff`, `reboot`, `shutdown` and `suspend` automatically as correct symlinks to `initctl` replacing the previous `s6` scripts under `/usr/bin` (see `REBOOT_LNKS` in `src/Makefile.in`)
- `mdevd` depends on `/dev/pts` and `/dev/shm` and `/proc/self/fd`
- `finit` handles `/run/lock` automatically with the correct permissions `1777` and additionally mounts a small `tmpfs` to protect against user DoS of `/run` (see `src/finit.c`)
- `finit` handles `/tmp` automatically with the correct permissions (see `src/finit.c`)
- `finit` handles both `swapon` at boot and `swapoff` at shutdown replacing the previous `s6` service `swap` (see `src/finit.c`, `src/mount.c` and `src/sig.c`)
- `finit` adopts almost identical signals to `s6` including `SIGINT`, `SIGPWR`, `SIGTERM`, `SIGUSR1`, `SIGUSR2` and `SIGWINCH` with the exception of `SIGQUIT` (only `s6`) and `SIGHUP` (only `finit`, `s6` does not provide it under `.s6-svscan/`) (see `src/sig.c`)
- `finit` provides a lightweight built-in `tmpfiles.d` support allowing relatively easier modifications of directories and permissions removing the need for patching (an `finit` task can also be created to do the same job)
- `finit` provides a built-in `getty` (see `src/getty.c`) and it is used when `tty tty2 { device = "/dev/tty2" }` whereas `tty tty2 { command = "agetty -8 -L tty2 115200" }` runs an external `getty`
- `finit` does not default to `38400` baud rate and instead defaults to the kernel default baud rate also prefer higher baudrates like `115200` for faster data transfer (use `baud = 115200` in config)
- The `tty` plugin handles dynamic hotplug events for serial/usb `tty` devices like `/dev/ttyUSB0` and it does not manage static virtual consoles like `tty1` to `tty6` which are controlled by the kernel's `tty` subsystem and if a `getty` (whether built-in to `finit` or external) was waiting for input there then we see a login prompt, otherwise a blank screen is shown
- `finit` handles remounting `/` as read-write automatically replacing the previous `s6` service `rw` (see `src/finit.c`)
- `finit` handles `fstab` automatically replacing the previous `s6` service `fstab` (see `src/finit.c`)
- Check if further logging (`/var/log/{dmesg,messages,syslog}`) is required
- Do not provide unnecessary `systemd`-like functionality like `/etc/sysctl.d` and maybe `/etc/modules-load.d` (we may make an exception for the latter and enable the `modules-load` plugin for some compatibility if necessary)
- Do not forget to check for wrong permissions `1000:1000` on `iso`
- `/dev/fd` exists on other unices and is provided under `linux` for compatibility whereas `/proc/*/fd` is specific to `linux`
- `sysctl()` the syscall is officially deprecated, but the binary `sysctl` is what is recommended nowadays and uses `/proc/sys`
- `.ICE-unix` and `.X11-unix` in `/tmp` belong to `xorg` and have been removed
- Pseudo-filesystems (like `cgroups` and `tmpfs`) may fail to unmount at the end of shutdown (this usually does not result in data loss)
- Runlevel `1` is the single-user mode without networking
- Specifying `single` and `S` in the kernel cmdline starts `finit` with runlevel `1`

## References
- https://finit-project.github.io/
- https://gitea.artixlinux.org/konimex/finit
- https://github.com/Andrey0189/sinit-scripts
- https://github.com/InitWare/InitWare/wiki/Dropped-components
- https://github.com/chimera-linux/dinit-chimera
- https://github.com/eweOS/dinit-services
- https://github.com/finit-project/finit/blob/master/doc/build.md
- https://github.com/finit-project/finit/blob/master/doc/cmdline.md
- https://github.com/finit-project/finit/blob/master/doc/config/runlevels.md
- https://github.com/finit-project/finit/blob/master/doc/config/tty.md
- https://github.com/finit-project/finit/blob/master/doc/dbus.md
- https://github.com/finit-project/finit/blob/master/doc/distro.md
- https://github.com/finit-project/finit/blob/master/doc/features.md
- https://github.com/finit-project/finit/blob/master/doc/plugins.md
- https://github.com/finit-project/finit/blob/master/doc/runlevels.md
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
