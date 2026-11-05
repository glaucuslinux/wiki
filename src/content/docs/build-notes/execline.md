---
title: execline
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `--enable-multicall` reduces disk usage, and barely increases resource usage (skarnet uses it on lh-bootstrap and Alpine): https://skarnet.org/software/execline/execline.html
- `multicall` is disabled on Adelie: https://git.adelielinux.org/adelie/packages/-/commit/b915ccf477dbb0bc2ec2fe6876d44722a55f4d4a
- check if we need to provide `--with-` flags in Dependencies section for native builds as well (not just for `build-cross`)

## Other
- execline does not expand `~`
- execlineb provides utilities (e.g. `importas` and `cd`) in `$PATH` and does not provide builtins
