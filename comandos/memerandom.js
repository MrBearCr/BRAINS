
const Discord = require("discord.js");
const gottem = require('djs-meme');
module.exports = async (client, message, args) => {

const Meme = await gottem.meme();
        return message.channel.send(Meme);
        
}