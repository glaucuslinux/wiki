---
title: nsss
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Compare it with `musl-nscd`:
  - https://git.alpinelinux.org/aports/tree/main/musl-nscd/APKBUILD
  - https://github.com/pikhq/musl-nscd
  
- `nsss` is optional and only useful when dealing with multiple nsswitch backends, which might be the case for installations that have to deal with multiple LDAP backends for example, and in that case they almost always use `glibc`.

- `lh-bootstrap` uses `nsss`

- skarnet intentionally doesn't mention nsss as an optional dependency for utmps, this is their reason:
```
It's kinda intentional, because I wanted to keep the documentation as simple as possible - this is a simple and very low-level piece of software, but susceptible to be used by any person running musl - no need to confuse them with an option that would only ever be used by a distribution switching entirely to nsss.

People who build a distribution with nsss would know to enable the option on utmps.

It's not very important, but until nsss gets more widespread, I think the statu quo is better.
```
