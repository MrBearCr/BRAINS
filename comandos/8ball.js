const Discord = require("discord.js")

module.exports = async(client, message, args)=>{

 let mensaje = args.slice().join(" ")
 
 if(!mensaje) return message.channel.send("I need you to ask me a question.");

 let respuestas = ["In my opinion, yes", "It is true", "It is decidedly so", "Probably", "Good prognosis", "Everything points to yes", "Without a doubt", "Yes", "Yes - definitely" , "You must trust it", "Vague answer, try again", "Ask another time", "It would be better if I don't tell you now", "I can't predict it now", "Concentrate and ask again", "It may be", "Don't count on it", "My answer is no", "My sources tell me no", "The outlook is not good", "Very doubtful"]
 const ball = new Discord.MessageEmbed()

 .setColor("RANDOM")
 .setFooter("8Ball", client.user.avatarURL())
 .setTitle(`To the question\`${mensaje}\`, from \`${message.author.username}\``)
 .setDescription(`My answer is: ${respuestas[( Math.floor(Math.random() * respuestas.length))]}.`)
 message.channel.send({ embed : ball })
 }