const  Death = require("death-games");
const Discord = require("discord.js");

module.exports = async(client, message, args) => {


let  author = [message.author.id]
let  menciones = message.mentions.users.map(x  =>  x.id);
let  jugadores = author.concat(menciones); //Un array donde el primer elemento es el autor del mensaje, los demás los usuarios mencionados

if(!menciones.length) return  message.channel.send("You have to mention at least one person!")
if(menciones.includes(message.author.id)) return message.channel.send("You can't mention yourself!")
if(message.mentions.users.map(x => x.bot).some(x => x)) return message.channel.send("You can't mention a bot!")
//*Nota:* El elemento 0 del array jugadores es el que elige la frase!

  const  canal = await  message.author.createDM() //Puedes definir un canal a donde se le preguntará la palabra al usuario

canal.send("Choose your word")

let  palabra;
await  canal.awaitMessages(m  =>  m.author.id == message.author.id && m.content.replace(/[^A-Za-z0-9ñ ]/g,"").length,
{max:  1, time:  20000, errors:["time"]}).then(collected  => {
palabra = collected.first().content.replace(/[^A-Za-z0-9ñ ]/g,"")
}).catch(() =>  canal.send("Time out!"))
if(!palabra) return

const  ahorcado = new  Death.Hangman(palabra, {jugadores:  jugadores, lowerCase:  true, vidas: 7})

ahorcado.on("end", game  => {

if(game.winned){ //Si el juego ha terminado y se ha descubierto toda la frase

message.channel.send("The game is over! The phrase was: **"+game.palabra+"**\n"+
"Discovered by: **"+client.users.cache.get(game.turno).tag+"**\n\n```"+game.ascii.join(" ")+"```")
return;

}else{ //Si ha terminado pero no han descubierto la frase

message.channel.send("They have lost! The phrase was: **"+game.palabra+"**\n"+
"Last error: **"+client.users.cache.get(game.turno).tag+"**\n\n```\n"+game.ascii.join(" ")+"```")

}

})

message.channel.send(message.author.toString()+" you have chosen your word!\n\n"+
"```\n"+ahorcado.game.ascii.join(" ")+"```**Starts "+client.users.cache.get(ahorcado.game.turno).tag+"**")

const  colector = message.channel.createMessageCollector(msg  =>  msg.author.id == ahorcado.game.turno && /[A-Za-z0-9ñ]/.test(msg.content) && msg.content.length == 1);

colector.on('collect', msg  => {

let encontrado = ahorcado.find(msg.content) //Usamos el método find() para encontrar una letra en la frase, éste retorna true si se encuentra, false si no

if(ahorcado.game.ended){
colector.stop()
return;
}

if(!encontrado) message.channel.send("- Wow! It seems that the letter"+msg.content+" not found in sentence! \nIncorrect letters: **["+ahorcado.game.letrasIncorrectas.join(", ")+"]**")

message.channel.send("```\n"+ahorcado.game.ascii.join(" ")+"\n```**Turn of "+client.users.cache.get(ahorcado.game.turno).tag+"**\nRemaining attempts: **"+ahorcado.game.vidas+"**")

})
}