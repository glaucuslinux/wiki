---
title: rust
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Dynamic linking with `musl` is problematic (e.g. `libz-sys`, `openssl`, `tokio` and `zstd-sys`)
- Always links with `-fPIC`
- Check `RUSTFLAGS`
- `rustup` works under glaucus:
```sh
curl --proto '=https' --tlsv1.3 -sSf https://sh.rustup.rs -o rust.sh
# Read `rust.sh` before running it!
chmod +x rust.sh
./rust.sh
```

## Awesome
- b3sum
- bandwhich
- binsider
- debugedit
- delta
- dust
- dysk
- fclones
- fd (over fzf and skim)
- fish (starship makes shells slower, up to 3 times with fish)
- helix (nucleo is faster than fzf)
- lsd
- tokei
- xplr
- zed

## References
- https://github.com/rust-lang/compiler-team/issues/422
- https://github.com/mesalock-linux/mesalock-distro
