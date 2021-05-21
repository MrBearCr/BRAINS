const Discord = require('discord.js')

module.exports =  (client, message, args, config) => {


    let author = db.get(`money_${message.guild.id}_${message.author.id}`)

    if (args[0] == '1M') {
        if (author < 30000) return message.channel.send('Necesitas 30k OF para canjear el premio.') 
        
        

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 30000)
        message.channel.send(message.author.tag + 'Canjeaste satisfactoriamente \n`1M Por 6800 OF`')
        
    } 
    
    else if(args[0] == 'venture') {
        
        if (author < 500000) return message.channel.send('Necesitas 50K de OF para canjear la venture II.') 
        
        db.subtract(`money_${message.guild.id}_${message.author.id}`, 500000)
        message.channel.send(message.author.tag + 'Canjeaste satisfactoriamente\n`Venture II Por 50K OF`')
    }

    else if(args[0] == 'condor') {
        
        if (author < 69000) return message.channel.send('Necesitas 6900 OF para canjear el Condor II.')

        db.subtract(`money_${message.guild.id}_${message.author.id}`, 69000)
        message.channel.send(message.author.tag + 'Canjeaste satisfactoriamente\n`Condor II Por 6900 OF`')
    }
}