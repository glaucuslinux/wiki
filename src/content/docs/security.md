---
title: Security
description: An opinionated Linux® distribution based on musl libc and toybox
---

glaucus follows the principle of "least privilege"; each part of the system
should only be able to access what is strictly required, and nothing more.

- Address Space Layout Randomization (ASLR)
- Binding Policy NOW (BIND_NOW)
- Data Execution Prevention (DEP)
- Executable-Space Protection (ESP)
- eXecute Disable (XD)
- No eXecute (NX)
- Position Independent Code (PIC)
- Position Independent Executables (PIE)
- RELocation Read-Only (RELRO)
- Stack Clash Protection (SCP)
- Stack Smashing Protection (SSP)
