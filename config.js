let config = {
  token: "NjA4NzI3MjY4ODY0Mjk0OTUz.XUsXcg.01Voug5_zVOOecDF-3-i6CMOYgA", // Reemplaze esto con el token de tu de bot.
  prefix: "$", // El prefix de su bot para indentificar sus comandos
"ownerID": "239885882578960386",
/**
	 * Instructions on how to get this: https://redd.it/40zgse
	 */
	yourID: "",

	setupCMD: "$roles",

	/**
	 * Delete the 'setupCMD' command after it is ran. Set to 'true' for the command message to be deleted
	 */
	deleteSetupCMD: true,

	initialMessage: `**React to the messages below to receive the associated role. If you would like to remove the role, simply remove your reaction!**`,
	
	embedMessage: `
  Reaccione al emoji que coincida con el rol que desea recibir.
	
	Si quieres remover el rol , simplemente quita tu reaccion.
	`,
	
	/**
	 * Must set this if "embed" is set to true
	 */
	embedFooter: "Version 0.3.5" ,
	
	roles: ["Hacker", "Artista", "Relaciones Publicas", "Interno"],

	/**
	 * For custom emojis, provide the name of the emoji
	 */
	reactions: ["💻", "🖌", "😃", "🆕"],

	/**
	 * Set to "true" if you want all roles to be in a single embed
	 */
	embed: true,

	/**
	 * Set the embed color if the "embed" variable is et to "true"
	 * Format:
	 * 
	 * #dd9323
	 */
	embedColor: "#dd9323",

	/**
	 * Set to "true" if you want to set a thumbnail in the embed
	 */
	embedThumbnail: false,

	/**
	 * The link for the embed thumbnail if "embedThumbnail" is set to true
	 */
	embedThumbnailLink: "",

	/**
	 * You"ll have to set this up yourself! Read more below:
	 * Please do not commit this token to the public if you contributed to this repository
	 * or host your code anywhere online. Giving someone your bot's token is the equivalent
	 * to giving someone the keys to your house and walking away!
	 * 
	 * https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token
	 */




























}

// Aqui exportamos el objeto config:
module.exports = config;
