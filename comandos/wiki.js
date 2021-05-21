const wtf = require("wtf_wikipedia"); //requerimos el modulo
const Discord = require("discord.js");

module.exports = (client, message, args) => {
  let busqueda = args.slice(0).join(' ');
  if (!busqueda) return message.channel.send("Que deseas buscar?");

  wtf.fetch(busqueda, "en").then(doc => {
    //fetcheamos la busqueda de wikipedia y colocamos el idioma de las busquedas

    const embed = new Discord.MessageEmbed() //el  .embed
      .setColor("#FFFFFF")
      .setTitle(`:mag_right: ${busqueda} :mag:`)
      .setDescription(`${doc.sentences(0).text()} ${doc.sentences(2).text()}`) //doc.sentences().text son las oraciones que habra sobre la info del tema
      .setThumbnail(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png"
      ) //el logo de Wikipedia
      .setFooter(`Asking for ${message.author.username}`) //quien pidio la busqueda
      .setTimestamp(); //la hora a la que se pidio
    message.channel.send(embed);
  });
}; //y listo!
