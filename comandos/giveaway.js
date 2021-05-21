const Discord = require('discord.js');
const ms = require("ms");
const { MessageEmbed } = require("discord.js");



module.exports = async (client,message,args,bot) => {
    if (!args[0]) return message.channel.send(`You didn't specify your time!`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
 `You did not use the correct format for that moment!`);
    if (isNaN(args[0][0])) return message.channel.send(`That is not a number!`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `I couldn't find that channel in the server!`
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`No specified prize!`);
    message.channel.send(`*Giveaway created in ${channel}*`);
    let Embed = new MessageEmbed()
      .setTitle(`${prize}!`)
      .setDescription(
        `Hosted by: ${message.author} \n React with 🎉 to participate`
      )
      .setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Not enough people react for the giveaway!`
        );
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `Winner of **${prize}** is...\n ${winner} Congratulations!!🥳🥳 `
      );
    }, ms(args[0]));
  };