---
title: gnu
description: An opinionated Linux® distribution based on musl libc and toybox
---

- The following gnu software are used to bootstrap glaucus:
  - `autoconf`
  - `automake`
  - `bash`
  - `bison`; not yet used but under consideration
  - `config.rpath` to complement `gettext-tiny`
  - files to complement `slibtool`
  - `fribidi`: a build-time dependency for `pango`
  - `gdbm`: a dependency for `python`; does `--with-dbmliborder=gdbm:ndbm` imply order only?
  - `gperf`: a build-time dependency for `basu`, `fontconfig` and `m4`
  - `less`
  - `m4`
  - `make`
  - `mtools`: a build-time dependency for `limine`
  - `pkg.m4` to complement `u-config`
