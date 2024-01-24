import { TelegramBot, BOT_TOKEN, bot } from '/Users/ivankaruna/Desktop/bot/dependence.js'

function three_hundread() { 
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
    
    switch(text) {
    case 'Триста':
    case 'Тристо':
    case 'триста':
    case 'тристо':
    case '300':
        bot.sendMessage(chatId, 'Отс*си у тракториста!');
        bot.sendSticker(chatId, '/Users/ivankaruna/Desktop/bot/stickers/standUp.webp');
        break;

}
console.log(msg);
    })
    };

export{three_hundread};