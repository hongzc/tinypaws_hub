# TinyPaws Hub

Matrix landing page: lists every TinyPaws game as a card, tap to launch the
matching Mini App. The bot menu button points here.

**English-only** (international audience). Individual games keep their own
zh/en toggle — the hub does not, to keep it dead simple.

## Current games

- 🐑 Triple Pop (sheep_game) → `t.me/tinypaws_games_bot/triple_pop`
- 🍉 Suika → `t.me/tinypaws_games_bot/suika`

## Adding a game

Append one entry to `GAMES` in `src/strings.js`. That's it — no i18n keys
to register.

## Stack

Pure static vanilla ESM, no build. Shared modules in `src/shared/` (copied
verbatim from sheep/suika). Vercel auto-deploys `main`.

## Local dev

```bash
python3 -m http.server 8002
```
