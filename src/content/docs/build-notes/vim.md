---
title: vim
description: A simple and lightweight Linux® distribution based on musl libc and toybox
---

- Default `vimrc` directory is `/usr/share/vim/vimrc` (and `/etc/vimrc` symlink is expected)
- On Alpine and Arch:
```sh
VIMRCLOC=/etc

# or
sed -E 's|^.*(#define SYS_.*VIMRC_FILE.*").*$|\1|g' -i feature.h
sed -E 's|^.*(#define VIMRC_FILE.*").*$|\1|g' -i feature.h

# or
echo '#define SYS_VIMRC_FILE "/etc/vim/vimrc"' >> src/feature.h
```
