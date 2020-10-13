module.exports = {
    name : "ping",
    usage: "ping",
    description : "this is used for testing!",
    execute(message, args){
		message.channel.send('Pong.');
    }
}
