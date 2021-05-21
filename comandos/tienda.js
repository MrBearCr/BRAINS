const Discord = require('discord.js')

module.exports = (client, message, args, config) => {

     let emoji = "<:MonedaOmega:749813116514074624>"
    let embed = new Discord.MessageEmbed() 
    .setTitle(`${client.user.tag} OmegaTienda!`)
    .setDescription('**Usar $comprar <objeto> para obtener!**')
    .addField(`Venture II`, `500K ${emoji}`)
    .addField(`Condor II`, ` 69K${emoji}`)
    .addField(`1M `, `30K ${emoji}`)
     
    .setColor("RANDOM") 

    message.channel.send(embed)



}