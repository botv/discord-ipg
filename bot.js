const Discord = require('discord.js');
const questions = require('./questions.js');

const client = new Discord.Client();

client.on('message', (msg) => {
  if (msg.content === '!ipg')
    msg.channel.send(questions[Math.floor(Math.random() * questions.length)]);
});

client.login(process.env.DISCORD_BOT_TOKEN);
