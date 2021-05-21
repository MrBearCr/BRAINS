const Discord = require("discord.js");

module.exports = (client, message, args) => {
  var embedhelpmember = new Discord.MessageEmbed() 
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle("**Command List**\n") 
    .addField ("Ping", "Check BOT latency with discord API.")
    .addField ("User", "Shows the data of the named user.")
    .addField ("Server", "Show information about a server.")
    .addField ("Invite", "Create an invite link.")
    .addField ("Report", "Send your report or suggestion to the bot's mailbox.")
    .addField ("BotStat", "Shows the statistics of the Bot.")
    .addField ("Giveaway", "Generates a giveaway for participants.")
    .addField ("8ball", "The bot will answer your questions.")
    .addField ("Hack", "You hack the named user.")
    .addField ("Slap", "Slap someone with a nice gif")
    .addField ("Kill", "Kill someone by showing a gif")
    .addField ("Missile", "Fire a missile with a gif")
    .addField ("Nuke", "You kill the aforementioned with a gif.")
    .addField ("Mines", "A simple minesweeper game")
    .addField ("Rpt", "Rock-paper-scissors game with reward when you win")
    .addField ("Casino", "Show all casino commands")
    .addField ("Wiki", "Used to search wikipedia.")
    
   
    .setFooter("Version 0.3.5", client.user.avatarURL)
    .setColor(0x66b3ff);
  var embedhelpadmin = new Discord.MessageEmbed() 
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle("**Lista de comandos Admin**\n") 
    .addField("Borrar", "Borra el numero de mensajes estipulados. [max:98]") 
    .addField("Warn", "Advierte a el usuario de una falta a las reglas.")
    .addField("Reinicio", "Reinicia el bot , Solo Owner.")
    .addField("Ban", "Banear a un usuario del servidor. ")
    .addField("Addrole", "Sirve para agregar el rol sin tener que entrar en el sistema de discord.")
    .addField("Removerol","Sirve para remover un rol sin tener que entrar en sistema de discord.")
    .addField("Kick", "Expulsar a un usuario del servidor.") 
    .setColor(0x660066) 
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/610877321435545600/614061525149417474/JsgxK3Y.png"
    )
    .setFooter("Ooo, un admin!  |" + "Version 0.3.5", client.user.avatarURL);
  message.author.send(embedhelpmember);
if(!message.member(client.user).hasPermission("ADMINISTRATOR")){
    return message.author.send(embedhelpadmin);
};
}