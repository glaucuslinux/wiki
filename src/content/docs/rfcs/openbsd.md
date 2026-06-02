---
title: openbsd
description: An opinionated Linux® distribution based on musl libc and toybox
---

- no `acl` or `attr`
- no gpl:
  - `clang`
  - `clang++`
  - custom libc + otto malloc
  - `compiler-rt`
  - `libc++`
  - `libc++abi`
- no initramfs
- no pam
- no systemd
- no udev; hotplugd/devd/libudev-devd instead

## Security
### Somewhat "valid" criticism
- Spectre v1 mitigations
- `%n` in `printf` is not disabled by default which allows format string attacks
- `TRAPSLED` is good in theory but is questionable in practice
- Response to `Zenbleed`
- `bcrypt` for hashing passwords
- Stack cookies/RETGUARD are leakable and suffer from partial overwrite vulnerabilities
- `MAP_STACK` limitations as bypasses exist
- ROP gadget removal have "minimal?" impact on actual exploitation difficulty
- `SETJMP/LONGJMP` implementation as single cookie reuse is weak
- Library order randomization adds entropy with some caveats

### Response to "invalid" criticism
- `arc4random` is a decent ChaCha20 implementation
- Disk encryption follows good practices
- ASLR & randomization techniques are valid measures despite limitations
- `atexit` hardening is "somewhat better" than glibc/musl
- Execute-only memory provides protection against code reading
- Microcode loading timing is "fine" despite implementation challenges
- `TIOCSTI` hardening is good in practice
- `tarpit` is a "decent" network defense mechanism
- SMAP/SMEP implementation is good
- Response to `Spectre v2/v3`
- `strlcpy`/`strlcat` are safer than alternatives
- Response to `SWAPGS`
- `pledge` is simpler than `seccomp`
- `unveil` is a "somewhat effective" filesystem sandboxing
- `signify` is a minimal and secure design choice by default
- privilege separation patterns reduces attack surface
- otto malloc is more secure than the previous `jemalloc`
- `fork+exec` is effective for address space isolation

## References
- https://isopenbsdsecu.re/mitigations/
- https://allthatiswrong.wordpress.com/2010/01/20/the-insecurity-of-openbsd/
