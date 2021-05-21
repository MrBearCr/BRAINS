const Discord = require('discord.js');

module.exports = (client,message,args) => {

let gifs = ['https://media.discordapp.net/attachments/745325526184624199/749712138515513414/giphy.gif', 'https://media.discordapp.net/attachments/745325526184624199/749712248074797166/giphy_1.gif', 'https://media.discordapp.net/attachments/745325526184624199/749712605244948520/giphy_2.gif','https://media.discordapp.net/attachments/745325526184624199/749712956224176219/giphy_4.gif']

let randomIMG = gifs[Math.floor(Math.random() * gifs.length)] 
let mention =
message.mentions.members.first()


if(!mention){ return message.channel.send("Menciona a alguien")
}



const embed = new Discord.RichEmbed()
    .setImage(randomIMG)
    .setTitle(`${message.member.displayName} Disparo un misil a ${mention.displayName}`)
    .setColor("RANDOM")
message.channel.send(embed)
}