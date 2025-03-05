---
title: acl
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Depends on `gettext-tiny`
- Does not require `-D_LARGEFILE64_SOURCE` when targeting musl `1.2.5` and up
- Test suite requires `bash`, `coreutils`, `perl` and a filesystem that supports ACLs
