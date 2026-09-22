---
title: Groups
description: An opinionated Linux® distribution based on musl libc and toybox
---

- use `input` instead of `plugdev`
- use `network` instead of `netdev`
- use `dialout` instead of `uucp`
- do not add a `locate` group; glaucus no longer provides `plocate`
- `udevd` checks for the following missing groups: `kmem`, `input`, `lp`, `cdrom`, `tape`, `kvm` and `dialout`

## References
- https://docs.fedoraproject.org/en-US/packaging-guidelines/UsersAndGroups/
- https://linuxfromscratch.org/blfs/view/svn/postlfs/users.html
- https://linuxfromscratch.org/lfs/view/development/chapter07/createfiles.html
- https://wiki.archlinux.org/title/DeveloperWiki:UID_/_GID_Database
- https://wiki.archlinux.org/title/Users_and_groups
- https://wiki.debian.org/SystemGroups
