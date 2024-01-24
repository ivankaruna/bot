
import TelegramBot from "node-telegram-bot-api"

const telegram_api = TelegramBot;

const BOT_TOKEN = '6430972006:AAEkxfF_8ZnxPWqpJT9z_7gNwJM4ycv4EdU'

const bot = new telegram_api(BOT_TOKEN, {polling: true})

const commands = {command: "/help", description: "Все команды"}
        
        

export {TelegramBot, BOT_TOKEN, bot, commands}