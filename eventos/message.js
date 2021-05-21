//Esta función se activara por cada mensaje enviado en un canal por el usuario:
module.exports = async (client, message) => {
  let words = ["cat","fish","pig","dog"];
  if (
    words.some(p =>
      message.content
        .toLowerCase()
        .split(" ")
        .includes(p.toLowerCase())
    )
  ) {
    //await message.react("👑");
     await message.delete();

     await message.channel.send(`<@${message.author.id}> No bad word here`);
  }

  if (!message.content.startsWith(client.config.prefix)) return;
  if (message.author.bot) return;

  // Definiendo los argumentos y comandos.
  const args = message.content
    .slice(client.config.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  let camd = client.comandos.get(command); // Obtiene el comando de la colección client.commandos
  if (!camd) return; // Si no hay comandos no ejecute nada.

  if (!camd) return;

  // Manejando los eventos.
  let cmd = client.comandos.get(command); // Obtiene el comando de la colección client.commandos
  if (!cmd) return; // Si no hay comandos no ejecute nada.

 
  cmd(client, message, args);
};
