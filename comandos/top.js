const Discord = require("discord.js")

module.exports = (client, message, args) => {  
  let money = db.all().filter(data => 
  data.ID.startsWith(`money`)).sort((a, b) => b.data - a.data)
    money.length = 10;
    var finalLb = "";
    for (var i in money) {
 let emoji = "<:MonedaOmega:749813116514074624>"
      finalLb += `**${money.indexOf(money[i])+1}. <@${money[i].ID.split('_')[2]}>** - ${money[i].data} ${emoji} \n`;
    }
    const embed = new Discord.RichEmbed() /*MessageEmbed*/
    .setAuthor(`${message.guild.name} -Top Omega Fichas!`, message.guild.iconURL)
    .setColor(2686950)
    .setDescription(finalLb)
    .setFooter(client.user.tag, client.user.displayAvatarURL)
    .setTimestamp()
    message.channel.send(embed);

}