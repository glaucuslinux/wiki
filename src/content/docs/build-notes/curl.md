---
title: curl
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `curl` does not support recursive downloads, metalinks and same file multiconnect for security reasons

## Configure
- Prefer POSIX threads to `c-ares`
- `--disable-rt` as `musl` provides `clock_gettime` under `libc` itself
- `--without-default-ssl-backend` is only relevant when multiple `ssl` backends are enabled
- `--without-ldap` implicitly disables both `ldap` and `lber`
- Disable `idn` as not many websites use internationalized domain names

## Package
- Symlink `/etc/ssl/certs/ca-certificates.crt` to `/etc/ssl/cert.pem`
- `make install -C scripts` does nothing

## Other
- `msh3` was removed as of `8.16.0`
- `nss` was removed as of `8.3.0`
- `curl` dropped support for TLS libraries that do not support `TLSv1.3` (e.g. `bearssl`)
- `-J` does not make sense with `lastpathpart()`; archive changes from `v$ver` to `$nom-$ver`

## References
- https://bugs.alpinelinux.org/issues/16980
- https://curl.se/changes.html
- https://curl.se/docs/caextract.html
- https://curl.se/docs/comparison-table.html
- https://curl.se/docs/install.html
- https://curl.se/docs/sslcerts.html
- https://daniel.haxx.se/blog/2024/01/10/psl-in-curl/
- https://daniel.haxx.se/docs/curl-vs-wget.html
- https://everything.curl.dev/build/deps.html
- https://git.alpinelinux.org/aports/commit/main/curl?id=5c35191091b85b1d10b96de568e5824d02a670e3
- https://github.com/curl/curl/pull/12900
- https://github.com/curl/curl/pull/13544
- https://github.com/curl/curl/pull/14059
- https://hacktivis.me/git/httpc/commit/eeecd47da1dd58e3ecb630f36fd360d78a6ed7ea.html
