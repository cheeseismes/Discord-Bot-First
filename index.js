// Require the necessary discord.js classes
const { Client, Intents, Message } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply('Pong!');
	}
	if (interaction.commandName === 'enable'){
		await interaction.reply('True');
	}
	if (interaction.commandName === 'checknsfw'){
		if(interaction.channel.nsfw==true){
			await interaction.reply({ content: 'nsfw',})
		} else{
			await interaction.reply({ content: 'sfw'})
		}
			console.log(interaction.channel.nsfw)
	}
});





// Login to Discord with your client's token
client.login(token);