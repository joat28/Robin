const {prefix} = require('../config.json');
module.exports = {
    name : "role",
    description : "this is used to give role",
    args: true,
    guildOnly: true,
    aliases: [],
    usage : `${prefix} User Role_To_Give>`,
    execute (message, args, client){
        return message.reply(`You wanted to assign ${args[0]} a role of ${args[1]}! `);
    }
} 