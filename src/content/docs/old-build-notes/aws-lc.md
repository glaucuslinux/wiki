---
title: aws-lc
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Check if `aws-lc` provides these  (similar to `libressl`):
  - `/etc/ssl/cert.pem` (original file or symlink)
  - `/etc/ssl/certs`
  - `/etc/ssl/certs/ca-certificates.crt` (original file or symlink)
- Consider `-DCMAKE_C_STANDARD=11` vs `-DCMAKE_C_STANDARD=99`

## References
- https://git.alpinelinux.org/aports/log/testing/aws-lc
- https://git.alpinelinux.org/aports/log/community/aws-lc
- https://git.alpinelinux.org/aports/tree/community/aws-lc/APKBUILD
