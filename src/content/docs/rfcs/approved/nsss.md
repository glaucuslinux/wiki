---
title: nsss
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `nsss` vs `musl-nscd`
- `nsss` is only useful for multiple nsswitch backends for hosts that deal with multiple LDAP backends which almost always use `glibc`
- `lh-bootstrap` uses `nsss`
- skarnet intentionally does not mention nsss as an optional dependency for `utmps`, this is their reason:
```
It's kinda intentional, because I wanted to keep the documentation as simple as possible - this is a simple and very low-level piece of software, but susceptible to be used by any person running musl - no need to confuse them with an option that would only ever be used by a distribution switching entirely to nsss.

People who build a distribution with nsss would know to enable the option on utmps.

It's not very important, but until nsss gets more widespread, I think the statu quo is better.
```

## Resources
- https://git.alpinelinux.org/aports/tree/main/musl-nscd/APKBUILD
- https://github.com/pikhq/musl-nscd
