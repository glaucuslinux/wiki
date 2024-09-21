---
title: shadow
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `faillog` lists users that exist and tried to login but failed, while `btmp` lists every failed login attempt
- To remove `No mail.` from shadow's `login` (`lib/mail.c`) (This can be removed by creating a `.hushlogin` file in `~`).
- disable `audit` support because it goes inline with utmp as it grants the ability to monitor users and failed logins and such
- disable `logind` because shadow switched to systemd to provide utmp-like functionality
- disable `su` because the user should use `sudo` or `doas` to escalate privileges and not `su` directly (this is also recommended by the Arch wiki Security page)
- Use everything user and group related provided by shadow (e.g. `groups`) instead of relying on toybox or util-linux to provide it (LFS disable `groups` from shadow while alpine and arch have it enabled)
- `id` and `groups` from shadow are deprecated as of 4.17.0
- enable `fcaps` for better security (only in `native`)
- enable `yescrypt` for better password hashing scalability
- No need to set `--with-group-name-max-length` as the default value is now `32`
