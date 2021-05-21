 const Discord = require('discord.js');

const recentUsers = new Set();

module.exports = async (bot, message, args) => {

 let emoji = "<:MonedaOmega:749813116514074624>"
 

    let cooldown = 60000; 

    if (!args.length) {
      return message.reply(" $flip < cara / sello > <Cantidad>`")
    }

    if (recentUsers.has(message.author.id)) {
      message.channel.send("Puedes usar este comando cada 1m.");
    } else {

      let argsoutcome = args[0];
      let money = args[1];

      let minAmount = 5;
      if (money < minAmount) {
        return message.channel.send(`La apuesta minima es 5 ${emoji}.`);
      }

      let maxAmount = 25;
      if (money > maxAmount) {
        return message.channel.send(`La apuesta maxima es 25 ${emoji}.`);
      }

      let userMoney = db.get(`money_${message.guild.id}_${message.author.id}`);
     
      if (money > userMoney) {
        return message.channel.send("Tienes menos de lo que puedes apostar.")
      }

      let outcomes = [
        'Cara',
        'Sello'
      ];
      let outcome = outcomes[Math.floor(Math.random() * outcomes.length)];

      recentUsers.add(message.author.id);

      let result;
      if (outcome.toLowerCase() === argsoutcome.toLowerCase()) {
        let prize = money;
        result = `Felicidades Ganaste.\n **${prize}** ${emoji}.`;

        db.add(`money_${message.guild.id}_${message.author.id}`, prize)

      } else {
        let prize = money;
        result = `Haz perdido  ${prize} ${emoji}. Mejor suerte la proxima.`;

        db.subtract(`money_${message.guild.id}_${message.author.id}`, prize)
      }

    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`Flip ${outcome}`)
        .setDescription(result)
      await message.channel.send({ embed
      }).catch(e => {
        this.client.looger.error(e);
        return message.channel.send(`An error occurred:\n\```${error.message}\````);
      });
      setTimeout(() => {
        recentUsers.delete(message.author.id);
      }, cooldown);
    }
  };


