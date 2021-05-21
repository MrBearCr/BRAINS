const Discord = require('discord.js');

module.exports = (client,message,args) => {

let gifs = ['https://media1.giphy.com/media/oQtO6wKK2q0c8/giphy.gif?cid=ecf05e4713vaipq8p4kb5gt0icrol1i4etu2x84drm5iwo9h&rid=giphy.gif','https://media1.giphy.com/media/HhTXt43pk1I1W/giphy.gif','https://media2.giphy.com/media/Bg9R0lb0I7vjy/giphy.gif','https://media2.giphy.com/media/G4IesFxw5IkBa/giphy.gif?cid=ecf05e47d65fa99d59594af9a6af6f851612230f5c197d46&rid=giphy.gif','https://media3.giphy.com/media/uSHMDTUL7lKso/giphy.gif','https://media4.giphy.com/media/26tPdwMm4jyClgxTq/giphy.gif?cid=ecf05e47488d7b0335185cd07f0b71909eaca8b7f5ca5d8f&rid=giphy.gif','']

let randomIMG = gifs[Math.floor(Math.random() * gifs.length)] 

let mention =
message.mentions.members.first()


if(!mention){ return message.channel.send("Menciona a alguien")
}



const embed = new Discord.RichEmbed()
    .setImage(randomIMG)
    .setTitle(`${message.member.displayName} Aniquilo a ${mention.displayName}`)
    .setColor("RANDOM")
message.channel.send(embed)
}