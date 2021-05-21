const Discord = require('discord.js');

module.exports = (client,message,args) => {

let gifs = ['https://media.discordapp.net/attachments/744701333311062126/755635035813576714/tenor-1.gif',
'https://media.discordapp.net/attachments/744701333311062126/755640037596725314/20200915_230314.gif',
'https://media.discordapp.net/attachments/744701333311062126/755649351220723792/20200915_234029.gif',
'https://media.discordapp.net/attachments/744701333311062126/755649616560652318/20200915_234135.gif',
'https://media.discordapp.net/attachments/744701333311062126/755650957362331728/20200915_234657.gif',
'https://media.discordapp.net/attachments/744701333311062126/755652659494518854/20200915_235340.gif',
'https://media.discordapp.net/attachments/744701333311062126/755652913635786894/20200915_235437.gif',
'https://media.discordapp.net/attachments/744701333311062126/755653022327242873/20200915_235506.gif',
'https://media.discordapp.net/attachments/744701333311062126/755653240879710259/20200915_235558.gif',
'https://media.discordapp.net/attachments/744701333311062126/755653641578217505/20200915_235729.gif'
]
let randomIMG = gifs[Math.floor(Math.random() * gifs.length)] 
let mention = message.mentions.members.first()


if(!mention){ return message.channel.send("Mention someone")
}


/* Ahora Mandaremos el link en un embed 
VERSION 11 */
const embed = new Discord.MessageEmbed()
    .setImage(randomIMG)
    .setTitle(`${message.member.displayName} Kiss to  ${mention.displayName} 7u7`)
    .setColor("RANDOM")
message.channel.send(embed)

}