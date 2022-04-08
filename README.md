# goisings

Send a sticker to a Telegram channel by clapping your hands.


### Installation
* `npm install`
* Configure the clap.json and telegram.json and off you go.
* For MacOS: `brew cask install sox`
* For Linux: Install packages sox, festival and festival-english with your package manager.

### Running
* `npm run build`
* `npm start`

### clap.json

See also: https://www.npmjs.com/package/clap-detector#configuration

* `CLAPS` - How many claps are needed for the command
* `TIMEOUT` - How many milliseconds is allowed between claps
* `AUDIO_SOURCE` - Usually `alsa hw:0,0` in Linux and `coreaudio default` in MacOS. No idea about OSS/Pulseaudio support, it is actually up to clap-detector module.
* `DETECTION_PERCENTAGE_START/END` - Minimum noise percentage threshold necessary to start/end recording sound
* `CLAP_AMPLITUDE_THRESHOLD` - Minimum amplitude threshold to be considered as clap.
* `CLAP_ENERGY_THRESHOLD` - Maximum energy threshold to be considered as clap.
* `MAX_HISTORY_LENGTH` - For clap-detector internal use, how many claps are saved in history. Not used in this script.
* `AUDIOCMD` - Optional. Configure this if you wish to have audible feedback.
