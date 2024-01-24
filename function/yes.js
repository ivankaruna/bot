import { TelegramBot, BOT_TOKEN, bot } from '/Users/ivankaruna/Desktop/bot/dependence.js'

function yes() { 
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
    
    switch(text) {
    case 'да':
    case 'ДА':
    case 'Да':
        bot.sendMessage(chatId, 'П*дора слова');
        break;

    case 'da':
    case 'DA':
    case 'Da':
        bot.sendMessage(chatId, 'P*dora slova');
        break;
}
console.log(msg);
    })
    };

export{yes};