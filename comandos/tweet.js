const Discord = require("discord.js");
const { MessageAttachment } = require('discord.js')//requerimos messageattachment de discord.js



module.exports = (client, message, args) => {


message.delete() //Con esto borraremos el mensaje del comando, lo pueden quitar si quieren
	
let txt = args.join('%20'); //Definimos los args.
	
const embed2 = new Discord.MessageEmbed() //EMBED DE ERROR
.setTitle(`ERROR`)
.setDescription(`You have not placed any arguments.`)
.setColor(`RED`)
.setThumbnail("https://weakwifisolutions.com/wp-content/uploads/2019/08/error-red-cross-1.png?ezimgfmt=rs:372x372/rscb2/ng:webp/ngcb2")	
	

if (!txt) return message.channel.send(embed2) //Si no hay argumentos se enviara esto

	
let autor = message.author; //Definiremos autor

let attachment = new Discord.MessageAttachment(`https://nekobot.xyz/api/imagegen?type=tweet&username=${autor.username}&text=${txt}&raw=1`,'logo.png') 

//Creamos el attachment reemplazando los valores por el nombre del autor y los argumentos por el texto


message.channel.send(attachment)
}