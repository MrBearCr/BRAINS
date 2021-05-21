const Discord = require('discord.js')

module.exports = (bot, message, args) => {

 let emoji = "<:MonedaOmega:749813116514074624>"

let autor = message.author
    let bal = db.get(`money_${message.guild.id}_${message.author.id}`)

    if (bal === null) bal = 0;

    const embed = new Discord.MessageEmbed()
    .setDescription(`${autor} Your balance is`)
   .addField("Omega chips: ",` ${bal} ${emoji}`)  
   .setColor("RANDOM")

     message.channel.send(embed)

}