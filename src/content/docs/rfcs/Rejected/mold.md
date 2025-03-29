---
title: mold
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Depends on `tbb`
- Uses 12 GB when building and basically freezes the build process (mold should speed up linking times and reduce the overall bootstrap time but building mold takes up all the saved time and more...)
- Segfaults at random
- Used to add `libgcc` to all linked binaries
- Used to not be able to link the kernel
- Used to not support LTO
- Don't forget to include `mold` in your compiler's custom search directory

## References
- https://github.com/rui314/mold/issues/1211
- https://forums.gentoo.org/viewtopic-p-8804039.html

## Notes
- You can pass linker flags like this by using a single `-Wl`, check `output.txt`:
```sh
gcc -v main.c -o test -Wl,-s,--as-needed,--build-id,sha256,--compress-debug-sections,zstd,--gc-sections,--hash-style=gnu,-z,now,-z,noexecstack,-z,relro 2> output.txt
```
- MOLD flags:
```c
RAD_FLAGS_LINKER* = "-fuse-ld=mold -Wl,-s,--as-needed,--compress-debug-sections=zstd,--gc-sections,--hash-style=gnu,-z,now,-z,noexecstack,-z,relro"
```
- BFD flags:
```c
RAD_FLAGS_LINKER* = "-Wl,-O1,-s,-z,noexecstack,-z,now,-z,relro,-z,x86-64-v3,--as-needed,--gc-sections,--sort-common,--hash-style=gnu,--compress-debug-sections=zstd"
```

### Custom GCC Search Directory
- Custom built GCCs have custom search directories. Even though I have version `12.2.0`, adding `-fuse-ld=mold` was not sufficient for my custom `gcc` to find the host's `mold` (provided by distribution's package manager) or my custom `mold` (as I was getting the following error `collect2: fatal error: cannot find 'ld' mold`, which is why I had to add `-B/path/to/directory/where/custom/mold/is` to my `CFLAGS` along with `-fuse-ld=mold` to get it working.
- Most packages linked just fine, until I stumbled upon packages which used `autoreconf` and `libtool` to create `.la` files. Apparently `libtool` likes to [strip flags when linking](https://www.gnu.org/software/libtool/manual/libtool.html#Stripped-link-flags). This was troublesome because I am passing `-B/path/to/directory/where/custom/mold/is` in my `CFLAGS` and it was being removed, so my custom `gcc` could no longer find `mold`, giving the same error as above.
- You can workaround this by modifying `GCC_EXEC_PREFIX` which is not desirable for many reasons.
- The solution I found was to provide a symbolic link to `mold` in the search directories of the custom built `gcc` (which can be listed by running `gcc -print-search-dirs`).
- The symbolic link was installed in `/custom/toolchain/tuple/bin` where `binutils` already keeps its hardlinks to `../../bin` including `ld.bfd`, which is why I issued the command `ln -fs ../../bin/mold /custom/toolchain/tuple/bin/ld.mold`.
