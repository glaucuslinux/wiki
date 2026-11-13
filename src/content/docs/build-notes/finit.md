---
title: finit
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Configure
- Check if explicitly setting `--with-heading` and `--with-hostname` hardcodes the values into `finit` preventing it from parsing `/etc/os-release` and `/etc/hostname` at run time or if it only affects the default values
- Check if we should enable the `resolvconf` plugin for `openresolv` to work correctly (see `plugins/resolvconf.c`)
- Check if we should enable the `netlink` plugin
### Package
- Check if we should provide a minimal `/etc/finit.conf`
### Other
- Check if `finit` falls back to `/bin/sh` if no ttys are configured in `/etc/finit.conf`
- Check if the fallback shell is good enough to be used in an initramfs and in rescue environments
- Check if we can fully replace `mdevd`'s functionality:
  * in the `initramfs` as a `coldplug` with `mdevd -C`:
    - a summary of what `mdevd-coldplug` and `udevadm trigger` do:
    ```sh
    for i in $(find /sys -name uevent); do ( echo change > $i ) ; done
    ```
    - a summary of what `finit`'s `modprobe` plugin does (which we currently disable with `--disable-all-plugins`) without `keventd` or any device manager:
    ```sh
    find /sys/devices -name modalias -print0 | xargs -0 sort -u -z | xargs -0 modprobe -abq
    ```
    - a `coldplug` script can also be found under `/usr/lib/finit/coldplug` which is meant to run with `mdev -df` (and maybe `keventd`?):
    ```sh
    find /sys/devices -name uevent -print | while IFS='' read X; do echo add > $X; done
    ```
    - `finit`'s `/usr/lib/finit/keventd` can be run with `keventd -c` which also does coldplug at startup (see `keventd/uevent.c`)
  * in the services after `initramfs` hands control to `finit` replacing the previous `coldplug` and `mdevd` services
    - the `coldplug` service can be replaced with `keventd -c` (or the `modprobe` plugin?) (is a second `coldplug` really needed here? I think it is a good idea to keep it since we can't guarantee whether the `initramfs` implementation preserves `/dev` after a `switch_root` (even with a `mount -M` before switching) or if an `initramfs` exists in the first place)
    - the `mdevd` service can be replaced with `keventd` as it defaults to `netlink` group `4` (for compatibility with `libudev`'s `0x4`) replacing `mdevd -O 4` (also do not supply readiness `-D 3` to `mdevd` as it only works with `s6`)
    - `finit` starts `keventd` as an internal service and controls it via symlinks in `/run/finit/cond/` (see `doc/keventd.md`)
    - `keventd` can be run independently with `coldplug` to populate `/dev` from scratch using `keventd -c -n` (see `doc/keventd.md`)

---

## Prepare
- Optional dependency on `libcap` that is enabled by default as it allows services to run with minimal required privileges instead of `root` (see `doc/config/capabilities.md` and `src/service.c`)
- `keventd` depends on `util-linux`'s `libblkid.so.1` and it is enabled by default

## Configure
- It is recommended to enable `auto-reload` (unlike `s6` which requires a database compilation with every change)
- `kernel-cmdline`, `fastboot` and `fsckfix` are disabled by default
- It is not recommended to enable `kernel-cmdline` (pre-4.1 behavior) and `fsckfix`
- Explicitly use `--enable-fastboot` to skip `fsck` (similar to `s6-linux-init` which ignores `-f` and `-F` for compatibility)
- Explicitly use `--disable-pam` as `pam` support is enabled by default
- `finit` supports `cgroup` version `2` only and it is enabled by default at build-time and at run time it autodetects if the kernel supports `cgroup` by checking `/sys/fs/cgroup` or if an initramfs has already mounted `cgroup2` there replacing the previous `s6` service `cgroups`
- Explicitly use `--disable-logrotate` as we no longer provide `utmp` and `wtmp` support
- Explicitly use `--disable-all-plugins` then enable only those that are needed
- `dbus` plugin is implicitly set to `auto` even with `--disable-dbus`, whereas `--disable-all-plugins` ensures it is disabled
- `tty` plugin is enabled by default and `--disable-all-plugins` ensures it is disabled as we have no use for new `tty` nodes watcher
- Do not change default `fstab` as it is automatically set to `$sysconfdir/fstab` which correctly resolves to `/etc/fstab`
- Explicitly specify `--with-heading="$PRETTY_NAME"` as we already export it and the default `/etc/os-release` may not exist where and when `finit` may be built
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
- The default path for "bundled" plugins is `/usr/lib/finit/plugins` and the default path for "external" plugins is `/usr/lib/finit/plugins:/usr/local/lib/finit/plugins` so we explicitly set `--with-plugin-path=/usr/lib/finit/plugins` to remove `/usr/local` from the "external" plugin path
- Explicitly pass `--without-sulogin` to disable the built-in `sulogin` as we already pass `--disable-rescue` and we have no use of `sulogin` (even from `util-linux` and `toybox`) as it is generally a better idea to use another live medium to rescue a broken one
- `--without-rc-local` disables `/etc/rc.local` support as `/etc/rc.local` blocks `finit` and `initctl` at boot after runlevel `S` (or at least used to) and is mainly provided for compatibility with existing `sysv` init systems
- Do not enable the `hotplug` plugin as it starts `keventd` in passive mode `-p` leaving device management to `udevd`, `mdevd` or `mdev` from `system/10-hotplug.conf` and `keventd` only monitors power supply events (see `doc/keventd.md`)
- A curated ruleset from `eudev` version `3.2.14` is installed by default when `keventd` is enabled and `--without-udev-rules` skips the installation (see `doc/keventd.md`)
- `keventd` has a small built-in permission table that is functionally equivalent to `mdev.conf`
- Keep the `modprobe` plugin disabled by default as `keventd` also probes modules in addition to creating device nodes
- Do not use `--disable-redirect` as it dumps output to the active console breaking `login` prompts instead of `/dev/null` (the default)
- Upstream advises against using `--disable-kernel-logging` as it silences too much and runs too late to hide early boot messages and that `quiet` should be used instead in `cmdline`
- Both `plymouth` and `testserv` plugins are disabled by default (still we already pass `--disable-all-plugins` regardless)
- Keep the `hook-scripts` plugin disabled by default as it is used for early boot debugging and kernel tracing (see `doc/plugins.md`)

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
- Disable unnecessary `systemd`-like functionality like `/etc/sysctl.d` and maybe `/etc/modules-load.d` (we may enable the `modules-load` plugin if necessary)
- Do not forget to check for wrong permissions `1000:1000` on `iso`
- `/dev/fd` exists on other unices and is provided under `linux` for compatibility whereas `/proc/*/fd` is specific to `linux`
- `sysctl()` the syscall is officially deprecated, but the binary `sysctl` is what is recommended nowadays and uses `/proc/sys`
- `.ICE-unix` and `.X11-unix` in `/tmp` belong to `xorg` and have been removed
- Pseudo-filesystems (like `cgroups` and `tmpfs`) may fail to unmount at the end of shutdown (this usually does not result in data loss)
- Runlevel `1` is the single-user mode without networking
- Specifying `single` and `S` in the kernel cmdline starts `finit` with runlevel `1`
- `finit` does not handle `efivars` automatically unlike `booster` which mounts it at `/sys/firmware/efi/efivars`, though an `fstab` entry (or a `task`) can be added so that `finit` can mount it:
```
efivarfs /sys/firmware/efi/efivars efivarfs defaults 0 0
```
- We keep an explicit `modprobe loop` in the `initramfs` of glaucus live iso as a safety measure given that the `loop` device is virtual and its `uevent` entry may not produce a `modalias`

## References
- https://finit-project.github.io/
- https://gitea.artixlinux.org/konimex/finit
- https://github.com/Andrey0189/sinit-scripts
- https://github.com/InitWare/InitWare/wiki/Dropped-components
- https://github.com/chimera-linux/dinit-chimera
- https://github.com/eweOS/dinit-services
- https://github.com/finit-project/finit/blob/master/doc/ChangeLog.md
- https://github.com/finit-project/finit/blob/master/doc/build.md
- https://github.com/finit-project/finit/blob/master/doc/cmdline.md
- https://github.com/finit-project/finit/blob/master/doc/config/capabilities.md
- https://github.com/finit-project/finit/blob/master/doc/config/files.md
- https://github.com/finit-project/finit/blob/master/doc/config/logging.md
- https://github.com/finit-project/finit/blob/master/doc/config/pam.md
- https://github.com/finit-project/finit/blob/master/doc/config/runlevels.md
- https://github.com/finit-project/finit/blob/master/doc/config/sysv.md
- https://github.com/finit-project/finit/blob/master/doc/config/tty.md
- https://github.com/finit-project/finit/blob/master/doc/dbus.md
- https://github.com/finit-project/finit/blob/master/doc/distro.md
- https://github.com/finit-project/finit/blob/master/doc/features.md
- https://github.com/finit-project/finit/blob/master/doc/plugins.md
- https://github.com/finit-project/finit/blob/master/doc/runlevels.md
- https://github.com/finit-project/finit/blob/master/doc/runparts.md
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
