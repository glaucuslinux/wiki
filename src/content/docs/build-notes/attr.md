---
title: attr
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Test suite requires a filesystem that supports extended attributes
- `attr.test` fails without a proper error message on Void (`sed -i 's|f: Operation n|f: N|g' test/attr.test`)
- `basename` patch should be upstreamed