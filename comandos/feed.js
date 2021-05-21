const Discord = require('discord.js');

module.exports = (client,message,args) => {

let gifs = ["https://media.indiedb.com/images/groups/1/1/84/kanzashi-eating.gif","https://media.discordapp.net/attachments/724444604111519864/726884862245470359/FEED.gif","https://media.discordapp.net/attachments/724444604111519864/726871014411337808/feed3.gif","https://media.discordapp.net/attachments/724444604111519864/726871017179578388/feed4.gif","https://media.discordapp.net/attachments/724444604111519864/726871020203671652/feed2.gif","https://cdn.discordapp.com/attachments/724444604111519864/726870259402932464/feed.gif","https://media.discordapp.net/attachments/724444604111519864/726870260669612102/feed1.gif"] 
let randomIMG = gifs[Math.floor(Math.random() * gifs.length)] 
let mention =
message.mentions.members.first()


if(!mention){ return message.channel.send("Mention")
}



const embed = new Discord.MessageEmbed()
    .setImage(randomIMG)
    .setTitle(`${message.member.displayName} gave some food to ${mention.displayName}`)
    .setColor("RANDOM")
message.channel.send(embed)
}