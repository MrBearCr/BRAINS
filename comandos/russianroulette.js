const Death = require("death-games")
const Discord = require("discord.js");


module.exports =  (client, message, args) => {



  let  author = [message.author.id] //Hacemos que el jugador N.1 siempre sea el autor del mensaje
  let  menciones = message.mentions.users.map(x  =>  x.id); //Obtenemos las ID's de las personas mencionadas
  let  jugadores = author.concat(menciones); //Juntamos ambos arrays en uno mismo

  if(menciones.includes(message.author.id)) return message.channel.send("No te puedes mencionar a ti mismo!")
  if(message.mentions.users.map(x => x.bot).some(x => x)) return message.channel.send("No puedes mencionar a un bot!")

const ruleta = new Death.Roulette({jugadores: jugadores}) //Creamos el juego con el array de ID's de los jugadores, si no hay mencionados sólo juega el autor del mensaje

message.channel.send("Empieza "+message.author.toString())

const colector = message.channel.createMessageCollector(msg => ruleta.game.turno == msg.author.id && !isNaN(msg.content)) 

colector.on('collect', msg  => { //Creamos un colector de mensajes 

if(!Number.isSafeInteger(+(msg.content))) return msg.reply("Necesitas introducir un número más pequeño!") //Si el número es excesivamente grande

let muertoXD = ruleta.elegir(msg.content) //Elegimos el número de veces a girar el tambor del revólver
if(muertoXD){ 
  message.channel.send(msg.author.toString()+" ha muerto! Se ha acabado la ronda!")
  colector.stop()
  return;
}else{
  message.channel.send("Parece que "+msg.author.toString()+" se ha salvado!\nTurno de "+message.guild.members.cache.get(ruleta.game.turno).user.toString()+"\n"+
  "Posición actual: "+ruleta.game.posicion+", Bala: "+ruleta.game.bala)
}

})
}