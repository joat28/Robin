const {prefix} =  require('./config.json');
module.exports = {
    
    name : "kick",
    description : "this command is used to kick players",
    args: true,
    guildOnly: true,
    usage: `${prefix}kick <mention user to kick>`,
    aliases: ["remove"],
    execute(message, args){
        if (!message.mentions.users.size) {
            message.reply('You need to tag a person to Kick them!');
        }
        else {
            const taggedUser = message.mentions.users.first();
            message.reply(`You wanted to kick ${taggedUser.username}`);
        }
    }
}
