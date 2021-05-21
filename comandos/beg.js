const Discord = require("discord.js");
const ms = require("parse-ms");

module.exports = async (bot, message, args) => {
  
  let emoji = "<:MonedaOmega:749813116514074624>"
  let user = message.author;
  let timeout = 600000;
  let amount = 5;

  let beg = await db.get(`beg_${message.guild.id}_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(` Have you recently begged \n \n try on ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new Discord.RichEmbed()
  .setColor("#FFFFFF")
  .setDescription(` You have begged and they gave you: ${amount} ${emoji}`);
  message.channel.send(moneyEmbed)

  db.add(`money_${message.guild.id}_${user.id}`, amount)
  
  db.set(`beg_${message.guild.id}_${user.id}`, Date.now())


  }
};
