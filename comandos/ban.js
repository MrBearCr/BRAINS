module.exports = (client,message,args) => {
let user = message.mentions.users.first();
    let razon = args.slice(1).join(' ');


      if (message.mentions.users.size < 1) return message.reply('Must mention someone.').catch(console.error);
      if(!razon) return message.channel.send('Enter a reason, `ban @username [reason]`');
      if (!message.guild.member(user).bannable) return message.reply('I cannot ban the mentioned user.');
    

        message.guild.member(user).ban(razon);
        message.channel.send(`**${user.username}**,He was Hit with BANHAMMER:hammer:, reason:${razon}.`);

  };