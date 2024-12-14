---
title: attr
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Test suite must be run on a filesystem that supports extended attributes (e.g. ext2, ext3 or ext4) (LFS)
- If `attr.test` fails without a proper error message, Void has a patch (`sed -i 's|f: Operation n|f: N|g' test/attr.test`)
- Remove basename patch in future releases (should be upstreamed)
