const Discord = require('discord.js')

module.exports = async (bot, message, args) => {

 let emoji = "<:MonedaOmega:749813116514074624>"


    if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.reply('You do not have permissions to use this command.')
    }

    if (!args[0]) return message.reply('Please specify a valid quantity.')
    if (isNaN(args[0])) return message.reply('That is not a valid number!')

    let user = message.mentions.users.first() || message.author

    db.add(`money_${message.guild.id}_${user.id}`, args[0])


     let bal = await db.get(`money_${message.guild.id}_${user.id}`)

    let embed = new Discord.MessageEmbed()
    .setAuthor(`Added Tabs!`, message.author.displayAvatarURL)
    .addField(`Quantity`,"+" + `${args[0]} ${emoji}`)
    .addField(`New balance`, `${bal} ${emoji}`)
    .setColor("GREEN") 
    .setTimestamp()

    message.channel.send(embed)

}