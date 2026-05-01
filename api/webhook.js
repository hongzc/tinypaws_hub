// Telegram bot webhook. Replies to /start (and /games, /play) with an inline
// keyboard whose `web_app` buttons launch the matrix games directly. This is
// the only reliable cross-Mini-App switching path on iOS Telegram — t.me URL
// taps and openTelegramLink both fail to auto-launch on the same bot.

const GAMES = [
  { text: '🐑 Triple Pop', url: 'https://sheep-game-tawny.vercel.app' },
  { text: '🍉 Suika', url: 'https://suika-lovat.vercel.app' },
];

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(200).end();

  const message = req.body?.message;
  const text = message?.text?.trim();
  if (!text) return res.status(200).end();

  const cmd = text.split(/\s+/)[0];
  if (cmd !== '/start' && cmd !== '/games' && cmd !== '/play') {
    return res.status(200).end();
  }

  const token = process.env.BOT_TOKEN;
  if (!token) {
    console.error('BOT_TOKEN env var is missing');
    return res.status(500).json({ error: 'no_token' });
  }

  const payload = {
    chat_id: message.chat.id,
    text: '🎮 *TinyPaws Games*\n\nTap a game to play:',
    parse_mode: 'Markdown',
    reply_markup: {
      inline_keyboard: GAMES.map((g) => [{ text: g.text, web_app: { url: g.url } }]),
    },
  };

  try {
    const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const j = await r.json();
    if (!j.ok) console.error('Telegram API error:', j);
  } catch (e) {
    console.error('webhook fetch failed:', e);
  }

  return res.status(200).end();
}
