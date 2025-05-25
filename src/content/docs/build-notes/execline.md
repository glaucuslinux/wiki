---
title: execline
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `--enable-multicall` reduces disk usage, and barely increases resource usage (skarnet uses it on lh-bootstrap and Alpine): https://skarnet.org/software/execline/execline.html
- `multicall` is disabled on Adelie: https://git.adelielinux.org/adelie/packages/-/commit/b915ccf477dbb0bc2ec2fe6876d44722a55f4d4a
- There is no test suite
