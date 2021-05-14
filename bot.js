const Discord = require('discord.js');
const client = new Discord.Client();
const questions = require('./questions.js');

client.on('message', msg => {
  if (msg.content === '!ipg') {
    msg.channel.send(questions[Math.floor(Math.random() * questions.length)]);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
