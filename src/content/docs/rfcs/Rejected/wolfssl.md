---
title: wolfssl
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Replaces `libressl`
- Replaced by `mbedtls` on `openwrt`
- OpenSSL compatibility layer is lacking; packages like `kmod` and `toybox` fail to build even with `--enable-opensslall` and `--enable-opensslextra` and with compatibility symlinks for both the libraries and pkg-config files

## References
- https://curl.se/docs/ssl-compared.html
- https://danyspin97.org/blog/replacing-openssl-part-1-wolfssl/
- https://en.wikipedia.org/wiki/Comparison_of_TLS_implementations
- https://git.alpinelinux.org/aports/tree/community/wolfssl/APKBUILD
- https://github.com/sabotage-linux/sabotage/blob/master/pkg/wolfssl
- https://github.com/void-linux/void-packages/issues/20935
- https://github.com/wolfSSL/osp
- https://github.com/wolfSSL/wolfssl
- https://github.com/wolfSSL/wolfssl/issues/1134
- https://gitlab.archlinux.org/archlinux/packaging/packages/wolfssl/-/blob/main/PKGBUILD
- https://www.wolfssl.com/cpu-accelerated-cryptography-on-openwrt-using-wolfssl/
- https://www.wolfssl.com/docs/wolfssl-openssl/
- https://www.wolfssl.com/documentation/manuals/wolfssl/chapter13.html
- https://www.wolfssl.com/forums/topic1537-how-can-i-replace-opensslnative-to-wolfssl.html
- https://www.wolfssl.com/forums/topic787-drop-in-replacement-for-openssl-to-use-with-qt-5x.html
- https://www.wolfssl.com/live-webinar-migrating-from-openssl-to-wolfssl-in-2024/
- https://www.wolfssl.com/migrating-openssl-wolfssl/
- https://www.wolfssl.com/openwrt-switches-wolfssl-default-ssl-library/
- https://www.wolfssl.com/wolfssl-expanding-openssl-compatibility-layer/
- https://www.wolfssl.com/wolfssl-supported-open-source-projects/
- https://www.youtube.com/watch?v=DmhR7vb3Wng
- https://www.youtube.com/watch?v=kEq0PnfLmSw
