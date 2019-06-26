module.exports.run = async (client, message, args) => {
	
        message.channel.send('Good Morning **' + message.member.user.tag + '**!!https://img.etimg.com/thumb/msid-67055775,width-643,imgsize-709079,resizemode-4/coffeebeans.jpg')
		message.delete({timeout: 1000});
}

module.exports.config = {
	command: 'gm'
}
