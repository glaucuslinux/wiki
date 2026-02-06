---
title: mawk2
description: An opinionated Linux® distribution based on musl libc and toybox
---

- failed to run some benchmarks
- Results for 100 million integers benchmarks:
```sh
gawk

real    1m21.410s
user    1m20.955s
sys     0m0.245s

mawk

real    0m17.824s
user    0m17.630s
sys     0m0.146s

mawk2

real    0m18.384s
user    0m18.099s
sys     0m0.238s
```

## References
- https://youtube.com/watch?v=mf-_ZRUBc5g
