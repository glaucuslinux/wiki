---
title: Networking
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

## DHCP
- ISC dhcp
- sdhcp: https://github.com/michaelforney/sdhcp
- toybox `dhcp`: https://github.com/landley/toybox/blob/master/toys/pending/dhcp.c

## DNS Resolver
- dnsmasq: https://thekelleys.org.uk/dnsmasq/doc.html
- OpenResolv: https://roy.marples.name/projects/openresolv
- s6-dns: https://skarnet.org/software/s6-dns/

## Network Managers
- bcnm: https://skarnet.org/software/bcnm/
- ifupdown-ng: https://github.com/ifupdown-ng/ifupdown-ng
- ConnMan: git kernel link

## Wireless Daemon
- eiwd: https://github.com/illiliti/eiwd

## Excluded
- iwd (Wireless Daemon): https://iwd.wiki.kernel.org/
- s6-networking (irrelevant): https://skarnet.org/software/s6-networking/
- systemd-resolved (DNS Resolver)
