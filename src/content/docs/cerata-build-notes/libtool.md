---
title: libtool
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Can't run `./bootstrap` or `autoreconf -vfis`
- Check `lt_cv_sys_lib_dlsearch_path_spec="/lib" ./configure`
- Is `libltdl` being installed? (`--enable-ltdl-install`)
- `lt_cv_shlibpath_overrides_runpath=yes ./configure`?
- Alpine's fix cross compile patch includes the cross compile patch and the link order one
