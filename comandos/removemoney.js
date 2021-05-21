const Discord = require('discord.js')

module.exports = async (client, message, args) => {

 let emoji = "<:MonedaOmega:749813116514074624>"

     if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.reply('You do not have permissions to use this command.').then(msg => {
            setTimeout(() => {
                msg.delete()
            }, 2500); 
        })
    }

    if (!args[0]) return message.reply('Please specify a valid quantity.')
    if (isNaN(args[0])) return message.reply('That is not a valid number!.')

    let user = message.mentions.members.first() || message.author
    
    db.subtract(`money_${message.guild.id}_${message.author.id}`, args[0])
    
    let bal = await db.get(`money_${message.guild.id}_${user.id}`)

    let embed = new Discord.MessageEmbed()
    .setAuthor(`Chips Removed!`, message.author.displayAvatarURL)
    .addField(`Quantity`,"-" + `${args[0]} ${emoji}`)
    .addField(`New balance`, `${bal} ${emoji}`)
    .setColor("RED") 
    .setTimestamp()
    

    message.channel.send(embed)





}