const slotItems = ["🍇", 
"🍉", 
"🍊",
 "🍎", 
 ":seven:", 
 "🍓", 
 "🍒"];
const Discord = require('discord.js');

module.exports = async (bot, message, args) => {
let emoji = "<:MonedaOmega:749813116514074624>"

    let user = message.author;
    let moneydb = await db.get(`money_${message.guild.id}_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;

    let moneymore = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`❌ Estas apostando mas de lo que tienes.`);

    let moneyhelp = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`❌ Especifica una cantidad.`);

    if (!money) return message.channel.send(moneyhelp);
    if (money > moneydb) return message.channel.send(moneymore);

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new Discord.MessageEmbed()
         .setTitle("🎰 Tirando 🎰")
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\n  ${message.author.tag}  Ganaste ${money}${emoji}`)
            .setColor("GREEN")
        message.channel.send(slotsEmbed1)
        db.add(`money_${message.guild.id}_${user.id}`, money)
    } else {
        let slotsEmbed = new Discord.MessageEmbed()
                 .setTitle("🎰 Tirando 🎰")
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\n ${message.author.tag} Perdiste ${money}${emoji}`)
            .setColor("RED")
        message.channel.send(slotsEmbed)
        db.subtract(`money_${message.guild.id}_${user.id}`, money)
    }

}