---
title: SquashFS
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Consider `mksquashfs` block size improvements from fedora
- Examine these options for `mksquashfs` (in order):
```sh
-no-sparse -no-fragments -no-duplicates -quiet -no-progress -noappend -no-recovery
```
- `squashfs-tools` compresses manpages by default before installing them, so check that as well
- Most distributions use SquashFS for their live CDs
- UnionFS and AUFS are not under active development in the kernel (might still be under development outside the kernel)
- OverlayFS got merged instead into the kernel (and is faster than both UnionFS and AUFS)
- Docker originally used AUFS and then switched to OverlayFS

## References
- https://fedoraproject.org/wiki/Changes/OptimizeSquashFS
- https://github.com/AgentD/squashfs-tools-ng
- https://github.com/plougher/squashfs-tools
