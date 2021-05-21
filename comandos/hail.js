const Discord = require('discord.js');

module.exports = (client,message,args) => {

let gifs = ['https://media.discordapp.net/attachments/744701333311062126/755595738951712789/20200915_200356.gif', 'https://media.discordapp.net/attachments/744701333311062126/755595861550956624/20200915_195810.gif', 
'https://media.discordapp.net/attachments/744701333311062126/755595913321250876/20200915_194921.gif',
'https://media.discordapp.net/attachments/744701333311062126/755595942027198514/20200915_195625.gif',
'https://media.discordapp.net/attachments/744701333311062126/755595998687920198/20200915_195356.gif',
'https://media.discordapp.net/attachments/744701333311062126/755596022679339038/20200915_195810.gif',
'https://media.discordapp.net/attachments/744701333311062126/755596240984473640/20200915_195502.gif',
] 
let randomIMG = gifs[Math.floor(Math.random() * gifs.length)] 



const embed = new Discord.RichEmbed()
    .setImage(randomIMG)
    .setTitle(`${message.member.displayName} ALL HAIL OMEGA `)
    .setColor("RANDOM")
message.channel.send(embed)

}
