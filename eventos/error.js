const Discord = require("discord.js");
module.exports = (client, message) => {
  client.on("error", error => {
    // Enviamos un mensaje de información de los errores en un canal X
    client.channels.cache
      .get("744285771376099368")
      .send(`Se ha generado una error de conexión\nInformación: **${error}**`);

    // Por consola
    console.log(`Se ha generado una error de conexión\nInformación: ${error}`);
  });
};
