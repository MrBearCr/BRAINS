const Discord = require("discord.js") //Para los embeds
const Death = require("death-games")

module.exports =  (client, message, args, msg) => {
  

const largo = 7
const ancho = 7
const bombas = 10

const caracteres = [":black_large_square:",":one:",":two:",":three:",":four:",":five:",":six:",":seven:",":eight:", ":boom:"]


const numerosLaterales = [":black_large_square:",":one:",":two:",":three:",":four:",":five:",":six:",":seven:",":eight:", ":nine:"] 


   const buscaminas = new Death.Buscaminas({largo: largo, ancho: ancho, bombas: bombas, charOculto: ":x:", chars: caracteres})
  
let coordsLetras = [ [":regional_indicator_a:",":regional_indicator_b:",":regional_indicator_c:",":regional_indicator_d:",
":regional_indicator_e:",":regional_indicator_f:",":regional_indicator_g:",":regional_indicator_h:",
":regional_indicator_i:",":regional_indicator_j:",":regional_indicator_k:",":regional_indicator_l:",
":regional_indicator_m:",":regional_indicator_n:",":regional_indicator_o:"].slice(0, buscaminas.game.tablero.largo) ]

let tablero1 = coordsLetras.concat(buscaminas.game.ascii)
               .flatMap(x => x.join(" ")) 

   let tablero2 = []           
               
 tablero1.forEach((x, i) => {
tablero2.push(numerosLaterales[i]+" "+x)
  }) 


  message.channel.send(new Discord.MessageEmbed().setDescription(
    tablero2.join("\n")
  ).setColor("RANDOM")) 

buscaminas.on("win", game => {
  message.channel.send("Congratulations you won "+game.tablero.casillas+" Boxes!")
  return;
})

  const colector = message.channel.createMessageCollector(msg => message.author.id == msg.author.id && msg.content.length == 2 && !buscaminas.game.descubiertos.includes(msg.content.toLowerCase()))  

  colector.on('collect', msg  => {

let encontrado = buscaminas.find(msg.content) 

let tablero = buscaminas.game.ascii.flatMap(x => x.join(" ")).join("\n")

if(!encontrado){ 
  message.channel.send(new Discord.MessageEmbed().setTitle("You lose :(").setDescription(
    tablero
   ).setColor("RANDOM"))
  colector.stop()
  return;
}


let tablero1 = coordsLetras.concat(buscaminas.game.ascii)
               .flatMap(x => x.join(" "))

   let tablero2 = []           
               
 tablero1.forEach((x, i) => {
tablero2.push(numerosLaterales[i]+" "+x)
  })


message.channel.send(new Discord.MessageEmbed().setDescription(
  tablero2.join("\n")
 ).setColor("RANDOM"))
  })
};