 const Discord = require('discord.js')

 module.exports = async(discord,message) => { 


 if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('** You cannot use this command **')
 if(!message.guild.me.hasPermission("MANAGE_ROLES", "ADMINISTRADOR")) return message.channel.send("The bot needs permission to manage roles")
 
let usuario = message.mentions.members.first();

let rol = message.mentions.roles.first();

if (rol.comparePositionTo(message.member.roles.highest) >= 0) return message.channel.send("You cannot add a role equal to or greater than yours.")
    
 if (!rol.editable) return message.channel.send("Role higher than mine")
 if (usuario.roles.cache.has(rol.id)) return message.channel.send("You already have that role")
if (user.roles.cache.has(rol.id)) return message.channel.send("That user already has that role") 


if (!usuario) return message.channel.send(
  new Discord.MessageEmbed()
  .setTitle("Mention the user")
  .setColor("PURPLE"))

if (!rol) return message.channel.send(
  new Discord.MessageEmbed().setTitle("Mention the role to put the user")
.setColor("PURPLE"))
await usuario.roles.add(rol)
message.channel.send(
  new Discord.MessageEmbed()
  .setDescription(`Role ${rol} added to ${user} successfully!`)
  .setColor("RANDOM"))

        }