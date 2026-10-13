---
title: gnu
description: An opinionated Linux® distribution based on musl libc and toybox
---

- The following `gnu` software are used to bootstrap glaucus:
  - `autoconf`
  - `automake`
  - `bash`
  - `bison`: not yet used but under consideration
  - `fribidi`: a build-time dependency for `pango`
  - `gdbm`: a dependency for `python`; does `--with-dbmliborder=gdbm:ndbm` imply order only?
  - `gperf`: a build-time dependency for `basu`, `fontconfig` and `m4`
  - `less`
  - `m4`
  - `make`
  - `mtools`: a build-time dependency for `limine`

- The following `nongnu` packages use files from `gnu`:
  - `gettext-tiny` uses `config.rpath`
  - `slibtool` uses several files
  - `u-config` uses `pkg.m4`
