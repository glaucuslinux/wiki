---
title: libinput
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Configure
- Check if we need `lua-plugins`
- Also check if the purged debug scripts are needed

## Configure
- `musl` provides `epoll` so do not set `-Depoll-dir`
- `-Dzshcompletiondir=no` disables the completion dir
- We might need to purge `udev-dir` when `mdevd` is being used (and maybe keep it for `keventd`)

## Package
- Purged debug scripts under `usr/lib/libinput` require `python`

## Other
- `libopeninput` does not work with `evdev` and `wayland` on `linux`

## References
- https://github.com/sizeofvoid/libopeninput
- https://wayland.freedesktop.org/libinput/doc/latest/lua-plugins.html
- https://who-t.blogspot.com/
