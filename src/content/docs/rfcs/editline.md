---
title: editline
description: An opinionated Linux® distribution based on musl libc and toybox
---

- Not to be confused with NetBSD's libedit (thrysoee)
- Forked from Minix
- Does not support `.editrc`
- Unable to replace gnu readline (unlike `libedit`)
- Lacks the following:
```
undefined reference to `history_base'
undefined reference to `history_expand'
undefined reference to `history_get'
undefined reference to `history_is_stifled'
undefined reference to `history_length'
undefined reference to `max_input_history'
undefined reference to `rl_add_defun'
undefined reference to `rl_already_prompted'
undefined reference to `rl_callback_handler_install'
undefined reference to `rl_callback_handler_remove'
undefined reference to `rl_callback_read_char'
undefined reference to `rl_completer_quote_characters'
undefined reference to `rl_completer_word_break_characters'
undefined reference to `rl_completion_entry_function'
undefined reference to `rl_completion_word_break_hook'
undefined reference to `rl_filename_completion_function'
undefined reference to `rl_get_previous_history'
undefined reference to `rl_get_screen_size'
undefined reference to `rl_newline'
undefined reference to `rl_pre_input_hook'
undefined reference to `rl_redisplay'
undefined reference to `rl_set_screen_size'
undefined reference to `rl_terminal_name'
undefined reference to `stifle_history'
undefined reference to `tilde_expand'
undefined reference to `unstifle_history'
undefined reference to `where_history'
```

## References
- https://github.com/troglobit/editline
