---
title: Resolving Dependencies
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Dependency list should have the least amount of packages sufficient to build the package as recursively tracking them would give the entire tree, and would reduce computation and repeated resolving?

- But then again, don't we have a check if something already is included in the dependency tree then don't add it again..
