---
title: mdevd
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Notes
- Ensure that mdevd is started with the flags `-O4`. This will make the daemon rebroadcast kernel uevents to libudev-zero. glaucus default service should run mdevd with these flags.
