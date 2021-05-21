const Discord = require('discord.js')

module.exports =  (client, message, args, config) => {

 let emoji = "<:MonedaOmega:749813116514074624>"


    let user = message.mentions.members.first() 

    let member = db.get(`money_${message.guild.id}_${message.author.id}`)


    if (!user) {
        return message.channel.send('You have to mention someone')
    }
    if (!args[1]) {
        return message.channel.send('Please specify an amount')
    }
    if (message.content.includes('-')) { 
        return message.channel.send('negative money cannot be paid')
    }

    if (member < args[1]) {
        return message.channel.send(`That's more money than you have in your balance`)
    }

    message.channel.send(`${message.author.tag}, you have paid to ${user.user.username} ${args[1]}${emoji}.`)

    db.add(`money_${message.guild.id}_${user.id}`, args[1])

    db.subtract(`money_${message.guild.id}_${message.author.id}`, args[1])




}