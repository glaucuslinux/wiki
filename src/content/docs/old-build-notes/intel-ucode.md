---
title: intel-ucode
description: An opinionated Linux® distribution based on musl libc and toybox
---

- `-w` and `--write-earlyfw` are different; the latter produces the correct `.img` directly rather than manually:
  - create a bin
  - run cpio with -H newc (new sVR4 format)
  - set ownership to 0:0
  - turn it into an image
  - change the cpio block size to 16 bytes, and remove header entries for the parent directories of the microcode data file (tools might complain about the non-standard cpio block size) and this will typically reduce the early initramfs size by 736 bytes (Alpine)
- `--strict-checks` is the default mode of operation
- `--no-ignore-broken` is also the default mode of operation
- `--no-downgrade` is also the default mode of operation
- `intel-ucode/list` and `intel-ucode-with-caveats/list` do not exist
- Licenses must be provided alongside the microcode binary blob
