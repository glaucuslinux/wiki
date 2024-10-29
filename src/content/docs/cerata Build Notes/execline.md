---
title: execline
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `--enable-multicall` reduces disk usage, and barely increases resource usage (skarnet uses it for lh-bootstrap and in alpine): https://skarnet.org/software/execline/execline.html
- Adelie is disabling `multicall`: https://git.adelielinux.org/adelie/packages/-/commit/b915ccf477dbb0bc2ec2fe6876d44722a55f4d4a
- There is no test suite
