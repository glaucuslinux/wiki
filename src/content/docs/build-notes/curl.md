---
title: curl
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `--with-gssapi`
- `--with-libssh2` (https://gitlab.alpinelinux.org/alpine/aports/-/issues/10222)
- `--with-nghttp2` vs `--with-nghttp3`
- `--with-openssl-quic`; HTTP/3 uses QUIC
- `--without-libpsl` vs `--with-libpsl`; BLFS recommends, Daniel says many don't use it
- Prefer `--with-ca-embed`
- Do we need `curldebug`?
- symlink `/etc/ssl/certs/ca-certificates.crt` to `/etc/ssl/cert.pem`
- `make install -C scripts` does nothing
- Do we need `--with-random=/dev/urandom` if we're not cross-compiling?
- `make test` check `nonflaky`
- `curl` depends on `cmake` for `brotli` and `c-ares` on Alpine
- `libidn2` and `c-ares` support are enabled on Alpine for better DNS performance
- Does `musl` support `libidn2`?
- Do we need `c-ares` because musl does not support DNS lookups?
- `c-ares` support is disabled on Arch: https://bugs.archlinux.org/task/49962
- Disable IDN; not many websites use internationalized domain names
- Does not support recursive downloads, metalinks and same file multiconnect for security reasons
- Check if we need to copy `scripts/cd2nroff` to `/usr/bin` (or maybe `ac_cv_path_NROFF=/usr/bin/mandoc`)
- Do we need `ac_cv_path_PERL=true`?
- Support for NSS was removed as of `8.3.0`

## References
- http://bugs.alpinelinux.org/issues/16980
- https://curl.se/changes.html
- https://curl.se/docs/comparison-table.html
- https://curl.se/docs/install.html
- https://daniel.haxx.se/blog/2024/01/10/psl-in-curl/
- https://daniel.haxx.se/docs/curl-vs-wget.html
- https://everything.curl.dev/build/deps.html
- https://git.alpinelinux.org/aports/commit/main/curl?id=5c35191091b85b1d10b96de568e5824d02a670e3
- https://github.com/curl/curl/pull/14059
- https://hacktivis.me/git/httpc/commit/eeecd47da1dd58e3ecb630f36fd360d78a6ed7ea.html
