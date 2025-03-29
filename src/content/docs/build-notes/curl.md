---
title: curl
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `--with-gssapi`
- `--with-libssh2` (https://gitlab.alpinelinux.org/alpine/aports/-/issues/10222)
- `--with-nghttp2` vs `--with-nghttp3`
- `--with-openssl-quic`
- `--without-libpsl` vs `--with-libpsl`
- Prefer `--with-ca-embed`
- Do we need `curldebug`?
- symlink `/etc/ssl/certs/ca-certificates.crt` to `/etc/ssl/cert.pem`
- `make install -C scripts` does nothing
- Do we need `--with-random=/dev/urandom` even if we're not cross-compiling?
- `make test` check `nonflaky`
- `curl` depends on `cmake` for `brotli` and `c-ares` on Alpine
- `libidn2` and `c-ares` support are enabled on Alpine for better DNS performance
- Does `musl` support `libidn2`?
- Do we need `c-ares` because musl does not support DNS lookups?
- `c-ares` support is disabled on Arch: https://bugs.archlinux.org/task/49962
- Disable IDN; not many websites use internationalized domain names
- Does not support recursive downloads, metalinks and same file multiconnect for security reasons

## References
- https://curl.se/docs/comparison-table.html
- https://daniel.haxx.se/docs/curl-vs-wget.html
- https://github.com/curl/curl/pull/14059
- https://hacktivis.me/git/httpc/commit/eeecd47da1dd58e3ecb630f36fd360d78a6ed7ea.html
