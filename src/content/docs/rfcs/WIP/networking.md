---
title: Networking
description: An opinionated Linux® distribution based on musl libc and toybox
---

## DHCP
- busybox udhcpc: https://udhcp.busybox.net/README.udhcpc
- ISC dhcp
- sdhcp: https://github.com/michaelforney/sdhcp
- toybox dhcp: https://github.com/landley/toybox/blob/master/toys/pending/dhcp.c

## DNS Resolver (run as a `nobody` user without permissions)
- The Linux kernel does not perform DNS resolution although it may cache DNS results (via `nscd` which is disabled on glaucus)
- DNS resolution happens in user space
- dnsmasq: https://thekelleys.org.uk/dnsmasq/doc.html
- OpenResolv: https://roy.marples.name/projects/openresolv
- s6-dns: https://skarnet.org/software/s6-dns/

## Network Managers
- ifupdown-ng: https://github.com/ifupdown-ng/ifupdown-ng
- ConnMan: git kernel link

## Wireless Daemon
- eiwd: https://github.com/illiliti/eiwd

## Excluded
- bcnm (skarnet recommends using ifupdown-ng): https://skarnet.org/software/bcnm/
- iwd (Wireless Daemon): https://iwd.wiki.kernel.org/
- s6-networking (irrelevant): https://skarnet.org/software/s6-networking/
- systemd-resolved (DNS Resolver)

## References
- https://busybox.net/~vda/no_ifup.txt
