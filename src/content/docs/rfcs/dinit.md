---
title: dinit
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Replaces `s6` and `s6-rc`
- Supports startup notification (compatible with s6)
- `dinit` views on `s6-rc`:
```
"S6-RC nicely manages chaining of service standard input/output, facilitating
setting up a logging chain where a logging process consumes the output of a
service, and either can be restarted while losing only minimal (if any)
output from the logs."

"It seems likely that S6-RC is resilient to allocation failure."
```
- Do not use `hidepid` for `proc`?
