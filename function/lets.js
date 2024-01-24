import { TelegramBot, BOT_TOKEN, bot } from '/Users/ivankaruna/Desktop/bot/dependence.js'

function lets() { 
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
    
    switch(text) {
    case 'давай':
    case 'ДАВАЙ':
    case 'Даавай':
        bot.sendMessage(chatId, '${from.first_name}, Жопа есть - сам давай!');
        break;

}
console.log(msg);
    })
    };

export{lets};