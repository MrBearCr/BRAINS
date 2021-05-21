const Discord = require('discord.js')

module.exports = (client, message, args, config) => {


 
     let emoji = "<:MonedaOmega:749813116514074624>"
    let embed = new Discord.MessageEmbed() 
    .setTitle (`Omega Casino Commands`)
.addField (`Flip`,` Flip a coin and get a reward if you get it right`)
.addField (`Dice`,` Roll a die for a big reward`)
.addField (`Mining`,` You go crazy about mining cryptocurrencies for tokens`)
.addField (`Beg`,` You beg for 5 coins`)
.addField (`Balance`,` Check your, account balance`)
.addField (`Pay`,` You pay an amount of chips to a user`)
.addField (`Steal`,` You steal from a user but it may have consequences`)
.addField (`Roulette`,` Spin the wheel and choose a color let's see if you win`)
.addField (`Slot`,` Lower the lever and see if you're lucky `)

.setColor (`RANDOM`)
.setFooter (`Casino Version 0.1.0`)

    message.channel.send(embed)



}