module.exports = (client,message,args) => {

var id = message.channel.id;
        message.guild.channels.get(id).createInvite({
           maxAge: 0      

          }).then(invite =>  
    message.channel.send(invite.url)
      );
      }