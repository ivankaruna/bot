import { TelegramBot, BOT_TOKEN, bot } from '/Users/ivankaruna/Desktop/bot/dependence.js'

function no() { 
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
    
    
    switch(text) {
    case 'нет':
    case 'НЕТ':
    case 'Нет':
        bot.sendMessage(chatId, 'П*дора ответ');
        bot.sendSticker(chatId, './stickers/otvet.webp');
        break;

    case 'net':
    case 'NET':
    case 'Net':
        bot.sendMessage(chatId, 'P*dora otvet');
        bot.sendSticker(chatId, './stickers/otvet.webp');
        break;

    case 'no':
    case 'NO':
    case 'No':
        bot.sendMessage(chatId, 'P*dora otvet-govno');
        bot.sendSticker(chatId, '/Users/ivankaruna/Desktop/bot/stickers/otvet.webp');
        break;

    case 'Ноу':
    case 'ноу':
        bot.sendMessage(chatId, 'П*дора ответ-говно');
        bot.sendSticker(chatId, '/Users/ivankaruna/Desktop/bot/stickers/otvet.webp');
        break;

}
console.log(msg);
    })
    };

export{no};