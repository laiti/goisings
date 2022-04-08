import ClapDetector from 'clap-detector';
import moment from 'moment';

import clapConfig from '../config/clap.json';
import telegramConfig from '../config/telegram.json';

const clap = new ClapDetector(clapConfig);

function ts() {
    if (clapConfig.TIMESTAMP) {
        return moment().format('YYYY-MM-DDTHH:mm:ss: ');
    }
    return '';
}

const disposableTwoClapsListener = clap.addClapsListener(claps => {
    console.log("heard 2 claps", claps)
  }, { number: clapConfig.CLAPS, delay: clapConfig.TIMEOUT });
