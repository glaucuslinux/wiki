---
title: rad Performance
description: A simple, lightweight and opinionated Linux® distribution based on musl libc and toybox
---

- `rad` parses 120k packages under 50 seconds using `toml_serialization`
- Older versions with `parsetoml` parsed 100k packages in 3 minutes
- For CPU/compute use || (via Weave or OpenMP)
- For IO use `asyncdispatch`
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
