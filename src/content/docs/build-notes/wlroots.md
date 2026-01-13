---
title: wlroots
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Explicitly enable `session` and `color-management` support?
- Enable `udmabuf` alongside `gbm` for efficient handling of software-rendered clients (also works as a fallback when gpu accel is not available and converts shm buffers to dma-bufs without copying)
- tinywl has higher performance

## References
- https://discuss.privacyguides.net/t/people-should-avoid-wayland-environments-which-use-wlroots-as-the-compositor/17899/14
- https://github.com/hyprwm/Hyprland/issues/2442
- https://github.com/hyprwm/Hyprland/issues/2637
- https://github.com/swaywm/sway/issues/5118#issuecomment-600054496
- https://gitlab.freedesktop.org/xyba/wayland-protocols/-/commit/3462be3ce5b85245c6602043a8ac47b3b9ec922c
