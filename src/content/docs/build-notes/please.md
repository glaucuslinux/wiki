---
title: please
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Prepare
- Depends on `musl` for `shadow.h` and `libcrypt`, also requires `/etc/shadow` be present

## Build
- Rely on `LDLIBS` to sneakily pass `LDFLAGS` as `LDLIBS="$LDFLAGS -lcrypt"`

## Package
- Owner and group of `/etc/please.conf` should be `0`, and permissions `400`
- Owner and group of `/usr/bin/please` should be `0`, and permissions `4755`

## Other
- `please` appears to be better than `escl` and `rdo` (env sanitization, better salt)
- `please` does not support `persist` like `sudo` (and `duncaen opendoas` if configured with `--with-timestamp`)
- `freebsd` provides `su` by default; `sudo` and `doas` are not installed
- `sudo` supports `pam`less builds and is quite configurable; `alpine` no longer provides `sudo` as of 3.16
- `thejessesmith doas` (aka `slicer69 doas`) uses `pam` for `linux`
- `asroot` depends on `libenv` and `libpassphrase`

## References
- https://codeberg.org/maandree/asroot
- https://codeberg.org/retucio/please
- https://codeberg.org/sw1tchbl4d3/rdo
- https://codeberg.org/thejessesmith/doas
- https://codeberg.org/tirimid/escl
- https://github.com/duncaen/opendoas
- https://github.com/illiliti/ssu
- https://github.com/illiliti/ssu/issues/13
