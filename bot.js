import { Telegraf, Markup } from "telegraf";

const bot = new Telegraf("YOUR_TELEGRAM_BOT_TOKEN");
const WEBAPP_URL = "https://YOUR_VERCEL_DOMAIN.vercel.app";

bot.start((ctx) =>
  ctx.reply("Открыть SMM панель:", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Открыть WebApp", web_app: { url: WEBAPP_URL } }
        ]
      ]
    }
  })
);

bot.launch();
console.log("Bot started");