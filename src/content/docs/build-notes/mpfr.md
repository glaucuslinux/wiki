---
title: mpfr
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Depends on `slibtool`
- Maintainer mode should be explicitly disabled
- BID is the newer decimal float, and should be the default for `x86-64`; while DPD is older and is the default on `ppc`
- `--enable-lto` only works for static builds

## Resources
- https://www.ibm.com/support/pages/decimal64-and-decimal128-decimal-data-types-support-db2-esqlc-applications-using-gcc-compiler
