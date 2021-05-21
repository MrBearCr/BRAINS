const Discord = require('discord.js')
const ms = require("parse-ms")

module.exports = async ( client, message, args, config) => {

let emoji = "<:MonedaOmega:749813116514074624>"

let robar = await db.get(`robar_${message.guild.id}_${message.author.id}`)
    let timeout = 1.08e+7;


    let user  = message.mentions.members.first()

   if (!user) {
        return message.channel.send(':x:  Please mention someone to steal')
    }
    
     


    let targetuser =  db.get(`money_${message.guild.id}_${user.id}`)

    let author =  db.get(`money_${message.guild.id}_${message.author.id}`) 

    
    if (author < 3500) { // if the authors balance is less than 250, return this.
        return message.channel.send(`:x: You need more than  3,500 ${emoji} to rob someone.`)
    }

    if (targetuser < 500) { // if mentioned user has 0 or less, it will return this.
        return message.channel.send(`:x: ${user.user.username} He has nothing to steal.`)
    }


    let random = Math.floor(Math.random() * 75) + 1; 
      
if (robar !== null && timeout - (Date.now() - robar) > 0) {
    let time = ms(timeout - (Date.now() - robar));

let timeEmbed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`You've recently stolen, wait.${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  }else embed = new Discord.RichEmbed()
    .setDescription(`${message.author}You robbed ${user} and left with ${random} ${emoji}!`)
    .setColor("GREEN")
    .setTimestamp()
    message.channel.send(embed)

    db.set(`robar_${message.guild.id}_${message.author.id}`, Date.now())
    db.subtract(`money_${message.guild.id}_${user.id}`, random)
    db.add(`money_${message.guild.id}_${message.author.id}`, random)
    
}