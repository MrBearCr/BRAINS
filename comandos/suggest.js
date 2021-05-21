const Discord = require('discord.js');


module.exports = (client, message, args) => {


  let channel = client.channels.cache.get('612175953975836725');
  let user = message.author;
  let reporte = args.join(' ');
  if (!reporte) return message.channel.send(`:grey_exclamation: | **Send a report or suggestions**`)

  const embed = new Discord.MessageEmbed()
    .setTitle(':e_mail: | **Report**')
    .addField("Send by:",message.author.username)
    .addField("Suggest:", reporte)
    .setThumbnail(`https://media.discordapp.net/attachments/576980879226961935/577344574931075072/carta.gif`)
    .setColor(0x77AEFF)
    .setFooter("Version 0.3.5")

  channel.send(embed)
  message.channel.send(":white_check_mark: | **Report sent**")

  //message.channel.send(embed).then(Message => Message.delete({ timeout: 3000 }))
  message.delete();
                 }