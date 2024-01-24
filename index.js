import { yes } from './function/yes.js';
import { no } from './function/no.js';
import { lets } from './function/lets.js';
import { three_hundread } from './function/three_hundred.js';
import { command } from './function/command.js';
import { TelegramBot, BOT_TOKEN, bot, commands } from '/Users/ivankaruna/Desktop/bot/dependence.js'

yes();
no();
lets();
three_hundread();
command();

TelegramBot;
BOT_TOKEN;
bot;

bot.setMyCommands(commands);
bot.on("polling_error", err => console.log(err.data.error.message));