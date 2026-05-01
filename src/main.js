import { tg, tgReady, tgUser, tgPlatformInfo, openTelegramLink } from './shared/telegram.js';
import { identify, track } from './shared/analytics.js';
import { HUB_COPY, GAMES } from './strings.js';

tgReady();

const u = tgUser();
if (u) identify(u);
track('hub_loaded', { has_telegram_user: !!u, ...tgPlatformInfo() });

render();

function render() {
  const root = document.getElementById('app');
  root.innerHTML = '';
  const screen = el('div', 'screen hub');

  screen.append(el('h1', 'title', HUB_COPY.title));
  screen.append(el('p', 'subtitle', HUB_COPY.subtitle));

  const list = el('div', 'game-list');
  GAMES.forEach((game, i) => {
    const card = el('button', `game-card theme-${game.theme}`);
    card.style.animationDelay = `${i * 80}ms`;

    card.append(el('div', 'game-emoji', game.emoji));

    const main = el('div', 'game-main');
    main.append(el('div', 'game-title', game.title));
    main.append(el('div', 'game-desc', game.desc));
    card.append(main);

    card.append(el('div', 'game-arrow', '›'));

    card.addEventListener('click', () => {
      track('game_card_clicked', { game: game.id });
      openTelegramLink(game.tgUrl);
      tg?.close?.();
    });
    list.append(card);
  });
  screen.append(list);

  const follow = el('button', 'follow-cta', HUB_COPY.follow_cta);
  follow.addEventListener('click', () => {
    track('follow_clicked', { source: 'hub_footer' });
    openTelegramLink('https://t.me/tinypaws_games');
  });
  screen.append(follow);

  root.append(screen);
}

function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}
