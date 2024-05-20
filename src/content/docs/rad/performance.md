---
title: Performance
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- `rad` now parses 120k packages in under 50 seconds (using `toml_serialization`)
- Previously with `parsetoml` rad parsed 100k packages in 3 minutes:
```C
85.07user 85.64system 2:57.57elapsed
```

- GNU Parallel?

- For IO use asyncdispatch
- For CPU/compute use ||

- Don’t use Weave or OpenMP (yes Nim can use OpenMP with the || operator) for IO tasks, it’s made for compute. And don’t use asyncdispatch for compute.

- https://www.youtube.com/watch?v=Ul8OO4vQMTw

## Compute Tasks (CPU)
- scientific computing (solvers, linear algebra, physics, biology, statistics, …)
- rendering and image processing
- games: physics, path finding, animation, rendering, AI
- finance: Monte-Carlo simulation for pricing
- cryptography
- compression
- video encoding

## IO Tasks
- waiting for or initiating a remote connection
- serving or loading web pages
- sending or receiving a message
- sending or receiving a RPC or REST query
- waiting for keyboard, mouse or joystick inputs
- logging to disk or console
- creating or deleting a file
- downloading a file
- flushing changes to disk
