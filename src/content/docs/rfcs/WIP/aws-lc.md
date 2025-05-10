---
title: aws-lc
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Replaces `libressl`
- Replaced by `mbedtls` on `openwrt`
- OpenSSL compatibility layer is lacking; packages like `kmod` and `toybox` fail to build even with `--enable-opensslall` and `--enable-opensslextra` and with compatibility symlinks for both the libraries and pkg-config files

## References
- https://news.ycombinator.com/item?id=34696769
- https://news.ycombinator.com/item?id=41914064
- https://www.reddit.com/r/rust/comments/1de13y6/ring_vs_awslcrs/
