---
title: opendoas
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## Notes
- symlink for opendoas to doas (similar to how gm4 links to m4 and gmake links to make) (since we can't do a yacc to byacc and awk to mawk style as the package internally uses doas only with no mention of opendoas internally and without an option to add a programprefix)
