const Discord = require("discord.js");
const ms = require("parse-ms");

 module.exports= async (bot, message) =>{
    const roll = Math.floor(Math.random() * 100) + 1;
    const price = 500;
    let emoji = "<:MonedaOmega:749813116514074624>"
    let user = message.author
        let timeout = 43200000;



    let dice = await db.get(`dice_${message.guild.id}_${message.author.id}`)

    if (dice !== null && timeout - (Date.now() - dice) > 0) {
    let time = ms(timeout - (Date.now() - dice));

    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(` You used the command recently, wait.\n
    ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } 

  else{

    const embed = new Discord.MessageEmbed()
      .setTitle("🎲 You rolled the dice you got: " + roll)
      .setColor("BLUE")
      .setFooter(message.author.username)
      .setTimestamp();

    if (roll === 6 ) {
      embed.setDescription(`🎉 Congratulations! You won an award of **${price} ${emoji}**`);
      db.add(`money_${message.guild.id}_${user.id}`,price);
      db.set(`dice_${message.guild.id}_${message.author.id}`, Date.now())
    }
     else {
      embed.setDescription(
        `You need to roll ** 6 ** to get a prize of **${price} ${emoji}**`)
        db.set(`dice_${message.guild.id}_${message.author.id}`, Date.now())
      
    }

    message.channel.send(embed);
  }
 }
 