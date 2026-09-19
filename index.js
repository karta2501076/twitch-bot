const tmi = require('tmi.js');

const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: process.env.TWITCH_USERNAME,
        password: process.env.TWITCH_OAUTH
    },
    channels: [ process.env.TWITCH_CHANNEL ]
});

client.connect().catch(console.error);

client.on('connected', (address, port) => {
    console.log(`* Bot 已經成功連線到 ${address}:${port}`);
});

client.on('message', (target, context, message, self) => {
    if (self) return;
    const commandName = message.trim().toLowerCase();
    if (commandName === '!hello') {
        client.say(target, `安安 @${context['display-name']}！karta_bot 報到！`);
    }
});