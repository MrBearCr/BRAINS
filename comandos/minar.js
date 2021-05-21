const Discord = require("discord.js")
const ms = require("parse-ms");



 module.exports = async (id , message, client ,args ) => { 

    let emoji = "<:MonedaOmega:749813116514074624>"
    let timeout = 1.08e+7;

    let minar = await db.get(`minar_${message.guild.id}_${message.author.id}`)

    if (minar !== null && timeout - (Date.now() - minar) > 0) {
    let time = ms(timeout - (Date.now() - minar));

let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(` Haz minando recientemente\nespera hasta que tengas condensador.\n${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } 
 else{
        let reward =["0" , "10", "25", "50", "75"] 
        let menas= ["BTC", "LTC","XLM","SHX","ETH","XRP","BTCH","DOGE","SHIB","BNB","BAN","XMR","USDT","USDC"]

        let mineral = menas[Math.floor(Math.random() * menas.length)]

          let realreward = reward[Math.floor(Math.random() * reward.length)]

        if (realreward == 0) return message.channel.send('Te quedaste dormido minando y te destruyeron , no obtienes nada :(')

        message.channel.send(`Haz estado minando en un cumulo algo de ${mineral} lo vendiste por **${realreward}** ${emoji}`)

        db.add(`money_${message.guild.id}_${message.author.id}`, realreward);

        db.set(`minar_${message.guild.id}_${message.author.id}`, Date.now())

      }
    }
    
    