const Discord = require('discord.js')
const db = require('megadb');
module.exports = async (bot, message, args) => {

 let emoji = "<:MonedaOmega:749813116514074624>"
let economia = new db.crearDB(`${message.guild.id}`, 'economia_db');
  


    if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.reply('You do not have permissions to use this command.')
    }

    if (!args[0]) return message.reply('Please specify a valid quantity.')
    if (isNaN(args[0])) return message.reply('That is not a valid number!')

    let user = message.mentions.users.first() || message.author

    economia.sumar(`money_${message.guild.id}_${user.id}`, args[0])

     let bal = await economia.obtener(`money_${message.guild.id}_${user.id}`)

    let embed = new Discord.MessageEmbed()
    .setAuthor(`Added Tabs!`, message.author.displayAvatarURL)
    .addField(`Quantity`,"+" + `${args[0]} ${emoji}`)
    .addField(`New balance`, `${bal} ${emoji}`)
    .setColor("GREEN") 
    .setTimestamp()

    message.channel.send(embed)


}