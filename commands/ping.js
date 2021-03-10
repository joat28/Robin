const {prefix} = require('../config.json');
module.exports = {
    name : "ping",
    usage: `${prefix}ping`,
    aliases: [],
    args:false,
    guildOnly:false,
    description : "this is used for testing!",
    execute(message, args,client){
      message.channel.send("Pinging....").then((msg)=>{msg.edit(`Ponged In: ${Math.round(client.ws.ping)}ms`)})
    }

}
