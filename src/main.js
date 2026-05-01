import { tgReady, tgUser, tgPlatformInfo, openTelegramLink } from './shared/telegram.js';
import { registerStrings, t, getLocale, setLocale } from './shared/i18n.js';
import { identify, track } from './shared/analytics.js';
import { gameStrings, GAMES } from './strings.js';

registerStrings(gameStrings);
tgReady();

const u = tgUser();
if (u) identify(u);
track('hub_loaded', { has_telegram_user: !!u, ...tgPlatformInfo() });

render();

function render() {
  const root = document.getElementById('app');
  root.innerHTML = '';
  const screen = el('div', 'screen hub');

  const langBtn = el('button', 'lang-btn', getLocale() === 'en' ? '中' : 'EN');
  langBtn.setAttribute('aria-label', 'Switch language');
  langBtn.addEventListener('click', () => {
    setLocale(getLocale() === 'en' ? 'zh' : 'en');
    render();
  });
  screen.append(langBtn);

  screen.append(el('h1', 'title', t('title')));
  screen.append(el('p', 'subtitle', t('subtitle')));

  const list = el('div', 'game-list');
  GAMES.forEach((game, i) => {
    const card = el('button', `game-card theme-${game.theme}`);
    card.style.animationDelay = `${i * 80}ms`;

    const emoji = el('div', 'game-emoji', game.emoji);
    card.append(emoji);

    const main = el('div', 'game-main');
    main.append(el('div', 'game-title', t(game.titleKey)));
    main.append(el('div', 'game-desc', t(game.descKey)));
    card.append(main);

    card.append(el('div', 'game-arrow', '›'));

    card.addEventListener('click', () => {
      track('game_card_clicked', { game: game.id });
      openTelegramLink(game.tgUrl);
    });
    list.append(card);
  });
  screen.append(list);

  const follow = el('button', 'follow-cta', t('follow_cta'));
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
