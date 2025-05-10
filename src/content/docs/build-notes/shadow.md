---
title: shadow
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- Explicitly specify `--bindir`
- `faillog` failed login attempts for existing users
- `btmp` lists every failed login attempt
- Create a `~/.hushlogin` file to disable `No mail.` message from `login` (`lib/mail.c`)
- Disable `audit` support because it goes inline with utmp as it grants the ability to monitor users and failed logins and such
- Disable `logind` because `shadow` switched to `systemd` to provide utmp-like functionality
- Disable `su` because the user should use `sudo` or `doas` to escalate privileges and not `su` directly; also recommended by the Arch wiki Security page
- shadow advises against using their `su` and recommends using `util-linux`'s `su` instead (which requires PAM)
- Prefer `shadow` binaries over `toybox` or `util-linux` similar to Alpine and Arch and unlike LFS
- `id` and `groups` from shadow are deprecated as of 4.17.0
- Enable `fcaps` for better security in `native` (requires `root`)
- Enable `yescrypt` for better password hashing scalability
- The default value for `--with-group-name-max-length` is `32`
- When linking against `nsss` shadow tries to link against `xget*` functions that are used with PAM, even though `--without-pam` is being used and `login_nopam` is being built
- Enable shadowed passwords by running `pwconv` post install
- Enable shadowed group passwords by running `grpconv` post install
- `sulogin` is being built, but not installed
- Builds `login_nopam` correctly, but attempts to link xget pam when using `nsss` patch
- Check `/etc/login.defs` for mail stuff and others
- `src/useradd.c` can be patched to change default values; users can still use `/etc/default/useradd` to modify these values
- `INACTIVE` is set to `-1` by default
- `EXPIRE` is empty by default
- `/etc/default/useradd` permissions `600`
- The following utilities can be configured to be built without PAM:
```sh
- chfn
- chpasswd
- chsh
- getsubids
- groupmems
- login
- newusers
- passwd
```

## Common Binaries
Comparison of different implementations of the same tools by shadow and util-linux:

- Prefer `shadow`'s `chfn`: util-linux version requires PAM
- Prefer `shadow`'s `chsh`: util-linux version requires PAM
- Prefer `shadow`'s `login`: util-linux version requires PAM
- Prefer `shadow`'s `newgrp`: no flag to disable it from `shadow`, also `util-linux` version needs to be explicitly enabled
- Prefer `shadow`'s `nologin`: no flag to disable it from `shadow`
- sg (is just a symlink to newgrp)
- vigr (is just a symlink to vipw)
- Prefer `shadow`'s `vipw`: no flag to disable it from `shadow`, also `util-linux` version needs to be explicitly enabled
- Prefer `util-linux`'s `sulogin`: `shadow`'s `sulogin` lacks options and is not installed by default
- Prefer `toybox`'s `su`: both `shadow` and `util-linux` versions require `pam`
- `shadow` uses file capabilities over suid; consider that for `seatd`?

## References
- https://bugs.archlinux.org/task/31414
- https://github.com/shadow-maint/shadow/issues/1082
- https://github.com/shadow-maint/shadow/issues/999
- https://github.com/shadow-maint/shadow/pull/1174
- https://linuxfromscratch.org/blfs/view/svn/postlfs/shadow.html
