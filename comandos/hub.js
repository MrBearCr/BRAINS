const Discord = require("discord.js");



module.exports = (client, message, args) => {

message.delete()

let txt = args.join('%20');  

if (!txt) return message.channel.send("You forgot to put the arguments.") 
	
let autor = message.author; 

let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${message.author.displayAvatarURL()}&text=${txt}&username=${autor.username}&raw=1`,'logo.png') 

message.channel.send(attachment)
}