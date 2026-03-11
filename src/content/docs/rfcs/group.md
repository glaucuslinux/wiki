---
title: Groups
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `locate` group is needed for `plocate`
- `input` group has been deprecated and `plugdev` should be used (e.g. QEMU)
- `network` group has been deprecated and `netdev` should be used (e.g. QEMU)
- `uucp` group has been deprecated and `dialout` should be used
- `udevd` checks for the following missing groups: `kmem`, `input`, `lp`, `cdrom`, `tape`, `kvm` and `dialout`

## References
- https://docs.fedoraproject.org/en-US/packaging-guidelines/UsersAndGroups/
- https://linuxfromscratch.org/blfs/view/svn/postlfs/users.html
- https://linuxfromscratch.org/lfs/view/development/chapter07/createfiles.html
- https://wiki.archlinux.org/title/DeveloperWiki:UID_/_GID_Database
- https://wiki.debian.org/SystemGroups
