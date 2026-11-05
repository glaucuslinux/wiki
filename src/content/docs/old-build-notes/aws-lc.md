---
title: aws-lc
description: An opinionated Linux® distribution based on musl libc and toybox
---

## TODO
### Package
- Check if `aws-lc` provides these  (similar to `libressl`):
  - `/etc/ssl/cert.pem` (original file or symlink)
  - `/etc/ssl/certs`
  - `/etc/ssl/certs/ca-certificates.crt` (original file or symlink)

## Configure
- Consider `-DCMAKE_C_STANDARD=11` vs `-DCMAKE_C_STANDARD=99`
- Might require building with `CMAKE_C_STANDARD=11`

## Other
- Replaces `libressl`

## References
- https://git.alpinelinux.org/aports/log/community/aws-lc
- https://git.alpinelinux.org/aports/log/testing/aws-lc
- https://git.alpinelinux.org/aports/tree/community/aws-lc/APKBUILD
- https://github.com/aws/aws-lc/blob/main/docs/porting/configuration-differences.md
- https://github.com/aws/aws-lc/blob/main/docs/porting/functionality-differences.md
- https://news.ycombinator.com/item?id=34696769
- https://news.ycombinator.com/item?id=41914064
- https://reddit.com/r/rust/comments/1de13y6/ring_vs_awslcrs/
