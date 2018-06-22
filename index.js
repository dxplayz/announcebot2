const Discord = require('discord.js');
const Client = new Discord.Client();
const OwnerID = "130515926117253122";

const prefix = "!"



Client.on("ready", () => {
	console.log("online");
	Client.user.setPresence({ game: { name: `Sweets Bakery`, type: 0} });
});

// welcome message

Client.on("guildMemberAdd", member => {
	   const welcomeChannel = member.guild.channels.find('name', 'welcome');
                if (!welcomeChannel === null) return;
   client.channels.get(welcomeChannel.id).send("Welcome to: " + member.guild.name + " Hope you enjoy it here")
});

Client.on("guildMemberRemove", member => {
   const welcomeChannel = member.guild.channels.find('name', 'welcome');
                if (!welcomeChannel === null) return;
   client.channels.get(welcomeChannel.id).send("Goodbye: " + member.user.username + " from " + member.guild.name)
});

Client.on("guildCreate", guild => {
	console.log("Some one added the test bot to a server created by: " + guild.owner.user.username)
});

Client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	
	let args = message.content.split(" ").slice(1);
	
	if (command === "ping") {
		message.channel.send(`Pong! Time took: ${Date.now() - message.createdTimestamp} ms`);
	} else


   if (command === "announce") {
	   if (message.member.hasPermission("ADMINISTRATOR")) {
		   const color = args[0]
				
		   const text = args.slice(1).join(" ");
		   if (text.length < 1) return message.channel.send("Can not announce nothing");
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor("0x" + color)
		   .setTitle("Sweets Announcement: 🎉")
		   .setFooter('Announcement by: ' +  message.author.username)
		   .setDescription(text);
		   message.channel.send("@everyone")
		   message.channel.send({embed})
	   }
   } 
});

Client.login("NDUyOTc2NzM0ODYyNzA0NjY4.Dg4GGA.RwrBjCTREjgBWWCUoGyqSoo1ilI"); //replace with your token dont share yours.
