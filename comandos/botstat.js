const Discord = require('discord.js');


module.exports = (client,message,args) => {
//message.channel.send('Este mensaje se eliminara en 10 segundos...')
    //    .then(m => {
      //    m.delete(10000);
       // })
        const moment = require("moment");
                require('moment-duration-format');
                      const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");
    
                       let emoji = "<:dev:842269765904105505>"
                       let rams = "<:rams:843147109335040010>"
                       let uptime1 = "<:uptime:843147069757587476>"
                                

                        const embed = new Discord.MessageEmbed()

                        .setColor(0x66ff66)

                        .setAuthor(`Bot info`, client.user.avatarURL)
                        .addField(`${emoji} Developer:`,"`Mr.Bear#3459`", true)
                        .addField(`Version`, `0.3.5`, true)
                        .addField(`Libreria`, `Discord ^12.5.3 (Js)`, true)

                        .addField(`${rams}RAM`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
                        .addField(`${uptime1}Uptime`, `${actividad}`, true)
                        .addField("Servers",`${client.guilds.cache.size.toLocaleString()}`, true)

                        .addField(`Users`, `${client.users.cache.size.toLocaleString()}`, true)
                        .addField("Channels", `${client.channels.cache.size.toLocaleString()}`, true)
                              .addField("Voice connections", `${client.voice.connections.size}`, true)
                        .setFooter("Version 0.3.5", client.user.avatarURL)
                message.channel.send(embed)
                //.then(m => {
                  //m.delete(10000);

                    //});
                  }