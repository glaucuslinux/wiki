---
title: nsss
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
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
- Should `nsss` also be added as a runtime dependency?

## References
- https://git.alpinelinux.org/aports/tree/main/musl-nscd/APKBUILD
- https://github.com/pikhq/musl-nscd
- https://gitlab.alpinelinux.org/alpine/aports/-/issues/6711
- https://karkhaz.github.io/tuscan/musl/nss.html
- https://news.ycombinator.com/item?id=40703554
- https://patchwork.yoctoproject.org/project/oe-core/patch/20220823235624.2488133-6-andrei@gherzan.com/#4971
- https://wiki.musl-libc.org/future-ideas
- https://www.openwall.com/lists/musl/2024/03/06/4
- https://www.reddit.com/r/voidlinux/comments/xfkh8a/mdns_on_musl/
