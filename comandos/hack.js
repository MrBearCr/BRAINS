

const Discord = require('discord.js');
const chance = require('chance').Chance();

module.exports = async (client, message, args) => {
  
    let dominios = ["outlook.com","gmail.com","hotmail.com", "yahoo.com","SHX.com","BTC.com","StrongHold.com"]
   

    let usuario = message.mentions.users.first()
    let autor = message.author

    var correo = dominios[Math.floor(Math.random() * dominios.length)];

  if(usuario.id === autor.id){
      message.channel.send(`No te puedes autohackear`).then(Message => Message.delete({ timeout: 5000 }))
      return;
    }
   

    let señal = chance.ip();
    let ipv6 = chance.ipv6();
    let numero = chance.phone({ country: 'us', mobile: true });
    let email = chance.email({domain: correo })
    let hash = chance.hash({length: 80})
    let rd = chance.natural({min: 1, max: 20});

    let contraseña =  chance.word({ length: 15 });
   
   
    const hackeo = new Discord.MessageEmbed() 

    

        .setDescription(`${autor} haked ${usuario} for ${rd}SHX`)
        .addField("Ip: ",señal,true )
        .addField("Ipv6:",ipv6,true)
        .addField("Number: ",numero)
        .addField("Email: ",email,true)
        .addField("Password: ",contraseña)
        .addField("Txid:",`[\`${hash}\`](https://shx.stronghold.co)`)
        .setColor(`RED`)
        message.channel.send({ embed : hackeo });
}