---
title: ccache
description: An opinionated Linux® distribution based on musl libc and toybox
---

- No cpp symlink on Alpine because host system does not provide it
- man pages might require ruby for generation on Arch
- Disable configure flags that fetch stuff from the internet during build
- cross uses host's `ccache`
- native uses cross's `ccache`
- `cachecc1` is similar to ccache but only for gcc and it speeds up compilation considerably
