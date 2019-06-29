module.exprots.run = async (client, message, args) => {

        message.channel.send('IP: **145.239.98.210:25566**.')
                message.delete({timeout: 1000});
}

module.exports.config = {
        command: 'ip'
}
