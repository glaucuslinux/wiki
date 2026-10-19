---
title: wayland
description: An opinionated Linux® distribution based on musl libc and toybox
---

## Prepare
- `wayland-scanner` depends on `expat`
- `dtd_validation` depends on `libxml2` as `expat` does not validate `xml` input
- It would've been nice if `wayland` only required one `xml` parser..

## Configure
- Disable `dtd_validation` as we are not developing `xml` protocols (this does not prevent `wayland.dtd` from being installed)

## Package
- `scanner=true` controls whether `$dir/usr/share/wayland/wayland.dtd` is installed or not
- `wayland-protocols`, `wlroots` and compositors like `sway` and `weston` depend on `wayland-scanner`
