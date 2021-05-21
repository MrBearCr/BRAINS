const Discord = require('discord.js');

module.exports = (client, member) => {
console.log(`Nuevo usuario:  ${member.user.username} se ha unido a ${member.guild.name}.`);
let randomColor = ((1 << 24) * Math.random () | 0) .toString (16); // Genera un valor hexadecimal aleatorio.

let guild = member.guild; 
let memberTag = member.user.tag; 
if(guild.systemChannel){
	guild.systemChannel.send(new Discord.MessageEmbed() 
  .setTitle(memberTag + " Se a unido a el servidor miembros ahora: " +  member.guild.memberCount) // Setting embed description
  .setColor(randomColor) 
	.setTimestamp() 
	);
}
  
 member.send(":D")

             }