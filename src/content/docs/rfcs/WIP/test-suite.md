---
title: Test Suite
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Use Travis to run the checks
- Implement `check` in native
- `check` should not run in cross, toolchain, or native `bootstrap`
- All checks should run with `-j1`?
- Log the results of all tests, including broken/failing tests
