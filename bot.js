// Calling the package
const Discord = require("discord.js")
const client = new Discord.Client﻿
const ownerID = '501122648806260740';
const fs = require('fs');
const prefix = '\\';
 


const commandsList = (fs.readFileSync('Storage/commands.txt', 'utf8'));
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// Functions
function userInfo(user) {
    var finalString = '';

    // name.
    finalString += '**' + user.username + '**, with the **ID** of **' + user.id + '**';

    // At date.
    var userCreated = user.createdAt.toString().split(' ');
    finalString += ', was **created on ' + userCreated[1] + ', ' + userCreated[2] + ' ' + userCreated[3] + '.**'

    // Messages sent.
    finalString += ' Since then, they have sent ' + userData[user.id].messagesSent + ' messages to this discord server.'

    return finalString;
}


// listener event: message received
client.on('message', message => {

    // variables
    let msg = message.content.toUpperCase(); 
    let sender = message.author; 
    let cont = message.content.slice(prefix.length).split(" ");
    let args = message.content.slice(prefix.length).split(/ +/);
	
    if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	if (!message.content.startsWith(prefix)) return;
	
	var cmd = client.commands.get(cont[0])
	var command = args.shift().toLowerCase();
	

   
    // first we need to make sure that it isn't reading a message that the bot is sending
    if (sender.id === '579969907924533259') {
        return;
    }
	
	 // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (msg === prefix + 'JOIN') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }

    // Help command
    if (msg === prefix + 'HELP' || msg === prefix + 'COMMANDS') {
        message.channel.send(commandsList)
		message.delete({timeout: 1000});
    }
	
    if (command === 'ping') {
	message.channel.send('Pong!');
    }

    if (message.channel.id === '579779890052595743') {
        if (isNaN(message.content)) {
        message.delete()
        message.author.send('Only send numbers please.')
    }
}

if (msg.includes('LOSER')) {
    message.delete();
    message.author.send('Please prevent yourself from swearing.')
}

if (msg.includes('FUCKER')) {
	message.delete();
	message.author.send('Please prevent yourself from swearing.')
}

if (msg.includes('FUCKING')) {
    message.delete();
    message.author.send('Please prevent yourself from swearing.')
}

if (msg.includes('IDIOT')) {
    message.delete();
    message.author.send('Please prevent yourself from swearing.')
}

if (msg.includes('BITCH')) {
    message.delete();
    message.author.send('Please prevent yourself from swearing.')
}

if (msg.includes('FUCK')) {
    message.delete();
    message.author.send('Please prevent yourself from swearing.')
}


	
if (msg.startsWith(prefix + 'EVENT')) {
	       const color = args[0]
           const text = args.slice(0).join(" ");
           if (text.length < 1) return message.channel.send("Can not make an event of nothing");
           const embed = new Discord.RichEmbed()
           .setColor(0xff6300)
           .setTitle("Event")
           .setDescription(text);
           message.channel.send({embed})
     message.delete({timeout: 1000});	
}
	
if (msg.startsWith(prefix + 'MELD')) {
	       const color = args[0]
           const text = args.slice(0).join(" ");
           if (text.length < 1) return message.channel.send("Can not make an event of nothing");
           const embed = new Discord.RichEmbed()
           .setColor(0x0000ff)
           .setTitle("Melding")
           .setDescription(text);
           message.channel.send({embed})
     message.delete({timeout: 1000});	
}
	
	if (msg.startsWith(prefix + 'IP')) {
           const color = args[0]
           const embed = new Discord.RichEmbed()
           .setColor(0xff0000)
           .setTitle("IP")
           .setDescription("**145.239.98.210:25566**");
           message.channel.send({embed})
     message.delete({timeout: 1000});
   }
	
   
   
   if (msg.startsWith(prefix + 'CLEAR')) {
	   if (message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})
	   }
    }
   
   
	
});


// Listener Event: Bot Lauched
client.on('ready', () => {
	
	 // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        // List all channels
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })
	
    console.log('Bot Lauched...') // Runs when the bot is Launched


    client.user.setStatus('Online')
    client.user.setPresence({
        game: {
            name: '\\help',
            type: "Playing",
            url: "https://discordapp.com/"
        }
    });
	
});

client.on('guildMemberAdd', member => {

    console.log('User ' + member.username + ' has joined the server!')

    var role = member.guild.roles.find('name', '');

    member.addRole(role)

    member.guild.channels.get('583971779446439937').send('Welcome **' + member.user.username + '**!!')

});

    client.on('guildMemberRemove', member => {

        member.guild.channels.get('583971779446439937').send('**' + member.user.username + '**, has left the server!');

});

// Login
client.login(process.env.BOT_TOKEN)
