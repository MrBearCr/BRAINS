
module.exports = (client,message,args) => {
  const Discord = require('discord.js');
      let randomColor = ((1 << 24) * Math.random () | 0) .toString (16); // Genera un valor hexadecimal aleatorio.

      var missingPermissionsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the user is missing permissions
          .setColor(randomColor)
          .setAuthor(message.author.username, message.author.avatarURL)
          .setTitle('Insufficient permissions!')
          .setDescription('You need `MANAGE_MESSAGES` permission to use this command!')
          .setTimestamp();
      var missingArgsEmbed = new Discord.MessageEmbed() // Creates the embed thats sent if the command isnt run right
          .setColor(randomColor)
          .setTitle('Arguments are missing!')
          .setDescription('Usage: $warn [@User] [Reason]')
          .setTimestamp();
      if(!message.member.hasPermission('MANAGE_MESSAGES'))
       return message.channel.send(missingPermissionsEmbed)// Checks if the user has the permission
      let mentioned = message.mentions.users.first(); // Gets the user mentioned!
      if(!mentioned) return message.channel.send(missingArgsEmbed).then(Message => Message.delete({ timeout: 3000 }))
                  // Triggers if the user donsn't tag a user in the message
      let reason = args.slice(1).join(' ') // .slice(1) removes the user mention, .join(' ') joins all the words in the message, instead of just sending 1 word
      if(!reason) return message.channel.send(missingArgsEmbed); // Triggers if the user dosn't provide a reason for the warning
  
      var warningEmbed = new Discord.MessageEmbed() // Creates the embed that's DM'ed to the user when their warned!
          .setColor(randomColor)
          .setTitle(`You were warned in ${message.guild.name}`)
          .addField('by', message.author.tag)
          .setThumbnail("https://cdn.discordapp.com/attachments/610877321435545600/614190230047686747/warning.png")
          .addField('Reason', reason)
          .setTimestamp();
      mentioned.send(warningEmbed); // DMs the user the above embed!
      var warnSuccessfulEmbed = new Discord.MessageEmbed() // Creates the embed thats returned to the person warning if its sent.
          .setColor(randomColor)
          .setTitle('User warned!');
      message.channel.send(warnSuccessfulEmbed).then(Message => Message.delete({ timeout: 3000 })); // Sends the warn successful embed
      message.delete(); // Deletes the command
  }