module.exports.run = async (client, message, args) => {

message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Info",
    description: "Dit is alles wat u moet weten over de IceTopia Bot.",
    fields: [{
        name: "Ontwikkelaar",
        value: "De trotse ontwikkelaar van de IceTopia Bot is Adrian Kuśmierek."
      },
      {
        name: "Ontwikkeling",
        value: "De bot is gemaakt en ontwikkeld op 25/6/2019 en bevindt zich nog steeds in de ** __ALPHA-VERSIE__ **."
      },
      {
        name: "GitHub",
        value: "U zult het openbare script [hier](https://github.com/AdrianKusmierek/IceTopia-Bot/) kunnen vinden."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Adrian"
    }
  }
});
message.delete({timeout: 1000});

}

module.exports.config = {
	command: 'info'
}
