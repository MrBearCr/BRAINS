const Discord = require ("discord.js")

module.exports = (client, member) => {



 let canal = client.channels.get("744285771376099368");

  const embed = new Discord.RichEmbed()
  .setTitle("Un usuario a abandonado el servidor", true)
  .addField("Nombre: \n",`${member.user.tag}`, true)
  .addField("ID:\n",`${member.user.id}`, true)
  .setTimestamp()


  canal.send(embed)
}