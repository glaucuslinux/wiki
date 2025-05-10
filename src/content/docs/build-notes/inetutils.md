---
title: inetutils
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- Disable `r*` due to security concerns and are not supported on `musl`
- `--enable-encryption` and `--enable-authentication` depend on `kerberos`
- `--disable-ipv4` disables IPv4 tests
- Breaks with conflicting types for `logwtmp`
- Do we need to use:
```
sed -e 's@_GL_WARN_ON_USE (gets@//_GL_WARN_ON_USE (gets@' -i lib/stdio.in.h
echo '#define PATH_PROCNET_DEV "/proc/net/dev"' >> ifconfig/system/linux.h
```

## References
- https://www.gnu.org/software/inetutils/manual/inetutils.html
