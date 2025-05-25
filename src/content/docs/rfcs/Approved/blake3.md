---
title: BLAKE3
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Fastest cryptographic hash function
- Fastest non-cryptographic hash functions are meowhash, t1ha, wyhash and xxhash
- `rad` uses `BLAKE3` given that Nim supports it via `nimcrypto`
- Check `argon2id` for `shadow`

## Limitations
- The C version of `b3sum` does not support multithreading:
  - https://github.com/BLAKE3-team/BLAKE3/issues/184
  - https://github.com/BLAKE3-team/BLAKE3/issues/229

## Others
- CMake: https://github.com/BLAKE3-team/BLAKE3/blob/master/c/CMakeLists.txt
- Make: https://github.com/michaelforney/b3sum/blob/master/Makefile
