---
title: SquashFS
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- Consider `mksquashfs` block size improvements from fedora
- Examine these options for `mksquashfs` (in order):
```sh
-no-sparse -no-fragments -no-duplicates -quiet -no-progress -noappend -no-recovery
```
- `squashfs-tools` compresses manpages by default before installing them, so check that as well

## References
- https://fedoraproject.org/wiki/Changes/OptimizeSquashFS
- https://github.com/AgentD/squashfs-tools-ng
- https://github.com/plougher/squashfs-tools
