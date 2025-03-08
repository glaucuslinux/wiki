---
title: Groups
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `locate` group is needed for `plocate`
- `input` group has been deprecated and `plugdev` should be used (e.g. QEMU)
- `network` group has been deprecated and `netdev` should be used (e.g. QEMU)
- `uucp` group has been deprecated and `dialout` should be used

## Resources
- https://docs.fedoraproject.org/en-US/packaging-guidelines/UsersAndGroups/
- https://wiki.archlinux.org/title/DeveloperWiki:UID_/_GID_Database
- https://wiki.debian.org/SystemGroups
- https://www.linuxfromscratch.org/blfs/view/svn/postlfs/users.html
- https://www.linuxfromscratch.org/lfs/downloads/development/
