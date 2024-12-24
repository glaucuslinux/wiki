---
title: curl
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `--with-gssapi`
- `--with-libssh2` (https://gitlab.alpinelinux.org/alpine/aports/-/issues/10222)
- `--with-nghttp2` vs `--with-nghttp3`
- `--with-openssl-quic`
- `--without-libpsl` vs `--with-libpsl`
- symlink `/etc/ssl/certs/ca-certificates.crt` to `/etc/ssl/cert.pem`
- `make install -C scripts` does nothing
- Do we need `--with-random=/dev/urandom` even if we're not cross-compiling?
- `make test` check `nonflaky`
- `curl` depends on `cmake` for `brotli` and `c-ares` on Alpine
- `libidn2` and `c-ares` support are enabled on Alpine for better DNS performance
- Does `musl` support `libidn2`?
- `c-ares` support is disabled on Arch: https://bugs.archlinux.org/task/49962
