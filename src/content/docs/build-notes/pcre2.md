---
title: pcre2
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Configure
- Check if 16 or 32 bit character support is needed by some applications that run on `wayland`
### Other
- May remove `pcre2` if `glib` is not needed

## Configure
- `--enable-newline-is-lf` is the lighter option and is enabled by default, though `anycrlf` covers a wider range of newline formats
- `--enable-pcre2-16` might be needed for some `qt` applications on `wayland`
- `--enable-utf` has been deprecated; `unicode` is enabled by default
- `jit` is available on all architectures as of `10.41`

## Other
- `pcre2` is only required for `glib`
