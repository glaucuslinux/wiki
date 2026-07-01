---
title: rust
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Not fully bootstrappable from source yet; check `mrustc`, some trials report up to 310 GB disk space
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
- https://codeberg.org/notgull/dozer
- https://fractalfir.github.io/generated_html/cg_gcc_bootstrap.html
- https://github.com/DragonFlyBSD/rust-bootstrap-dragonfly
- https://github.com/dtolnay/bootstrap
- https://github.com/mesalock-linux/mesalock-distro
- https://github.com/rust-lang/compiler-team/issues/422
- https://guix.gnu.org/en/blog/2018/bootstrapping-rust/
- https://ntecs.de/blog/2026-02-01-bootstrapping-rust-considered-harmful/
- https://wiki.gentoo.org/wiki/Bootstrapping_Rust_via_stage_file
