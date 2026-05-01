// Hub is English-only (international audience). Games themselves keep i18n.
export const HUB_COPY = {
  title: 'TinyPaws Games',
  subtitle: 'Bite-sized games for Telegram',
  follow_cta: '🐾 Follow @tinypaws_games',
};

// Add a new game: append one entry here. No string registration needed.
export const GAMES = [
  {
    id: 'sheep',
    emoji: '🐼',
    title: 'Triple Pop',
    desc: 'Pop & match level challenge',
    tgUrl: 'https://t.me/tinypaws_games_bot/triple_pop',
    theme: 'sakura',
  },
  {
    id: 'suika',
    emoji: '🍉',
    title: 'Suika',
    desc: 'Physics merge · score chase',
    tgUrl: 'https://t.me/tinypaws_games_bot/suika',
    theme: 'meadow',
  },
  {
    id: 'hop',
    emoji: '🦘',
    title: 'Hop',
    desc: 'Charge & jump · precision combo',
    tgUrl: 'https://t.me/tinypaws_games_bot/hop',
    theme: 'ocean',
  },
];
