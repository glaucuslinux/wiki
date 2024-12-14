---
title: curl
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `--with-gssapi`
- `--with-libssh2` (https://gitlab.alpinelinux.org/alpine/aports/-/issues/10222)
- `--with-nghttp2` vs `--with-nghttp3`
- `--with-openssl-quic`
- symlink `/etc/ssl/certs/ca-certificates.crt` to `/etc/ssl/cert.pem`
- `make install -C scripts` does nothing
- Do we need `--with-random=/dev/urandom` even if we're not cross-compiling?
- `make test` check `nonflaky`
- alpine has `cmake` as a dependency for `brotli` and `c-ares`
