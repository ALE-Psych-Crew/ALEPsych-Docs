# Override Base Assets Safely

::: callout warning "Unfinished (WIP)"
This page is still being worked on and may change.
:::

## Goal

Replace base assets without breaking fallback behavior.

## Safe rules

1. Keep the same relative path to override a base file.
2. Keep formats and expected naming (`.json`, `.png`, `.ogg`) consistent.
3. Start from base examples, then edit incrementally.
4. Test missing-file cases one system at a time.

## Verify it worked

- Mod file is used when present.
- Base asset is used when mod file is absent.

## Uncertainty note

Per-system error messaging/detail can vary and is not fully centralized.
