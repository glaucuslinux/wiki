---
title: libtool
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- `./bootstrap` and `autoreconf -vfis` do not work
- Check `lt_cv_sys_lib_dlsearch_path_spec="/lib" ./configure`
- Is `libltdl` being installed? (`--enable-ltdl-install`)
- `lt_cv_shlibpath_overrides_runpath=yes ./configure`?
- Alpine's cross compile fix patch also fixes the link order
