# TinyPaws Hub

矩阵入口页：列出所有 TinyPaws 游戏，用户点卡片跳到对应 Mini App。

Bot 菜单按钮指向这个 hub 的 Vercel URL。新游戏上线时改 `src/strings.js` 的 `GAMES` 数组 + 加几个文案 key 即可。

## 当前游戏

- 🐑 Triple Pop（sheep_game）→ `t.me/tinypaws_games_bot/triple_pop`
- 🍉 合成大西瓜（suika）→ `t.me/tinypaws_games_bot/suika`

## Stack

纯静态 vanilla ESM，无构建。共享模块 `src/shared/`（从 sheep/suika 矩阵 copy）。Vercel 自动部署 main 分支。

## 本地

```bash
python3 -m http.server 8002
```
