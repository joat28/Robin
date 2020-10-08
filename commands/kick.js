module.exports = {
    
    name : "kick",
    description : "this command is used to kick players",
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
