const Discord = require("discord.js")
const clientN = require("nekos.life") 
const neko = new clientN()

module.exports = (client, message, args) => {  

let mention2 = message.mentions.users.first()

let mention =
message.mentions.members.first()


if(!mention){ return message.channel.send("Menciona a alguien")
}

  if(mention2.id === message.author.id){
    message.channel.send("Eres masoquista?").then(m => m.delete(5000));
   return;
   }

  
    
  neko.sfw.slap().then(neko => { 
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setTitle(`${message.member.displayName} slap  ${mention.displayName}`)
.setImage(neko.url) 
message.channel.send(embed) 
 })
 }