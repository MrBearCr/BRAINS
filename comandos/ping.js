const Discord = require('discord.js');


module.exports = (client, message, args) => { 
let ping = Math.floor(message.client.ping);

      message.channel.send(":ping_pong: Pong!")
      .then(m => {
           const embed = new Discord.MessageEmbed()
     .setDescription(`:incoming_envelope: Messages Ping: \`${m.createdTimestamp - message.createdTimestamp} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``)
           .setColor(0x00AE86)
                      
           m.edit(embed);
           m.react('🏓');
      }); 
  
  }