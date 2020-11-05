const {prefix} = require('../config.json');

module.exports ={
    name: "args-info",
    description: "this is used as a test command for information about an arg and command",
    args: true,
    aliases: ['ai'],
    guildOnly:false,
    usage: `${prefix}args-info <arguements>` ,
    aliases: ["cmd-info"],
    execute(message, args, client){
            message.reply(`The arguments are : ${args}`)
        
    }
}