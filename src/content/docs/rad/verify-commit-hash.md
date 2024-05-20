---
title: Verify Commit Hash
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

(Rejected)

- Check for commit number (analogous to checking for checksum for binaries)

- This is not needed as git won't create a directory if it weren't cloned properly which means its contents are not corrupted?
- This is also not needed as having the same commit hash does not mean the contents are not corrupted which makes this check redundant
