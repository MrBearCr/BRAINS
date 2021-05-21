module.exports = (client,message,args) => {



if(!message.guild.me.permissionsIn(message.channel).has('MANAGE_MESSAGES')){
  return message.channel.send('Sorry, but I dont have permissions')
}

if(!message.member.permissionsIn(message.channel).has('MANAGE_MESSAGES')){
  return message.channel.send('Sorry, but you dont have permissions')
}

if(!args) return message.channel.send('Enter the number of messages to delete');
let cantidad = parseInt(args[0])

if(!cantidad || isNaN(cantidad)) return message.reply('Enter a number please') 

if(cantidad > 100){
  message.channel.send('The maximum number of messages I can delete is 100, therefore I will automatically set it there')
  cantidad = 100
}

message.channel.fetchMessages({
  limit: cantidad
}).then(mensajes => {
  message.channel.bulkDelete(
    mensajes.filter(m => !m.pinned) 
  ).then(() => {
    message.channel.send(`Done, delete the ${cantidad} messages: ok_hand:`).then(m => m.delete(20000))
  }).catch(e => {
    message.channel.send('An error occurred and I could not clear the messages')
  })
})
}