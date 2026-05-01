// Hub 专属文案。registerStrings(gameStrings) 注入 shared/i18n。
export const gameStrings = {
  zh: {
    title: 'TinyPaws Games',
    subtitle: '小爪游戏矩阵',
    play: '开始',
    follow_cta: '🐾 关注 @tinypaws_games',
    sheep_title: 'Triple Pop',
    sheep_desc: '三消羊群闯关挑战',
    suika_title: '合成大西瓜',
    suika_desc: '物理消除 · 最高分挑战',
  },
  en: {
    title: 'TinyPaws Games',
    subtitle: 'Bite-sized games for Telegram',
    play: 'Play',
    follow_cta: '🐾 Follow @tinypaws_games',
    sheep_title: 'Triple Pop',
    sheep_desc: 'Pop & match level challenge',
    suika_title: 'Suika',
    suika_desc: 'Physics merge · score chase',
  },
};

// 游戏目录。新游戏上线时只需在这里加一行 + 在 strings 里加 *_title / *_desc
export const GAMES = [
  {
    id: 'sheep',
    emoji: '🐑',
    titleKey: 'sheep_title',
    descKey: 'sheep_desc',
    tgUrl: 'https://t.me/tinypaws_games_bot/triple_pop',
    theme: 'sakura',
  },
  {
    id: 'suika',
    emoji: '🍉',
    titleKey: 'suika_title',
    descKey: 'suika_desc',
    tgUrl: 'https://t.me/tinypaws_games_bot/suika',
    theme: 'meadow',
  },
];
