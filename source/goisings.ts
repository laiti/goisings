import moment from 'moment';
import TelegramBot from 'node-telegram-bot-api';
import ClapDetector from 'clap-detector';

import clapConfig from './config/clap.json';
import telegramConfig from './config/telegram.json';

const clap = new ClapDetector(clapConfig);

function ts() {
  if (clapConfig.TIMESTAMP) {
    return moment().format('YYYY-MM-DDTHH:mm:ss: ');
  }
  return '';
}

const bot = new TelegramBot(telegramConfig.botToken, { polling: false });

const disposableTwoClapsListener = clap.addClapsListener(
  (claps) => {
    console.log(`${ts()} heard 2 claps`, claps);
    bot.sendMessage(telegramConfig.chatId, 'sticker');
  },
  { number: clapConfig.CLAPS, delay: clapConfig.TIMEOUT },
);
