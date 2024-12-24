---
title: shadow
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `faillog` failed login attempts for existing users
- `btmp` lists every failed login attempt
- Create a `~/.hushlogin` file to disable `No mail.` message from `login` (`lib/mail.c`)
- Disable `audit` support because it goes inline with utmp as it grants the ability to monitor users and failed logins and such
- Disable `logind` because `shadow` switched to `systemd` to provide utmp-like functionality
- Disable `su` because the user should use `sudo` or `doas` to escalate privileges and not `su` directly; also recommended by the Arch wiki Security page
- Prefer `shadow` binaries over `toybox` or `util-linux` similar to Alpine and Arch and unlike LFS
- `id` and `groups` from shadow are deprecated as of 4.17.0
- Enable `fcaps` for better security in `native`
- Enable `yescrypt` for better password hashing scalability
- The default value for `--with-group-name-max-length` is `32`
- When linking against `nsss` shadow tries to link against `xget*` functions that are used with PAM, even though `--without-pam` is being used and `login_nopam` is being built
- Enable shadowed passwords by running `pwconv`
- Enable shadowed group passwords by running `grpconv`
- `sulogin` is being built, but not installed

## Resources
- https://github.com/shadow-maint/shadow/issues/999
