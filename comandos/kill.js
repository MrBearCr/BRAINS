const Discord = require('discord.js');

module.exports = (client,message,args) => {

let gifs = ['https://cdn.discordapp.com/attachments/399448944889036801/655839366370951172/b61b4ce0b0f53b2d1e57841dd7b896ab.gif', 
'https://cdn.discordapp.com/attachments/399448944889036801/664060217226690560/d32133d8-c698-4157-bf7c-697794830be1.gif', 
'https://cdn.discordapp.com/attachments/399448944889036801/620655855825715219/41b3fa86-0635-4a87-aafd-ff31463ac265.gif',
'https://cdn.discordapp.com/attachments/399448944889036801/644217294414938201/09db28e9-0793-4da0-96f6-4219bc49f2f0.gif',
'https://media.discordapp.net/attachments/744701333311062126/755627238673743922/20200915_221217.gif',
'https://media.discordapp.net/attachments/744701333311062126/755628345655427132/20200915_221703.gif',
'https://media.discordapp.net/attachments/744701333311062126/755629507750264852/20200915_222124.gif',
'https://media.discordapp.net/attachments/744701333311062126/755629940887781516/20200915_222315.gif',
'https://media.discordapp.net/attachments/744701333311062126/755631286877683802/20200915_222819.gif?width=610&height=343',
'https://media.discordapp.net/attachments/744701333311062126/755631651459170385/20200915_223010.gif',
'https://media.discordapp.net/attachments/744701333311062126/755632132562616340/20200915_223149.gif',
'https://media.discordapp.net/attachments/744701333311062126/755634410736320662/20200915_224049.gif',
'https://media.discordapp.net/attachments/744701333311062126/755634429153509396/20200915_224020.gif',
]
let randomIMG = gifs[Math.floor(Math.random() * gifs.length)] 
let mention =
message.mentions.members.first()


if(!mention){ return message.channel.send("Mention someone")
}



const embed = new Discord.MessageEmbed()
    .setImage(randomIMG)
    .setTitle(`${message.member.displayName} Murdered ${mention.displayName}`)
    .setColor("RANDOM")
message.channel.send(embed)

}
