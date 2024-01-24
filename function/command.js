import { TelegramBot, BOT_TOKEN, bot } from '/Users/ivankaruna/Desktop/bot/dependence.js'

function command() { 
    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;
        
    
    
    if (text === '/Jora') {
        bot.sendSticker(chatId, '/Users/ivankaruna/Desktop/bot/stickers/Jora.webp')
        bot.sendMessage(chatId, 'Тыыыы, ИДИ НА Х*Й 🖕 ');

    };

    if (text === '/HI') {
        bot.sendSticker(chatId, '/Users/ivankaruna/Desktop/bot/stickers/HI.webp')
        bot.sendMessage(chatId, 'Заходи не бойся, уходя не плачь')
    };

    if (text === '/Sad') {
        bot.sendSticker(chatId, '/Users/ivankaruna/Desktop/bot/stickers/sad.webp')
        bot.sendMessage(chatId, 'Грутно...')
    };

    if (text === '/Chiki_piki') {
        bot.sendSticker(chatId, '/Users/ivankaruna/Desktop/bot/stickers/Chiki_piki.webp')
        bot.sendMessage(chatId, 'Всё чики-пики')
    };

    if (text === '/Kalyanshiki') {
        bot.sendSticker(chatId, '/Users/ivankaruna/Desktop/bot/stickers/Kalyanshiki.webp')
        bot.sendMessage(chatId, 'Кальянщики хотят Читер')
    };

    if (text === '/help ') {
        bot.sendMessage(chatId, '/Jora \n/HI \n/Sad \n/Chiki_piki \n/Kalyanshiki \nтак же я отвечаю на сообщения: да, нет, давай и 300)))')
    };

    

console.log(msg);

})
};

export {command};