const Eris = require('eris');

// Environmental variables
const BOT_TOKEN = process.env.BOT_TOKEN;

// Create new bot instance
const bot = new Eris(BOT_TOKEN);

bot.on('ready', () => {
  console.log(`smashbot is now running: ${new Date().toDateString()}`);
});

// Connect to Discord
bot.connect();
